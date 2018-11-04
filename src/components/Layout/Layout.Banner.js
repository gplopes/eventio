import React from "react";

import Layout from "./Layout";
import "./styles.scss";

const LayoutBanner = ({ children, quote, author, backgroundImg }) => (
  <Layout>
    <section className="LayoutBanner">
      <div
        className="LayoutBanner-banner"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="LayoutBanner-quote">
          <h3>{quote}</h3>
          <hr />
          <p>{author}</p>
        </div>
      </div>
      <div className="LayoutBanner-content">{children}</div>
    </section>
  </Layout>
);

LayoutBanner.defaultProps = {
  backgroundImg: "./static/intro-bg.png",
  quote: "“Great, kid. Don’t get cocky.”",
  author: "Han Solo"
};

export default LayoutBanner;
