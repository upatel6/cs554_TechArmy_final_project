import React, { Component, Fragment } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { signout, requestUser } from "../../redux/actions/user";

class NavBar extends Component {
  componentDidMount() {
    if (typeof this.props.session !== "object") {
      this.props.requestUser(this.props.session);
    }
  }

  handleSignout = async event => {
    event.preventDefault();
    await this.props.signout();
    if (this.props.user.message != "Error") {
      this.setState({ message: this.props.user.message });
      setTimeout(() => {
        location.reload();
      }, 200);
    }
  };

  render() {
    const { brand, cta, actions, user,login,signup } = this.props;

    return (
      <Fragment>
        <nav className="navbar navbar navbar-dark navbar-expand-lg">
          <Link href={brand.url}>
            <a className="navbar-brand">{brand.name}</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>

          <div
            className={user.avatar ? "ml-auto" : "collapse navbar-collapse"}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
            {!user.avatar && login ? (
                      <li className="nav-item">
                      <Link href="javascript:;">
                          <a
                          key={login.name}
                          className="nav-link"
                          data-toggle="modal"
                          data-target={`#${login.id}`}
                        >
                          {login.name}
                        </a>
                        </Link>
                        </li>
                        ) : (
                      <a />
                    )}
               
                
                {!user.avatar && signup ? (
                  <li className="nav-item">
                  <Link href="javascript:;">
                      <a
                      key={signup.name}
                      className="nav-link"
                      data-toggle="modal"
                      data-target={`#${signup.id}`}
                    >
                      {signup.name}
                    </a>
                    </Link>
                    </li>
                    ) : (
                  <a />
                )}
              {user.avatar ? (
                <li className="nav-item active dropdown">
                  <a
                    className="dropdown-btns navbar-img nav-link"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img src={user.avatar} alt={`${user.name}.png`} />
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link href="/dashboard">
                      <a className="dashboard-link dropdown-item btn btn-link">
                        Dashboard
                      </a>
                    </Link>
                    <button
                      className="signout-btn dropdown-item btn btn-link"
                      type="button"
                      onClick={this.handleSignout}
                    >
                      Signout
                    </button>
                  </div>
                </li>
              ) : (
                <a></a>                
              )}
            </ul>
          </div>
        </nav>
        {/* <style jsx>{`
          .navbar {
            width: 100%;
            height: 100%;
            background-color: #222;
            padding: 0 3rem;
            position: relative;
          }
          .navbar-brand {
            font-size: 2.25rem;
            position: ${user.avatar ? "absolute" : "relative"};
          }
          .navbar-brand,
          .fa-bars {
            color: #eee;
          }
          .navbar-toggler {
            display: none;
          }
          .navbar-toggler:focus {
            outline: none;
          }
          @media (max-width: 992px) {
            .navbar-expand-lg .navbar-toggler {
              display: ${user.avatar ? "none" : "inline-block"};
            }
          }
          .btn {
            border-radius: 0;
          }
          .btn:hover {
            cursor: pointer;
            background: none;
          }
          .navbar-img {
            display: flex;
            justify-content: flex-end;
          }
          .navbar-img img {
            height: 40px;
            width: 40px;
            border-radius: 0;
            object-fit: cover;
          }
          .dropdown-btns:hover {
            cursor: pointer;
          }
        `}</style> */}
      </Fragment>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  { signout, requestUser }
)(NavBar);
