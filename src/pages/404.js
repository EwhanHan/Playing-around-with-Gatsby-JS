import * as React from 'react';
import Layout from '../components/Layout/Layout';

const NotFoundPage = () => (
  <Layout>
    <main className='error-page'>
      <section>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </section>
    </main>
  </Layout>
);

export default NotFoundPage;
