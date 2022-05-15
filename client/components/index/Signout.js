import React, { Component } from "react";
import { connect } from "react-redux";
import { signout } from "../../redux/actions/user";
import { signOut } from "firebase/auth";
import {auth} from '../../../server/firebase/firebase-config';

class Signout extends Component {
  state = {
    message: ""
  };

  handleClick = async event => {
    event.preventDefault();
    await signOut(auth);
    await this.props.signout();
    alert("SignOut Successfull")
    if (this.props.user.message != "Error") {
      this.setState({ message: this.props.user.message });
      setTimeout(() => {
        location.reload();
      }, 200);
    }
  };

  render() {
    const { message } = this.state;

    return (
      <div>
        <button onClick={this.handleClick}>Signout</button>
        <p>{message}</p>
      </div>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  { signout }
)(Signout);
