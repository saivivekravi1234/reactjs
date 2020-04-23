import React, { Component } from "react";
import "./AddStudentRegistration.css";
import { Button } from "@material-ui/core";
import CollegeAdministration from "./CollegeAdministration";
import Axios from 'axios'
class EditPage extends Component {
state={

address1: "",
  address2: "",
  city: "",
  emailId: "",
  state: "",
  studentId:""
}
anyHandler=(e)=>{
this.setState({[e.target.name]:e.target.value})

}

submitHandler=()=>{

const{address1,address2,city,emailId,state,studentId}=this.state
const details={
address1:address1,
address2:address2,
city:city,
emailId:emailId,
state:state,
studentId:studentId
}
if(studentId!=="")
{
Axios.post("http://localhost:8080/studentdata/editStudentDetails",details)
alert("updated successfully")
}
alert("please enter studentid")
}




  render() {
    return (
      <div>
        <CollegeAdministration />
        <form>
          <div style={{ marginTop: -900, marginLeft: 250 }}>
            <table>
              <tbody>
                <tr>
                  <td> Enter Email </td>
                  <td>:</td>
                  <td>
                    <input type="text" placeholder="Email" name="emailId" onChange={this.anyHandler}/>
                  </td>
                </tr>
 <tr>
                  <td> Enter StudentId </td>
        
                  <td>:</td>
                  <td>
                    <input type="text" placeholder="studentid" name="studentId" onChange={this.anyHandler} />
                  </td>
                </tr>
                <tr>
                
                  <td> Enter Address1 </td>
                  <td>:</td>
                  <td>
                    <input type="text" placeholder="Address1" name="address1" onChange={this.anyHandler} />
                  </td>
                </tr>
              
                <tr>
                  {" "}
                  <td> Enter Address2 </td>
                  <td>:</td>
                  <td>
                    <input type="text" placeholder="Addess2" name="address2" onChange={this.anyHandler}  />
                  </td>
                </tr>
              
                <tr>
                  {" "}
                  <td> Enter City </td>
                  <td>:</td>
                  <td>
                    <input type="text" placeholder="City"  name="city" onChange={this.anyHandler}  />
                  </td>
                </tr>
                <br />
                <tr>
                  {" "}
                  <td> Enter State </td>
                  <td>:</td>
                  <td>
                    <input type="text" placeholder="State" name="state`" onChange={this.anyHandler}  />
                  </td>
                </tr>
    
              </tbody>
            </table>
          </div>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginLeft: 1100 }} onClick={this.submitHandler} >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
export default EditPage;
