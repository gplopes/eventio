import React, { PureComponent } from "react";
import { Page } from "../layouts";

import List from "../components/List/List";
import ProfileHeader from "../components/ProfileHeader";


//////////////////////////////// Types

type Props = {
  actions: {
    getMyEvents(): any;
  }
};

type State = {
  myEvents: object[];
  hasLoaded: boolean;
};


///////////////////////////////////////// UI
class Profile extends PureComponent<Props, State> {
  state = {
    myEvents: [],
    hasLoaded: false
  };

  componentDidMount() {
    // this.props.actions.getMyEvents().then((events: object[]) => {
    //   this.setState({ myEvents: events });
    // });
  }
  render() {
    const { myEvents, hasLoaded } = this.state;
    return (
      <Page>
        <ProfileHeader />
        <List events={myEvents} hasLoaded={hasLoaded}>
          <div className="flex-row">
            <h5>My Events</h5>
            <List.ToggleLayout />
          </div>
        </List>
      </Page>
    );
  }
}



export default Profile;
