import React from 'react';
import Layout from '../components/Layout/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { Link, graphql } from 'gatsby';
import RecipesList from '../components/recipesList';

const about = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes;
  return (
    <Layout>
      <main className='page'>
        <section className='about-page'>
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia.
            </p>
            <p>
              Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
              retro.
            </p>
            <Link to='/contact' className='btn'>
              contact
            </Link>
          </article>
          <StaticImage
            src='../assets/images/about.jpeg'
            alt='Person Pouring Salt in Bowl'
            className='about-img'
            placeholder='blurred'
          />
        </section>
        <section className='featured-recipes'>
          <h5>Look at these recipes!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipe(
      filter: { featured: { eq: true } }
      sort: { fields: title, order: ASC }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      totalCount
    }
  }
`;
export default about;
