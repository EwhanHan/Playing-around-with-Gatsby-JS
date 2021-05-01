import React from 'react';
import Layout from '../components/Layout/Layout';
import setupTags from '../Utils/setupTags';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

const Tags = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  const tags = setupTags(recipes);
  return (
    <Layout>
      <main className='page'>
        <section className='tags-page'>
          {tags.map((tag, index) => {
            const [tagName, value] = tag;
            return (
              <Link to={`/${tagName}`} key={index} className='tag'>
                <h5>{tagName}</h5>
                <p>{value}</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;
export default Tags;
