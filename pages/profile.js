import React, { PureComponent } from "react";
import PropTypes from 'prop-types';
import { Page } from "../src/layouts";
import { withConsumer } from "../src/store";

import List from "../src/components/List";
import ProfileHeader from "../src/components/ProfileHeader";

class Profile extends PureComponent {
  state = {
    myEvents: [],
    hasLoaded: false
  };
  componentDidMount() {
    this.props.actions.getMyEvents().then(events => {
      this.setState({ myEvents: events });
    });
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


Profile.propTypes = {
  actions: PropTypes.shape({
    getMyEvents: PropTypes.func.isRequired
  }).isRequired
};


export default withConsumer(Profile);
