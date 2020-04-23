import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Toolbar } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import "./CollegeAdministration.css";
import history from '../history'

export class CollegeAdministration extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" style={{ padding: 5 }}>
          <Toolbar>
            <Grid container spacing={3}>
              <Grid item xs={11}>
                <Typography style={{ textAlign: "center" }}>
                  College Administration
                </Typography>
              </Grid>

              <Grid item xs={1}>
                <div>
                  <Button  color="secondary" variant="contained"
  onClick={()=>{history.push("/")}}>
                    Logout
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <div className="flex">
          <span className="border">Students</span>
        </div>
      </div>
    );
  }
}

export default CollegeAdministration;
