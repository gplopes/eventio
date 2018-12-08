import React from "react";
import { Section } from "../../layouts";
import "./ProfileHeader.style.scss";

import { withConsumer } from "../../store";
import getName from "../../utils/getUserName";

import Avatar from "../Avatar/Avatar";

//////////////////////////////// Type

type Props = {
  user: {
    email: string;
    firstName: string;
    lastName: string;
  };
};

const userDefault = {
  email: "",
  firstName: "",
  lastName: ""
};

///////////////////////////////////////// UI

function ProfileHeader(props: Props) {
  const user = props.user || userDefault;
  const { initials, fullName } = getName(user);
  return (
    <Section className="ProfileHeader">
      <div className="card">
        <Avatar initials={initials} size="big" />
        <h6>{fullName}</h6>
        <span className="ProfileHeader-email text-light">
          {props.user.email}
        </span>
      </div>
    </Section>
  );
}

export default withConsumer(ProfileHeader);
