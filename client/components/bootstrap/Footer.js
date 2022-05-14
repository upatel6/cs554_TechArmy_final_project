import React, { Component, Fragment } from "react";
import Link from "next/link";

export class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className="footer-wrapper p-3">
          © 2022 Copyright:
          <Link href="/">
            <a> CrypticVentures.com</a>
          </Link>
        </div>
        <style jsx>{`
          
          .footer-wrapper a {
            color: #fff;
            text-decoration: none;
          }
        `}</style> 
      </Fragment>
    );
  }
}
