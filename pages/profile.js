import React from "react";
import { Page } from "../src/layouts";
import { withConsumer } from "../src/store";

import List from "../src/components/List";
import ProfileHeader from "../src/components/ProfileHeader";

function Profile({ actions }) {
  const events = actions.myEvents();
  return (
    <Page>
      <ProfileHeader />
      <List events={events}>
        <div className="flex-row">
          <h5>My Events</h5>
          <List.ToggleLayout />
        </div>
      </List>
    </Page>
  );
}

export default withConsumer(Profile);
