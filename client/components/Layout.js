import React, { Component, Fragment } from "react";
import NavBar from "../components/bootstrap/NavBar";
import { Modal } from "../components/bootstrap/Modal";
import { Footer } from "../components/bootstrap/Footer";
import Signup from "../components/index/Signup";
import Signin from "../components/index/Signin";
import { connect } from "react-redux";
import { signup, signin } from "../redux/actions/user";
import Router, { withRouter } from "next/router";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../server/firebase/firebase-config'

class Layout extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSignup = async event => {
    event.preventDefault();
    const { firstName, lastName, email, password } = this.state;
    const user = { firstName, lastName, email, password };
    await createUserWithEmailAndPassword(auth, user.email, user.password);
    await this.props.signup(user);
    if (this.props.user.message !== "Error") {
      await this.props.signin(user);
      if (this.props.user.message !== "Error") {
        Router.replace("/dashboard");
      }
    } else {
      alert(this.props.user.message);
    }
  };

  handleSignin = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    const user = { email, password };
    await signInWithEmailAndPassword(auth, user.email, user.password);
    await this.props.signin(user);
    if (this.props.user.message !== "Error") {
      Router.replace("/dashboard");
    } else {
      alert(this.props.user.message);
    }
  };

  render() {
    return (
      <Fragment>
        <div className="layout  bg-image">
          <div className="header mb-5">
            <NavBar
              session={this.props.session}
              brand={{
                name: "Cryptic Ventures",
                url: "/"
              }}
             
              login={
                
                { name: "Sign In", id: "signin" }
              }
              signup={{
                 name: "Sign Up", id: "signup" }}
              news={{
                  title:"News",
                  url:"/news"
                }}
            />
            <Modal
              title="Sign Up"
              modalId="signup"
              action={{ name: "signup", handleClick: this.handleSignup }}
            >
              <Signup
                handleChange={this.handleChange}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                email={this.state.email}
                password={this.state.password}
                message={this.state.message}
              />
            </Modal>
            <Modal
              title="Sign In"
              modalId="signin"
              action={{ name: "signin", handleClick: this.handleSignin }}
            >
              <Signin
                handleChange={this.handleChange}
                email={this.state.email}
                password={this.state.password}
                message={this.state.message}
              />
            </Modal>
          </div>
          <div className="container">
          {this.props.children}
          </div>
          <div className="bg-dark text-center text-white footer">
            <div className="primary">
              <Footer />
            </div>
          </div>
        </div>
        <style global jsx>{`
          .bg-image
          {
            background-image:url("static/images/WallpaperDog-20525427.jpg")
          }

          .container{
            min-height: 100vh;
          }

          .color-white
          {
            color:#fff;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  { signup, signin }
)(withRouter(Layout));
