import React from 'react';
import RecipesList from './recipesList';
import TagList from './tagList';
import { graphql, useStaticQuery } from 'gatsby';

const AllRecipes = () => {
  const data = useStaticQuery(query);
  const nodes = data.allContentfulRecipe.nodes;
  return (
    <div>
      <TagList recipes={nodes} />
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
        contentful_id
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
