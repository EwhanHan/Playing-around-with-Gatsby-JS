import * as React from 'react';
import Layout from '../components/Layout/Layout';
import { ExampleButton } from '../components/button';
import styled from 'styled-components';

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p className="test">Now go build something great.</p>
      <ExampleButton> Testing </ExampleButton>
    </Wrapper>
  </Layout>
);

const Wrapper = styled.section`
  color: purple;

  h1 {
    color: red;
  }

  p {
    color: blue;
  }

  .test {
    color: green;
  }
`;

export default IndexPage;
