import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import { Button } from "@material-ui/core";
import history from "../history";
import "./LoginAdmin.css";
import Alert from "@material-ui/lab/Alert";
import CancelIcon from "@material-ui/icons/Cancel";
export class LoginAdmin extends Component {
  state = {
    emaillocked: "saivivek@gmail.com",
    passwordlocked: "sai1234",
    email: "",
    password: "",
    // successfulalert: false,
    // dangeralert: false,
  };
  anyHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();

    if (
      this.state.emaillocked === this.state.email &&
      this.state.passwordlocked === this.state.password
    ) {
      // this.setState({ successfulalert: !this.state.successfulalert });
      alert("successful  login");
      history.push("/studentdetails");
    } else {
      // this.setState({ dangeralert: !this.state.dangeralert });
      alert("please check your login email and password");
    }
  };
  render() {
    console.log(this.state);
    return (
      <div className="background">
        {/* {this.state.successfulalert ? (
          <Alert
            variant="filled"
            severity="success"
            style={{
              width: 600,
              height: 40,
              marginLeft: 300,
              marginTop: 50,
              padding: 12,
              textAlign: "center",
            }}
          >
            Successfully Login{" "}
            <CancelIcon
              style={{ marginLeft: 500, marginTop: -1800 }}
            ></CancelIcon>
          </Alert>
        ) : null}
        {this.state.dangeralert ? (
          <Alert
            variant="filled"
            severity="error"
            style={{
              width: 600,
              height: 40,
              marginLeft: 300,
              marginTop: 50,
              padding: 12,
              textAlign: "center",
            }}
          >
            please checkyour login details{" "}
            <CancelIcon
              style={{ marginLeft: 500, marginTop: -1800 }}
            ></CancelIcon>
          </Alert>
        ) : null} */}
<h1 style={{textAlign:"center" ,color:"blue"}}>Welcome Admin !!!!!!</h1>
        <Card
          style={{
            width: 350,
            height: 200,
            textAlign: "center",
            paddingTop: 60,
            marginLeft: 500,
            marginTop: 200,
            backgroundColor: "#5F6366",
color:"white",
            paddingLeft: 40,
            padding: 60



          }}
        >
          <form>
            <table style={{ textAlign: "center" }}>
              <tbody>
                <tr>
                  <td>
                    <label>Enter Email</label>
                  </td>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      onChange={this.anyHandler}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <br />
                  </td>
                  <td>
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Enter password</label>
                  </td>
                  <td>:</td>
                  <td>
                    <input
                      type="password"
                      placeholder="password"
                      name="password"
                      onChange={this.anyHandler}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
      <br /> <br />
            <Button
              color="primary"

              variant="contained"
              style={{ marginLeft: -100 }}
              onClick={this.submitHandler}
            >
              Log In
            </Button>
          </form>
        </Card>
      </div>
    );
  }
}

export default LoginAdmin;
