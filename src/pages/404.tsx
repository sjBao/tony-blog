import * as React from "react";

import Layout from "../components/Layout/layout";
import SEO from "../components/SEO/seo";

const NotFoundPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Four Zero Four</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
  </Layout>
);

export default NotFoundPage;
