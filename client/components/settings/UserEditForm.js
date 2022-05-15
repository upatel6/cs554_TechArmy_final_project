import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { update, destroyUser, requestUser } from "../../redux/actions/user";
import Router, { withRouter } from "next/router";
import {updatePassword, updateEmail} from 'firebase/auth'
import { auth } from "../../../server/firebase/firebase-config";


class UserEditForm extends Component {
  state = {
    firstName:"", lastName:"", email:"", password:"", bio:""
  };

  async componentDidMount() {
    await this.props.requestUser(this.props.session);
    const { firstName, lastName, email, password, bio } = this.props.user;
    this.setState({ firstName, lastName, email, password, bio });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  updateUser = async event => {
    event.preventDefault();
    const { firstName, lastName, email, password, bio } = this.state;
    const user = { firstName, lastName, email, password, bio };
    try {
      if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email))) throw "Email address should be like abc@gmail.com";
      if(user.password.length < 6 || user.password.length > 16) throw "Password length should be between 6 and 16";
      if(!(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(user.password))) throw "Password should contain atleast one number and special character";
    }
    catch(e) {
      alert(e)
      return;
    }
    console.log(auth.currentUser)
    try {
      await updateEmail(auth.currentUser,user.email)
      await updatePassword(auth.currentUser,user.password)
    }
    catch(e) {
      alert(e)
      return
    }
    await this.props.update(user);
    alert("Successfully Updated")
    if (this.props.user.message !== "Error") {
      Router.replace("/dashboard");
    }
  };

  render() {
    const { firstName, lastName, email, password, bio } = this.state;

    return (
      <Fragment>
        <div className="user-edit-form">
          <form>
            <div className="form-group-inline">
              <div className="form-group">
                <label>First Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Update first name..."
                  value={firstName}
                  onChange={this.handleChange}
                  className="form-control"
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
              <label>Last Name</label>
              <input
                name="lastName"
                type="text"
                placeholder="Enter last name..."
                onChange={this.handleChange}
                value={lastName}
                className="form-control"
                autoComplete="off"
                required
              />
              </div>
          </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Update email..."
                  value={email}
                  onChange={this.handleChange}
                  className="form-control"
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Update password..."
              onChange={this.handleChange}
              value={password}
              className="form-control"
              autoComplete="off"
              required
            />
          </div>
            <div className="form-group">
              <label>Biography</label>
              <textarea
                className="form-control"
                name="bio"
                rows="3"
                placeholder="Update bio..."
                value={bio}
                onChange={this.handleChange}
              />
            </div>
            <div className="btn-group">
              <div className="update-btn">
                <button
                  className="btn btn-outline-success"
                  type="submit"
                  onClick={this.updateUser}
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
        <style jsx>{`
          .user-edit-form {
            padding: 0.5rem;
            width: 75%;
            height: 75%;
            background-color: #102e36ab;
            margin: 0 auto;
          }

          .user-edit-form label{
            color: #fff;
          }

          .user-edit-form input, .user-edit-form textarea{
            background: transparent;
            color:#fff;
          }

          .user-edit-form input::placeholder, .user-edit-form textarea::placeholder{
            color:#fff;
          }

          .form-group-inline {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .form-group-inline > * {
            width: 45%;
          }

        `}</style>
      </Fragment>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  { update, destroyUser, requestUser }
)(withRouter(UserEditForm));
