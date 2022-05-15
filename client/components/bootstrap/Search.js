import React, { Component, Fragment } from "react";

export class Search extends Component {
  render() {
    const { input, handleChange } = this.props;

    return (
      <Fragment>
        <form className="form-inline my-2 my-lg-0">
          <input
            name="input"
            className="input-1 form-control mx-sm-2"
            type="search"
            value={input}
            onChange={handleChange}
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <style jsx>{`
          .input-1{
background:transparent;
color:#fff;
          }
          .input-1::placeholder
          {
            color:#fff;
          }
          .input-1:focus
          {
            color:#fff;
          }
         
        `}</style> 
      </Fragment>
    );
  }
}
