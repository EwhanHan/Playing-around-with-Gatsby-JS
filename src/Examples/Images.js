import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
const Images = () => {
  return (
    <Wrapper>
      <article>
        <h4>constrained / default</h4>
        <StaticImage
          src='../assets/images/recipes/recipe-2.jpg'
          alt='testing'
          placeholder='tracedSVG'
          className='example-img'
          as='section'
        ></StaticImage>
      </article>
      <article>
        <h4>fixed</h4>
        <StaticImage
          src='../assets/images/recipes/recipe-2.jpg'
          alt='testing'
          height={200}
          placeholder='blur'
          layout='fixed'
          className='example-img'
          as='div'
        ></StaticImage>
      </article>
      <article>
        <h4>full width</h4>
        <StaticImage
          src='../assets/images/recipes/recipe-2.jpg'
          alt='testing'
          height={200}
          placeholder='blur'
          layout='fullWidth'
          className='example-img'
          as='div'
        ></StaticImage>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid red;
  }
  .example-img {
    border-radius: 1rem;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fre 1fr 1 fr;
    .example-img {
      height: 200px;
    }
  }
`;

export default Images;
