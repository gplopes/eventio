import React from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";

import Section from "../../../layouts/Section";

import getName from "../../../utils/getUserName";
import Avatar from "../../../components/Avatar/Avatar";

///////////////////////////////// Styled

const extendAvatarCss = css`
  position: absolute;
  top: -50px;
  left: calc(50% - 60px);
`;

const Card = styled.div`
  text-align: center;
  padding: 32px;
  padding-top: 83px;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.11);
`;

//////////////////////////////// Type

type Props = {
  user: {
    email: string;
    firstName: string;
    lastName: string;
  };
};

const defaultProps: Props = {
  user: {
    email: "",
    firstName: "",
    lastName: ""
  }
};

///////////////////////////////////////// UI

function ProfileHeader(props: Props) {
  const user = props.user;
  const { initials, fullName } = getName(user);
  return (
    <Section>
      <Card>
        <Avatar initials={initials} size="big" extend={extendAvatarCss} />
        <p>{fullName}</p>
        <span className="text-light">{props.user.email}</span>
      </Card>
    </Section>
  );
}

ProfileHeader.defaultProps = defaultProps;

//////////////////////////////////////// Connect

const mapStateToProps = (state: any) => ({ user: state.user })

export default connect(mapStateToProps)(ProfileHeader);
