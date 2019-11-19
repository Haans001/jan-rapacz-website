import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  return (
    <Helmet>
      <html lang="en" />
      <title>{site.title}</title>
      <meta name="description" content={site.description} />
    </Helmet>
  );
}

export default SEO;
