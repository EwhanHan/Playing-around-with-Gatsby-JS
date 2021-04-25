import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getSiteMetaData = graphql`
  {
    site {
      siteMetadata {
        title
        description
        aliasTest: author
        person {
          age
          name
        }
        complexData {
          age
          name
          test
        }
        simpleData
      }
    }
  }
`;

const QueryData = () => {
  const {
    site: {
      siteMetadata: { aliasTest },
    },
  } = useStaticQuery(getSiteMetaData);

  return <div>{aliasTest}</div>;
};
export default QueryData;
