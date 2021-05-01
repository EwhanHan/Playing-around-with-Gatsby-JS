import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { BsClockHistory, BsClock, BsPeople } from 'react-icons/bs';
import Layout from '../components/Layout/Layout';
import slugify from 'slugify';

const RecipePage = ({ data: { contentfulRecipe: recipe } }) => {
  console.log(recipe);
  const {
    title,
    content,
    description: { description },
    prepTime,
    servings,
    cookTime,
    image,
  } = recipe;

  const pathToImage = getImage(image);
  console.log(pathToImage);
  const { id, ingredients, instructions, tags, tools } = content;
  return (
    <Layout>
      <main className='page'>
        <div className='recipe-page'>
          <section className='recipe-hero'>
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className='about-img'
            ></GatsbyImage>
            <article className='recipe-info'>
              <h2>{title}</h2>
              <p>{description}</p>
              <div className='recipe-icons'>
                <article>
                  <BsClock />
                  <h5>prep time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cook time</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>servings</h5>
                  <p>{servings}</p>
                </article>
              </div>
              <p className='recipe-tags'>
                Tags:
                {tags.map((tag, index) => {
                  const slug = slugify(tag);
                  return (
                    <Link path={`/${slug}`} key={index}>
                      {tag}
                    </Link>
                  );
                })}
              </p>
            </article>
          </section>
          <section className='recipe-content'>
            <article>
              <h4>instructions</h4>
              {instructions.map((item, index) => {
                return (
                  <div key={index} className='single-instruction'>
                    <header>
                      <p>step {index + 1}</p>
                      <div></div>
                    </header>
                    <p>{item}</p>
                  </div>
                );
              })}
            </article>
            <article className='second-column'>
              <div>
                <h4>ingredients</h4>
                {ingredients.map((item, index) => {
                  return (
                    <p key={index} className='single-ingredient'>
                      {item}
                    </p>
                  );
                })}
              </div>
              <div>
                <h4>tools</h4>
                {tools.map((item, index) => {
                  return (
                    <p key={index} className='single-ingredient'>
                      {item}
                    </p>
                  );
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      content {
        id
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      servings
      cookTime
      image {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
  }
`;

export default RecipePage;
