


import { Button } from "@material-ui/core";

//tables
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Axios from "axios";
import history from "../history";

import React, { Component } from 'react'

export class View extends Component {
state={details:[]}
componentDidMount()
{

Axios.get("http://localhost:8080/studentdata/getAllSutdentDetails").then(response=> this.setState({details:response.data})).catch(error=>console.log(error))
}
  render() {
    return (
      <div>

        <TableContainer>
<Table style={{border:"1px solid black",borderCollapse:"collapse"}}>
<TableHead>
<TableRow >
                <TableCell align="right">
                  <h3>Name</h3>
                </TableCell>
                <TableCell align="right">
                  <h3>Email</h3>
                </TableCell>
                <TableCell align="right">
                  <h3>Phone Number</h3>
                </TableCell>
                <TableCell align="right">
                  <h3>Branch</h3>
                </TableCell>
                <TableCell align="right">
                  <h3>Roll Number</h3>
                </TableCell>
                <TableCell align="right">
                  <h3>Father Name</h3>
                </TableCell>
                <TableCell align="right">
                  <h3>Address1</h3>
                </TableCell>
                <TableCell align="right">
                  <h3>Address2</h3>
                </TableCell>
                <TableCell align="right">
                  <h3>City</h3>
                </TableCell>
                <TableCell align="right">
                  <h3>State</h3>
                </TableCell>
              </TableRow>
            </TableHead>
<TableBody>
              {this.state.details.map((details, index) => (
                <TableRow key={index} className="hover1">
                  <TableCell align="right">{details.name}</TableCell>
                  <TableCell align="right">{details.emailId}</TableCell>
                  <TableCell align="right">{details.phoneNumber}</TableCell>
                  <TableCell align="right">{details.branch}</TableCell>
                  <TableCell align="right">{details.rollNumber}</TableCell>
                  <TableCell align="right">{details.fatherName}</TableCell>
                  <TableCell align="right">{details.address1}</TableCell>
                  <TableCell align="right">{details.address2}</TableCell>
                  <TableCell align="right">{details.city}</TableCell>
                  <TableCell align="right">{details.state}</TableCell>
                </TableRow>
              ))}
            </TableBody>


</Table>


</TableContainer>
      </div>
    )
  }
}

export default View


