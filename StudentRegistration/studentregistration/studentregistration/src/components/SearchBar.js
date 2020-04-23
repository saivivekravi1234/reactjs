import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import CollegeAdministration from "./CollegeAdministration";
import "./StudentDetail.css";
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
const useStyles = makeStyles({
  table: {
    width: 600,
    float: "right",
    marginRight: 0,
  },
});

function SearchBar() {
  const classes = useStyles();
  const [details, setdetails] = useState([]);
  const [name, setname] = useState("")
  useEffect(() => {
    console.log("i was called");
    Axios.get("http://localhost:8080/studentdata/getStudentName/" + name).then(
      (response) => {
        setdetails(response.data);
      }
    ).catch(error => { console.log(error) })
  });
  const settingName = (e) => { setname(e.target.value); console.log("i was called") }
  return (
    <div>
      <CollegeAdministration />
      <div>
        <input type="text" placeholder="search" className="search" onChange={settingName} />
      </div>
      <Button
        style={{ float: "right", marginTop: -950, padding: 5, marginRight: 40 }}
        color="secondary"
        variant="contained"


      >
        AddStudent
      </Button>
      {name}
      {/* //tables */}
      <div className="table">
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow style={{ border: "2px solid green", marginLeft: 400 }}>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>

                <TableCell>
                  <Button
                    color="secondary"
                    size="small"
                    variant="contained"
                    onClick={() => history.push("/edit")}
                  >
                    Edit
                  </Button>
                </TableCell>
                <TableCell>
                  <Button color="secondary" size="small" variant="contained">
                    View
                  </Button>
                </TableCell>
              </TableRow>
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
              {details.map((details, index) => (
                <TableRow key={index}>
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
    </div>
  );
}
export default SearchBar;
