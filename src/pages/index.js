import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import AllRecipes from '../components/allRecipes';
import Layout from '../components/Layout/Layout';
import FetchData from '../Examples/fetchData';

import QueryData from '../Examples/QueryData';

const Home = () => {
  return (
    <Layout>
      <main className='page'>
        <header className='hero'>
          <StaticImage
            src='../assets/images/main.jpeg'
            alt='eggs'
            className='hero-img'
            placeholder='tracedSVG'
            layout='fullWidth'
          ></StaticImage>
          <div className='hero-container'>
            <div className='hero-text'>
              <h1>Simply Recipes</h1>
              <p>Garbage tier recipes</p>
            </div>
          </div>
        </header>
        {/* <FetchData />
        <QueryData /> */}
        <AllRecipes />
      </main>
    </Layout>
  );
};

export default Home;
