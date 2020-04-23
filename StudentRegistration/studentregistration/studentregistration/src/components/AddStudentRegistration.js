import React, { Component } from "react";
import "./AddStudentRegistration.css";
import { Button } from "@material-ui/core";
import CollegeAdministration from "./CollegeAdministration";
import Axios from "axios";
import history from "../history";
class AddStudentRegistration extends Component {
  state = {
    name: null,
    emailId: null,
    phoneNumber: null,
    branch: "",
    rollNumber: "",
    fatherName: "",
    address1: "",
    address2: "",
    city: "",
    nameerror: true,
    emailIderror: true,
    phonenumbererror: true,
  };
  anyHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  initialState = () => {
    this.setState({
      name: "",
      emailId: "",
      phoneNumber: "",
      branch: "",
      rollNumber: "",
      fatherName: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
    });
  };
  validateName = () => {
    const regrex = /^[a-zA-Z0-9]{4,32}$/;
    const result = regrex.test(this.state.name);
    this.setState({ nameerror: result }, () =>
      console.log(this.state.nameerror)
    );
console.log("validatename is =========")
    console.log(result);
    return result;
  };

  validateEmail = () => {
    const regrex = /^[a-z0-9]{2,24}@[a-z]{4,10}.[a-z]{2,3}$/;
    const result = regrex.test(this.state.emailId);
    this.setState({ emailIderror: result });
    console.log(result);
    return result;
  };
  validatePhoneNumber = () => {
    const regrex = /^[6-9]{1}[0-9]{9}$/g;
    const result = regrex.test(this.state.phoneNumber);
    this.setState({ phonenumbererror: result });
    console.log(result);
    return result;
  };
  submitHandler = (e) => {
    e.preventDefault();
    this.validateName();
    this.validateEmail();
    this.validatePhoneNumber();

    if (
      this.validateEmail() &&
      this.validatePhoneNumber() &&
      this.validateName()
    ) {
      const {
        name,
        emailId,
        phoneNumber,
        branch,
        rollNumber,
        fatherName,
        address1,
        address2,
        city,
        state,
      } = this.state;
      const books = {
        name: name,
        emailId: emailId,
        phoneNumber: phoneNumber,
        branch: branch,
        rollNumber: rollNumber,
        fatherName: fatherName,
        address1: address1,
        address2: address2,
        city: city,
        state: state,
      };
      Axios.post(
        "http://localhost:8080/studentdata/PostAllStudentDetails",
        books
      )
        .then((response) => {
          console.log(response);
          alert("successfully submitted");this.initialState();
setTimeout(history.push("/studentdetails"),1000)
        })
        .catch((error) => console.log("error is" + error));
    } else {
      alert("please fill th data correctly");
    }
  };
  render() {
    return (
      <div style={{}}>
        <CollegeAdministration />
        <form>
          <div style={{ marginTop: -900, marginLeft: 250 }}>
            <table>
              <tbody><tr>
                  <td> Enter Name </td>
                  <td>
                    <sup className="red">*</sup>
                  </td>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      onChange={this.anyHandler}
                      />

                    {this.state.nameerror||this.state.name==="" ? null : (
                      <div style={{ color: "red" }}>
                        <span>plesase check your username </span>
                      </div>
                    )}
                  </td>
                </tr>

                <tr>
                  {" "}
                  <td> Enter Email </td>
                  <td>
                    <sup className="red">*</sup>
                  </td>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      placeholder="Email"
                      name="emailId"
                      onChange={this.anyHandler}
                      required
                    />
                    {this.state.emailIderror ? null : (
                      <div style={{ color: "red" }}>
                        <span>plesase check your email </span>
                      </div>
                    )}
                  </td>
                </tr>

                <tr>
                  {" "}
                  <td> Enter phone Number </td>
                  <td>
                    <sup className="red">*</sup>
                  </td>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      placeholder="phonenumber"
                      name="phoneNumber"
                      onChange={this.anyHandler}
                    />
                    {this.state.phonenumbererror ? null : (
                      <div style={{ color: "red" }}>
                        {" "}
                        <span>plesase check your phonenumber</span>
                      </div>
                    )}
                  </td>
                </tr>

                <tr>
                  {" "}
                  <td> Enter Branch</td>
                  <td>
                    <sup className="red">*</sup>
                  </td>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      placeholder="Branch"
                      name="branch"
                      onChange={this.anyHandler}
                      required
                    />
                  </td>
                </tr>

                <tr>
                  {" "}
                  <td> Enter RollNumber </td>
                  <td>
                    <sup className="red">*</sup>
                  </td>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      placeholder="RollNumber"
                      name="rollNumber"
                      onChange={this.anyHandler}
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ marginLeft: 700, marginTop: -330 }}>
            <table>
              <tbody>
                <tr>
                  {" "}
                  <td>
                    {" "}
                    Enter FatherName <sup className="red">*</sup>
                  </td>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      placeholder="FatherName"
                      name="fatherName"
                      onChange={this.anyHandler}
                      required
                    />
                  </td>
                </tr>

                <tr>
                  {" "}
                  <td> Enter Address1 </td>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      placeholder="Address1"
                      name="address1"
                      onChange={this.anyHandler}
                    />
                  </td>
                </tr>

                <tr>
                  {" "}
                  <td> Enter Address2 </td>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      placeholder="Addess2"
                      name="address2"
                      onChange={this.anyHandler}
                    />
                  </td>
                </tr>

                <tr>
                  {" "}
                  <td> Enter City </td>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      placeholder="City"
                      name="city"
                      onChange={this.anyHandler}
                    />
                  </td>
                </tr>

                <tr>
                  {" "}
                  <td> Enter State </td>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      placeholder="State"
                      name="state"
                      onChange={this.anyHandler}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginLeft: 1100 }}
            onClick={this.submitHandler}
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default AddStudentRegistration;
