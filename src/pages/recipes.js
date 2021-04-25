import React from 'react';
import AllRecipes from '../components/allRecipes';
import Layout from '../components/Layout/Layout';

const Recipes = () => {
  return (
    <Layout>
      <main className='page'>
        <AllRecipes />
      </main>
    </Layout>
  );
};

export default Recipes;
