import React from "react";

import "./Section.styles.scss";

const SectionBanner = ({ children, quote, author, backgroundImg }) => (
  <section className="SectionBanner">
    <div
      className="SectionBanner-banner"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="SectionBanner-quote">
        <h3>{quote}</h3>
        <hr />
        <p>{author}</p>
      </div>
    </div>
    <div className="SectionBanner-content">{children}</div>
  </section>
);

SectionBanner.defaultProps = {
  backgroundImg: "./static/intro-bg.png",
  quote: "“Great, kid. Don’t get cocky.”",
  author: "Han Solo"
};

export default SectionBanner;
