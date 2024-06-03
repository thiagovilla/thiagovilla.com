/**
 * @type {import('gatsby').GatsbyNode}
 */
const fs = require("fs");
const p = require("path");

const contentDir = p.join(__dirname, "./content");

const contentTypes = [
  {
    nodeType: "GoogleDocs",
    getSlug: (node) => node.slug ?? node.name,
    path: "blog",
    getBody: (node) => node.markdown,
    template: "Blog",
  },
];

exports.sourceNodes = function (gatsbyApi) {
  contentTypes.forEach((cont) => {
    gatsbyApi.getNodesByType(cont.nodeType).forEach((node) => {
      node.slug = cont.getSlug(node);
      node.contentFilePath = p.join(contentDir, cont.path, node.slug + ".mdx");
      writeFileP(node.contentFilePath, cont.getBody(node));
    });
  });
};

module.exports.createPages = function (gatsbyApi) {
  contentTypes.forEach((cont) => {
    gatsbyApi.getNodesByType(cont.nodeType).forEach((node) => {
      gatsbyApi.actions.createPage({
        path: p.relative(contentDir, node.contentFilePath).slice(0, -4),
        component: p.resolve(
          `./src/templates/${cont.template}.jsx?__contentFilePath=${node.contentFilePath}`
        ),
        context: { slug: node.slug },
      });
    });
  });
};

const noop = function () {};

function writeFileP(path, body) {
  fs.mkdir(p.dirname(path), { recursive: true }, (err) => {
    if (err) throw err;
    fs.writeFileSync(path, body, noop);
  });
}
