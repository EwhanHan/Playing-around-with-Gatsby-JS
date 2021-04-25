import React from 'react';
import { graphql } from 'gatsby';

const Experiment = ({ data }) => {
  return (
    <div>
      <p>{data.site.siteMetadata.author}</p>
    </div>
  );
};

export const data1 = graphql`
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

export default Experiment;
