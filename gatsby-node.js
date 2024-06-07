/**
 * @type {import('gatsby').GatsbyNode}
 */
const fs = require("fs");
const p = require("path");

const DRAFT_ENV = process.env.DRAFT_ENV === "true";

const contentDir = p.join(__dirname, "./content");

const contentTypes = [
  {
    nodeType: "GoogleDocs",
    getSlug: (node) => node.slug ?? node.name,
    path: "blog",
    getBody: (node) => node.markdown,
    template: "Blog",
    isDraft: (node) => node.draft ?? true,
  },
];

exports.sourceNodes = function (gatsbyApi) {
  contentTypes.forEach((cont) => {
    gatsbyApi
      .getNodesByType(cont.nodeType)
      .filter((n) => DRAFT_ENV || !cont.isDraft(n))
      .forEach((n) => {
        n.slug = cont.getSlug(n);
        n.contentFilePath = p.join(contentDir, cont.path, p.dirname(n.path), n.slug + ".mdx");
        writeFileP(n.contentFilePath, cont.getBody(n));
      });
  });
};

module.exports.createPages = function (gatsbyApi) {
  contentTypes.forEach((cont) => {
    gatsbyApi
      .getNodesByType(cont.nodeType)
      .filter((n) => DRAFT_ENV || !cont.isDraft(n))
      .forEach((n) => {
        gatsbyApi.actions.createPage({
          path: p.relative(contentDir, n.contentFilePath).slice(0, -4),
          component: p.resolve(
            `./src/templates/${cont.template}.jsx?__contentFilePath=${n.contentFilePath}`
          ),
          context: { slug: n.slug },
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
