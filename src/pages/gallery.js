import React from 'react';
import Layout from '../components/Layout/Layout';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const Gallery = () => {
  const data = useStaticQuery(query);
  const nodes = data.allFile.nodes;
  console.log('Query data: ', data, '\nnodes: ', nodes);
  return (
    <Layout>
      <main className='page'>
        <Wrapper>
          {nodes.map((imageData, index) => {
            const { name } = imageData;
            const pathToImage = getImage(imageData.childrenImageSharp[0]);
            return (
              <article key={index} className='gallery-item'>
                <GatsbyImage
                  image={pathToImage}
                  alt={name}
                  className='gallery-img'
                />
                <p>{name}</p>
              </article>
            );
          })}
        </Wrapper>
      </main>
    </Layout>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;

  .gallery-item {
    margin-right: 1rem;
    text-align: center;
    text-transform: capitalize;
  }

  .gallery-img {
    border-radius: 0.5rem;
  }
`;

const query = graphql`
  {
    allFile(
      filter: { sourceInstanceName: { eq: "images" }, extension: { ne: "svg" } }
    ) {
      nodes {
        name
        childrenImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width: 200
            height: 200
          )
        }
        sourceInstanceName
      }
    }
  }
`;
export default Gallery;
