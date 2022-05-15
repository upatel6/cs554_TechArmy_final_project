import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { ChartCarousel } from "../nivo/ChartCarousel";
import { requestCOINCAPCoins, requestUserCoins } from "../../redux/actions/coin";

class UserChart extends Component {
  async componentDidMount() {
    await this.props.requestCOINCAPCoins();
    this.props.requestUserCoins(this.props.session);
  }

  render() {
    return (
      <Fragment>
        <ChartCarousel coins={this.props.coin.userCoins} />
      </Fragment>
    );
  }
}

export default connect(
  ({ coin }) => ({ coin }),
  { requestCOINCAPCoins, requestUserCoins }
)(UserChart);
