import React from "react";
import styled from "styled-components";


/////////////////////////////////////////// Styled

const NoEventStyled = styled.section`
  margin-top: 100px;
  opacity: 0.2;
  img {
    display: block;
    margin: 0;
    width: 50px;
    margin-bottom: 20px;
  }
`;

////////////////////////////////////////////// UI

function NoEvent({ msg }: { msg: string }) {
  return (
    <NoEventStyled>
      <div className="container centered-content">
        <img src="/static/helmet.svg" className="NoEvent-helmet" alt="Helmet" />
        <p>{msg}</p>
      </div>
    </NoEventStyled>
  );
}

NoEvent.defaultProps = {
  msg: ""
};

export default NoEvent;
