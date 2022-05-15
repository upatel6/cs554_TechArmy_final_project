import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  requestCOINCAPCoins,
  requestUserCoins,
  deleteUserCoin
} from "../../redux/actions/coin";

class CoinList extends Component {
  async componentDidMount() {
    await this.props.requestCOINCAPCoins();
    this.props.requestUserCoins(this.props.session);
  }

  render() {
    let username;
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("userData");
      if (userData) {
        username = userData.split("%")[1];
        username = username.charAt(0).toUpperCase() + username.slice(1);
      }
    }

    const { userCoins, coincapCoins, coinsLoading } = this.props.coin;

    return (
      <Fragment>
        {coinsLoading ? (
          <div>Loading</div>
        ) : (
          <div className="cointable">
          <table className="table table-bordered color-white">
            <thead className="dark-head">
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Coin</th>
                <th className="remove" scope="col">
                  Remove
                </th>
              </tr>
            </thead>
            {userCoins ? (
              <tbody>
                {coincapCoins.map(coin => {
                  if (userCoins.includes(coin.symbol.toUpperCase())) {
                    return (
                      <tr key={coin.id}>
                        <th className="item" scope="row">
                          {userCoins.indexOf(coin.symbol) + 1}
                        </th>
                        <td className="user-coin">{`${coin.name} ${
                          coin.symbol
                        }`}</td>
                        <td className="remove">
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() =>
                              this.props.deleteUserCoin(
                                coin.symbol.toUpperCase()
                              )
                            }
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            ) : (
              <tbody />
            )}
            <tfoot />
          </table>
          </div>
        )}
                <style jsx>{`
          .cointable {
            background-color: #102e36ab;
            text-align:center;
          }
        .cointable table th,.cointable table td
        {
vertical-align:middle;
        }
        
        `}</style> 
      </Fragment>
    );
  }
}

export default connect(
  ({ coin }) => ({ coin }),
  { requestCOINCAPCoins, requestUserCoins, deleteUserCoin }
)(CoinList);
