import React, { Component } from "react";
import { connect } from "react-redux";
// IMPORT ENCRYPTION/DECRYPTION LIBRARY

class UserProfile extends Component {
  render() {
    const { name, avatar } = this.props.user;

    return (
      <div className="user-avatar">
        <img src={avatar} alt={`${name}.png`} />
        <style jsx>{`
          
          .user-avatar img {
            width: 80%;
            border-radius: 50%;
          }
        `}</style> 
      </div>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  null
)(UserProfile);
