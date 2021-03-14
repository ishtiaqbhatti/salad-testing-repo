import React from "react";
// import { graphql, useStaticQuery } from "gatsby";
import BlogArticle from "../components/blog-article";
import "../static/assets/css/index.css";

const IndexPage = () => {
  // const data = useStaticQuery(query);

  return <BlogArticle />;
};

// const query = graphql`
//   query {
//     strapiHomepage {
//       hero {
//         title
//       }
//       seo {
//         metaTitle
//         metaDescription
//         shareImage {
//           publicURL
//         }
//       }
//     }
//     allStrapiArticle(filter: { status: { eq: "published" } }) {
//       edges {
//         node {
//           strapiId
//           slug
//           title
//           category {
//             name
//           }
//           image {
//             childImageSharp {
//               fixed(width: 800, height: 500) {
//                 src
//               }
//             }
//           }
//           author {
//             name
//             picture {
//               childImageSharp {
//                 fixed(width: 30, height: 30) {
//                   src
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default IndexPage;
