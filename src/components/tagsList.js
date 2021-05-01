import React from 'react';
import setupTags from '../Utils/setupTags';
import { Link } from 'gatsby';

const TagsList = ({ recipes }) => {
  const tags = setupTags(recipes);
  return (
    <div className='tag-container'>
      <h4>Recipes</h4>
      <div className='tags-list'>
        {tags.map((tag, index) => {
          const [tagName, value] = tag;
          return (
            <Link to={`/${tagName}`} key={index}>
              {tagName}({value})
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TagsList;
