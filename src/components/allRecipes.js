import React from 'react';
import RecipesList from './recipesList';
import TagsList from './tagsList';
import { graphql, useStaticQuery } from 'gatsby';

const AllRecipes = () => {
  const data = useStaticQuery(query);
  const nodes = data.allContentfulRecipe.nodes;
  return (
    <div className='recipes-container'>
      <TagsList recipes={nodes} />
      <RecipesList recipes={nodes} />
    </div>
  );
};

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        title
        servings
        prepTime
        id
        cookTime
        description {
          description
        }
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
        content {
          tags
          ingredients
          instructions
          tools
        }
      }
    }
  }
`;

export default AllRecipes;
