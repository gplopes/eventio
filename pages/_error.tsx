import { Component } from "react";
import Error from "../src/pages/Error";

type Props = {
  statusCode: number;
}

export default class ErrorContainer extends Component<Props> {
  static headerProps = {
    lightLogo: true
  };

  static getInitialProps({ res, err }: { res: any, err: any}) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }
  render() {
    return <Error statusCode={this.props.statusCode} />;
  }
}
