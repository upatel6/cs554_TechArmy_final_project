// to be completed

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { requestCOINCAPCoins, addUserCoin } from "../../redux/actions/coin";

class ResultsTable extends Component {
  componentDidMount() {
    this.props.requestCOINCAPCoins(this.props.page.offset);
  }

  render() {
    const { coin, search, page } = this.props;

    return (
      <Fragment>
        {coin.coinsLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="resultstable">
            <table className="table table-bordered color-white">
              <thead className="dark-head">
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Name</th>
                  <th scope="col">Market Cap</th>
                  <th scope="col">Price</th>
                  <th scope="col">Percent Change</th>
                  <th scope="col">Circulating Supply</th>
                  <th scope="col">Volume</th>
                  <th scope="col" />
                </tr>
              </thead>
              {search.matches.length !== 0 ? (
                <tbody>
                  {search.matches.map(match => {
                    return (
                      <tr key={match.id}>
                        <th className="item" scope="row">
                          {search.matches.indexOf(match) + page.offset}
                        </th>
                        <td>{match.name}</td>
                        <td>
                          {String(Math.floor(match.quote.USD.market_cap))
                            .length > 9
                            ? "$" +
                              String(match.quote.USD.market_cap).slice(
                                0,
                                String(Math.floor(match.quote.USD.market_cap))
                                  .length - 9
                              ) +
                              "." +
                              String(match.quote.USD.market_cap).slice(
                                String(Math.floor(match.quote.USD.market_cap))
                                  .length -
                                  9 +
                                  1,
                                String(Math.floor(match.quote.USD.market_cap))
                                  .length -
                                  9 +
                                  3
                              ) +
                              " B"
                            : String(Math.floor(match.quote.USD.market_cap))
                                .length > 6
                            ? "$" +
                              String(match.quote.USD.market_cap).slice(
                                0,
                                String(Math.floor(match.quote.USD.market_cap))
                                  .length - 6
                              ) +
                              "." +
                              String(match.quote.USD.market_cap).slice(
                                String(Math.floor(match.quote.USD.market_cap))
                                  .length -
                                  6 +
                                  1,
                                String(Math.floor(match.quote.USD.market_cap))
                                  .length -
                                  6 +
                                  3
                              ) +
                              " M"
                            : "$" +
                              String(Math.floor(match.quote.USD.market_cap))}
                        </td>
                        <td>{`$${match.quote.USD.price.toFixed(2)}`}</td>
                        <td>{`${match.quote.USD.percent_change_1h.toFixed(
                          2
                        )} %`}</td>
                        <td>
                          {String(Math.floor(match.circulating_supply)).length >
                          9
                            ? String(match.circulating_supply).slice(
                                0,
                                String(Math.floor(match.circulating_supply))
                                  .length - 9
                              ) +
                              "." +
                              String(match.circulating_supply).slice(
                                String(Math.floor(match.circulating_supply))
                                  .length -
                                  9 +
                                  1,
                                String(Math.floor(match.circulating_supply))
                                  .length -
                                  9 +
                                  3
                              ) +
                              " B " +
                              match.symbol
                            : String(Math.floor(match.circulating_supply))
                                .length > 6
                            ? String(match.circulating_supply).slice(
                                0,
                                String(Math.floor(match.circulating_supply))
                                  .length - 6
                              ) +
                              "." +
                              String(match.circulating_supply).slice(
                                String(Math.floor(match.circulating_supply))
                                  .length -
                                  6 +
                                  1,
                                String(Math.floor(match.circulating_supply))
                                  .length -
                                  6 +
                                  3
                              ) +
                              " M " +
                              match.symbol
                            : String(Math.floor(match.circulating_supply)) +
                              " " +
                              match.symbol}
                        </td>
                        <td>
                          {String(Math.floor(match.quote.USD.volume_24h))
                            .length > 9
                            ? "$" +
                              String(match.quote.USD.volume_24h).slice(
                                0,
                                String(Math.floor(match.quote.USD.volume_24h))
                                  .length - 9
                              ) +
                              "." +
                              String(match.quote.USD.volume_24h).slice(
                                String(Math.floor(match.quote.USD.volume_24h))
                                  .length -
                                  9 +
                                  1,
                                String(Math.floor(match.quote.USD.volume_24h))
                                  .length -
                                  9 +
                                  3
                              ) +
                              " B"
                            : String(Math.floor(match.quote.USD.volume_24h))
                                .length > 6
                            ? "$" +
                              String(match.quote.USD.volume_24h).slice(
                                0,
                                String(Math.floor(match.quote.USD.volume_24h))
                                  .length - 6
                              ) +
                              "." +
                              String(match.quote.USD.volume_24h).slice(
                                String(Math.floor(match.quote.USD.volume_24h))
                                  .length -
                                  6 +
                                  1,
                                String(Math.floor(match.quote.USD.volume_24h))
                                  .length -
                                  6 +
                                  3
                              ) +
                              " M"
                            : "$" +
                              String(Math.floor(match.quote.USD.volume_24h))}
                        </td>
                        <td>
                          <input
                            className="btn btn-success"
                            type="button"
                            name="add"
                            value="Add"
                            onClick={() =>
                              this.props.addUserCoin(match.symbol.toUpperCase())
                            }
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              ) : coin.coincapCoins.length !== 0 ? (
                <tbody>
                  {coin.coincapCoins.map(coincapCoin => {
                    return (
                      <tr key={coincapCoin.id}>
                        <th className="item" scope="row">
                          {coin.coincapCoins.indexOf(coincapCoin) + page.offset}
                        </th>
                        <td>{coincapCoin.name}</td>
                        <td>
                          {String(Math.floor(coincapCoin.quote.USD.market_cap))
                            .length > 9
                            ? "$" +
                              String(coincapCoin.quote.USD.market_cap).slice(
                                0,
                                String(Math.floor(coincapCoin.quote.USD.market_cap))
                                  .length - 9
                              ) +
                              "." +
                              String(coincapCoin.quote.USD.market_cap).slice(
                                String(Math.floor(coincapCoin.quote.USD.market_cap))
                                  .length -
                                  9 +
                                  1,
                                String(Math.floor(coincapCoin.quote.USD.market_cap))
                                  .length -
                                  9 +
                                  3
                              ) +
                              " B"
                            : String(Math.floor(coincapCoin.quote.USD.market_cap))
                                .length > 6
                            ? "$" +
                              String(coincapCoin.quote.USD.market_cap).slice(
                                0,
                                String(Math.floor(coincapCoin.quote.USD.market_cap))
                                  .length - 6
                              ) +
                              "." +
                              String(coincapCoin.quote.USD.market_cap).slice(
                                String(Math.floor(coincapCoin.quote.USD.market_cap))
                                  .length -
                                  6 +
                                  1,
                                String(Math.floor(coincapCoin.quote.USD.market_cap))
                                  .length -
                                  6 +
                                  3
                              ) +
                              " M"
                            : "$" +
                              String(Math.floor(coincapCoin.quote.USD.market_cap))}
                        </td>
                        <td>{`$${coincapCoin.quote.USD.price.toFixed(2)}`}</td>
                        <td>{`${coincapCoin.quote.USD.percent_change_1h.toFixed(
                          2
                        )} %`}</td>
                        <td>
                          {String(Math.floor(coincapCoin.circulating_supply))
                            .length > 9
                            ? String(coincapCoin.circulating_supply).slice(
                                0,
                                String(Math.floor(coincapCoin.circulating_supply))
                                  .length - 9
                              ) +
                              "." +
                              String(coincapCoin.circulating_supply).slice(
                                String(Math.floor(coincapCoin.circulating_supply))
                                  .length -
                                  9 +
                                  1,
                                String(Math.floor(coincapCoin.circulating_supply))
                                  .length -
                                  9 +
                                  3
                              ) +
                              " B " +
                              coincapCoin.symbol
                            : String(Math.floor(coincapCoin.circulating_supply))
                                .length > 6
                            ? String(coincapCoin.circulating_supply).slice(
                                0,
                                String(Math.floor(coincapCoin.circulating_supply))
                                  .length - 6
                              ) +
                              "." +
                              String(coincapCoin.circulating_supply).slice(
                                String(Math.floor(coincapCoin.circulating_supply))
                                  .length -
                                  6 +
                                  1,
                                String(Math.floor(coincapCoin.circulating_supply))
                                  .length -
                                  6 +
                                  3
                              ) +
                              " M " +
                              coincapCoin.symbol
                            : String(Math.floor(coincapCoin.circulating_supply)) +
                              " " +
                              coincapCoin.symbol}
                        </td>
                        <td>
                          {String(Math.floor(coincapCoin.quote.USD.volume_24h))
                            .length > 9
                            ? "$" +
                              String(coincapCoin.quote.USD.volume_24h).slice(
                                0,
                                String(Math.floor(coincapCoin.quote.USD.volume_24h))
                                  .length - 9
                              ) +
                              "." +
                              String(coincapCoin.quote.USD.volume_24h).slice(
                                String(Math.floor(coincapCoin.quote.USD.volume_24h))
                                  .length -
                                  9 +
                                  1,
                                String(Math.floor(coincapCoin.quote.USD.volume_24h))
                                  .length -
                                  9 +
                                  3
                              ) +
                              " B"
                            : String(Math.floor(coincapCoin.quote.USD.volume_24h))
                                .length > 6
                            ? "$" +
                              String(coincapCoin.quote.USD.volume_24h).slice(
                                0,
                                String(Math.floor(coincapCoin.quote.USD.volume_24h))
                                  .length - 6
                              ) +
                              "." +
                              String(coincapCoin.quote.USD.volume_24h).slice(
                                String(Math.floor(coincapCoin.quote.USD.volume_24h))
                                  .length -
                                  6 +
                                  1,
                                String(Math.floor(coincapCoin.quote.USD.volume_24h))
                                  .length -
                                  6 +
                                  3
                              ) +
                              " M"
                            : "$" +
                              String(Math.floor(coincapCoin.quote.USD.volume_24h))}
                        </td>
                        <td>
                          <input
                            className="btn btn-success"
                            type="button"
                            name="add"
                            value="Add"
                            onClick={() =>
                              this.props.addUserCoin(
                                coincapCoin.symbol.toUpperCase()
                              )
                            }
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              ) : (
                <tbody>
                  <tr />
                </tbody>
              )}
            </table>
          </div>
        )}
        { <style jsx>{`
          .resultstable {
            background-color: #102e36ab;
          }
        
        `}</style> }
      </Fragment>
    );
  }
}

export default connect(
  ({ coin, page, search }) => ({ coin, page, search }),
  { requestCOINCAPCoins, addUserCoin }
)(ResultsTable);
