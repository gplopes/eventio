import React from "react";
import { Section } from "../../layouts";
import "./ProfileHeader.style.scss";

import { withConsumer } from "../../store";
import getName from "../../utils/getUserName";

import Avatar from "../Avatar/Avatar";

function ProfileHeader({ user }) {
  const { initials, fullName } = getName(user);
  return (
    <Section className="ProfileHeader">
      <div className="card">
        <Avatar initials={initials} size="big" />
        <h6>{fullName}</h6>
        <span className="ProfileHeader-email text-light">{user.email}</span>
      </div>
    </Section>
  );
}

ProfileHeader.defaultProps = {
  user: {}
};

export default withConsumer(ProfileHeader);
