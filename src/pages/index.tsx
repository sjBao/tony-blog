import * as React from "react";

import Layout from "../components/Layout/layout";

const IndexPage: React.FunctionComponent = () => (
  <Layout>
    <div
      className="heading"
      style={{
        fontFamily: 'futura'
      }}>
      Hello, Supui here, but you can call me Tony
    </div>
    <div className="heading--bio">
      I am a software engineer based in Queens, NY. When I am not coding, there is a good chance you'll catch me playing basketball, or if the weather permits, hiking with my dogs.
    </div>
  </Layout>
);

export default IndexPage;
