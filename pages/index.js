import React, { Component, Fragment } from "react";
import Layout from "../client/components/Layout";
import SearchR from "../client/components/index/Search";
import ResultsTable from "../client/components/index/ResultsTable";
import Pagination from "../client/components/index/Pagination";
import { checkSession } from "../client/functions/pages";

class GridIndex extends Component {
  static getInitialProps(ctx) {
    const session = checkSession(ctx);
    return { session };
  }

  render() {
    return (
      <Fragment>
        <Layout session={this.props.session}>
          <div className="index">
            <div className="search">
              <div className="search-bar">
                <SearchR />
              </div>
            </div>
            <div className="coin-table">
              <ResultsTable />
            </div>
            <div className="pagination">
              <Pagination />
            </div>
          </div>
        </Layout>
         <style jsx>{`
          .search{
            display: flex;
            width: 100%;
            margin-bottom: 20px;
          }
          .search .search-bar
          {
            margin:0 auto;
          }
          .pagination{
            justify-content: end;
          }
        `}</style> 
      </Fragment>
    );
  }
}

export default GridIndex;
