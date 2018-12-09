import React from "react";
import { BannerStyled, Quote } from "./styles";

//////////////////////////////// Props

type Props = {
  quote?: string;
  author?: string;
  backgroundImg?: string;
};

const defaultProps: Props = {
  backgroundImg: require('./introBg.png'),
  quote: "“Great, kid. Don’t get cocky.”",
  author: "Han Solo"
};

////////////////////////////////////////// UI

function Banner(props: Props) {
  const { quote, author, backgroundImg } = props;
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

Banner.defaultProps = defaultProps;
export default Banner;
