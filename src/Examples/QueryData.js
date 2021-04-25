import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getSiteMetaData = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
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
      siteMetadata: { author },
    },
  } = useStaticQuery(getSiteMetaData);

  return <div>{author}</div>;
};
export default QueryData;
