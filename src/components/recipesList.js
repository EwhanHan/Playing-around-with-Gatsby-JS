import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className='recipes-list'>
      {recipes.map(recipe => {
        const { id, cookTime, title, image, prepTime } = recipe;
        const pathToImage = getImage(image);
        return (
          <Link to={`/${title}`} className='recipe' key={id}>
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
