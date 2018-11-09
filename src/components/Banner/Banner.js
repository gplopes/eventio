import React from "react";
import "./Banner.styles.scss";

function Banner({ quote, author, backgroundImg }) {
  const bannerProps = {
    className: "Banner",
    style: { backgroundImage: `url(${backgroundImg})` }
  };
  return (
    <div {...bannerProps}>
      <div className="Banner-quote">
        <h3>{quote}</h3>
        <hr />
        <p>{author}</p>
      </div>
    </div>
  );
}

Banner.defaultProps = {
  backgroundImg: "./static/intro-bg.png",
  quote: "“Great, kid. Don’t get cocky.”",
  author: "Han Solo"
};

export default Banner;
