/**
 * @type {import('gatsby').GatsbyNode}
 */
const fs = require("fs");
const path = require("path");

const tempDir = path.join(__dirname, "./temp");

if (fs.existsSync(tempDir)) {
  fs.rmSync(tempDir, { recursive: true });
}

exports.createPages = async function ({ graphql }) {
  const { data } = await graphql(`
    query {
      allGoogleDocs {
        nodes {
          path
          markdown
        }
      }
    }
  `);
  data.allGoogleDocs.nodes.forEach((node) =>
    writeMdx("blog/" + node.path, node.markdown)
  );
};

const noop = function () {};

function writeMdx(path_, body) {
  fs.mkdir(
    path.join(tempDir, path.dirname(path_)),
    { recursive: true },
    (err) => {
      if (err) throw err;
      fs.writeFile(path.join(tempDir, path_) + ".mdx", body, noop);
    }
  );
}
