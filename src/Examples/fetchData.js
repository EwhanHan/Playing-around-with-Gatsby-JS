import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const ComponentName = () => {
  const data = useStaticQuery(graphql`
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
  `);
  return (
    <div>
      <h2>{data.site.siteMetadata.person.name}</h2>
      {data.site.siteMetadata.simpleData.map(el => {
        return <p>{el}</p>;
      })}
    </div>
  );
};

export default ComponentName;
