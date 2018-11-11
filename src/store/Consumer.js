import React, { Component } from "react";
import hoistNonReactStatics from "hoist-non-react-statics";

import getDisplayName from '../utils/getDisplayName';
import Store from "./StoreContext";

export function withConsumer(WrappedComponent) {
  class Consumer extends Component {
    render() {
      return (
        <Store.Consumer>
          {propConsumer => (
            <WrappedComponent {...propConsumer} {...this.props} />
          )}
        </Store.Consumer>
      );
    }
  }
  Consumer.displayName = `withConsumer(${getDisplayName(WrappedComponent)})`;
  hoistNonReactStatics(Consumer, WrappedComponent);
  return Consumer;
}
