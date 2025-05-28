const path = require("path");

// Add slug field from file path if not in frontmatter
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);
    const slug =
      node.frontmatter.slug ||
      fileNode.relativeDirectory ||
      fileNode.name;

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

// Resolve featuredImage (string) to File node, so ImageSharp processes it
// Credits: https://cloudinary.com/blog/guest_post/Featured-Image-with-MDX-and-Gatsby
exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    MarkdownRemark: {
      featuredImageFile: {
        type: "File",
        resolve(source, args, context, _) {
          const { featuredImage } = source.frontmatter;
          const parent = context.nodeModel.getNodeById({
            id: source.parent, // source: Remark node, parent: MD file
          });

          return context.nodeModel.findOne({
            type: "File",
            query: {
              filter: {
                relativePath: {
                  eq: path.join(parent.relativeDirectory, featuredImage),
                },
              },
            },
          });
        },
      },
    },
  });
};

// Create blog post pages w/ blog.js template and project pages w/ project.js template
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Create blog pages
  const blogResult = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  blogResult.data.allMarkdownRemark.nodes.forEach((node) => {
    const slug = node.frontmatter.slug || node.fields.slug;
    createPage({
      path: `/blog/${slug}`,
      component: path.resolve("./src/templates/blog.js"),
      context: {
        slug,
      },
    });
  });

  // Create project pages
  const projectResult = await graphql(`
    {
      allProjectsYaml {
        nodes {
          slug
        }
      }
    }
  `);

  projectResult.data.allProjectsYaml.nodes.forEach((node) => {
    createPage({
      path: `/projects/${node.slug}`,
      component: path.resolve("./src/templates/project.js"),
      context: {
        slug: node.slug,
      },
    });
  });
};
