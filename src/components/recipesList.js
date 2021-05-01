import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import slugify from 'slugify';

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className='recipes-list'>
      {recipes.map(recipe => {
        const { id, cookTime, title, image, prepTime } = recipe;
        const pathToImage = getImage(image);
        const slug = slugify(title, { lower: true });
        return (
          <Link to={slug} className='recipe' key={id}>
            <GatsbyImage
              image={pathToImage}
              className='recipe-img'
              alt={title}
            ></GatsbyImage>
            <h5>{title}</h5>
            <p>
              Prep: {prepTime} min | Cook: {cookTime} min
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default RecipesList;
