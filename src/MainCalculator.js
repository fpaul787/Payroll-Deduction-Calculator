import React from 'react'
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {

    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "100px",
    marginBottom: "48px",
    padding: '24px',
    background: "#00459a",
    color: "#d59f00"
  },
});

export default function MainCalculator() {
  const classes = useStyles();
  return (
    <main style={{width: '600px', marginRight: 'auto', marginLeft: 'auto'}}>
      <Paper elevation={1} className={classes.root}>
        <Typography variant="h4" align="center">
          New Payroll Deduction
        </Typography>
      </Paper>
    </main>
  );
}
