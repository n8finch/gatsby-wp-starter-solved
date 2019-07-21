// import createFilePath from 'gatsby-source-filesystem';
const path = require(`path`);

exports.onCreateNode = ({ node, getNode }) => {
    // wordpress__PAGE
    // wordpress__POST
    if (node.internal.type === `wordpress__POST`) {
        // console.log(node.title);
        // console.log(node.slug);
        // console.log(node.excerpt);
        // console.log(node.content);
        // const slug = createFilePath({ node, getNode, basePath: `pages` })
        // createNodeField({
        //     node,
        //     name: `slug`,
        //     value: slug,
        // })
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
      {
        allWordpressPost(sort: { fields: [date] }) {
            edges {
                node {
                    title
                    excerpt
                    content
                    slug
                }
            }
        }
      }
    `
    ).then(result => {
        result.data.allWordpressPost.edges.forEach(({ node }) => {
            createPage({
                path: node.slug,
                component: path.resolve(`./src/templates/blog-post.js`),
                context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.slug,
                },
            })
        })
    })
}