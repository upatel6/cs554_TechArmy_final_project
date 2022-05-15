import React, { Component, Fragment } from "react";
import Link from "next/link";

export class Card extends Component {
  render() {
    const { src, alt, title, info, lg, url } = this.props;
    let newTitle;
    if (title) {
      newTitle = title.charAt(0).toUpperCase() + title.slice(1);
    }

    return (
      <Fragment>
        <div className="card">
          <img src={src} className="card-img-top" alt={alt} />
          <div className="card-body">
            <h5 className="card-title">{newTitle}</h5>
            <p className="card-text">{`${info.substring(0, 40)}...`}</p>
            <Link href={url}>
              <a className="card-link">Edit Profile</a>
            </Link>
          </div>
        </div>
       
      </Fragment>
    );
  }
}
