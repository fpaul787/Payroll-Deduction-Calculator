import React from 'react'
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {},
  appBar: {
    position: "relative",
    backgroundColor: "#002c63",
  },
});

export default function Navbar() {
  
  const classes = useStyles();
  return (
    <AppBar
      className={classes.appBar}
      position="absolute"
      color="default"
      elevation={4}
    >
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap={true}>
          Panther Tech Payroll Deduction Calculator
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
