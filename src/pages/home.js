import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout/Layout';

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
      </main>
    </Layout>
  );
};

export default Home;
