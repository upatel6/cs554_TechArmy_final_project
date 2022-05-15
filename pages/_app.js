import App, { Container } from "next/app";
import React, { Fragment } from "react";
import withReduxStore from "../client/redux/store";
import { Provider } from "react-redux";

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Fragment>
        <Container>
          <Provider store={reduxStore}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      </Fragment>
    );
  }
}

export default withReduxStore(MyApp);
