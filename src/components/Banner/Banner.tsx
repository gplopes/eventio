import React from "react";

import { BannerStyled, Quote } from "./styles";


//////////////////////////////// Props

type Props = {
  quote?: string;
  author?: string;
  backgroundImg?: string;
};

const defaultProps: Props = {
  backgroundImg: "/static/intro-bg.png",
  quote: "“Great, kid. Don’t get cocky.”",
  author: "Han Solo"
};

////////////////////////////////////////// UI
function Banner(props: Props) {
  const { quote, author, backgroundImg } = Object.assign({}, defaultProps, props);
  return (
    <BannerStyled bg={backgroundImg}>
      <Quote>
        <h3>{quote}</h3>
        <hr />
        <p>{author}</p>
      </Quote>
    </BannerStyled>
  );
}


export default Banner;
