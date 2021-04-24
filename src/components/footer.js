import React from 'react';

const footer = () => {
  return (
    <footer className='page-footer'>
      <p>
        &copy; {new Date().getFullYear()} <span>Simple Recipes </span>
        Built with <a href='https://www.gatsbyjs.com/'>Gatsby</a>
      </p>
    </footer>
  );
};

export default footer;
