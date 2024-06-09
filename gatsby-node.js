const fs = require("fs/promises");
const p = require("path");

const DRAFT_ENV = process.env.DRAFT_ENV === "true";

const contentTypes = [
  {
    nodeType: "GoogleDocs",
    getBody: n => n.markdown,
    filter: n => DRAFT_ENV || (n.draft ?? true),
    getPath: n => p.join(p.dirname(n.path), (n.slug ?? n.name) + ".mdx"),
  },
];

exports.createPages = function (gatsbyApi) {
  contentTypes.forEach(c => {
    gatsbyApi
      .getNodesByType(c.nodeType)
      .filter(c.filter)
      .forEach(n => writeMdx(c.getPath(n), c.getBody(n)));
  });
  gatsbyApi.getNodesByType("dropboxNode").forEach(async n => {
    writeMdx(
      n.dbxPath,
      await fs.readFile(gatsbyApi.getNode(n.localFile___NODE).absolutePath)
    );
  });
};

async function writeMdx(path, body) {
  let templ = p.dirname(path).split("/")[1] || "default";
  path = p.join(__dirname, "/src/pages", path);
  body += `\nexport { default } from "${__dirname}/src/templates/${templ}";\n`;
  await fs.mkdir(p.dirname(path), { recursive: true });
  await fs.writeFile(path, body);
}
