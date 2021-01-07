import React from 'react'
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
    background: "#00459a",
    color: "#d59f00",
  },

  title: {
    marginBottom: theme.spacing(2),
  },

  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },

  textField: {
    margin: theme.spacing(1),
    "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      display: "none",
    },
    "&[type=number]": {
      "-moz-appearance": "textfield",
    },
    "&::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "&::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    color: "#fff",
  },

  labelRoot: {
    fontSize: 25,
  },

  input: {
    height: 60,
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `black !important`,
    },
  },

  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#d59f00 !important",
  },

  cssFocused: {},
}));

const handleChange = (prop) => (event) => {
  
    const onlyNums = event.target.value.replace(/[^0-9]/g, '');
    if (onlyNums.length < 10) {
        // this.setState({ value: onlyNums });
        console.log(onlyNums)
    } else if (onlyNums.length === 10) {
        const number = onlyNums.replace(
            /(\d{3})(\d{3})(\d{4})/,
            '($1) $2-$3'
        );
        // this.setState({ value: number });
        console.log(number)
    }
}


export default function MainCalculator() {
  const classes = useStyles();
  return (
    <main className={classes.layout}>
      <Paper elevation={1} className={classes.paper}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          className={classes.title}
        >
          New Payroll Deduction
        </Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            id="total"
            variant="outlined"
            label="Total"
            type="number"
            className={classes.textField}
            onChange={handleChange("total")}
            InputProps={{
              className: classes.input,
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
            }}
            InputLabelProps={{
              style: { color: "#d59f00" },
              classes: {
                root: classes.labelRoot,
                focused: classes.labelFocused,
              },
            }}
          />
          
        </form>
      </Paper>
    </main>
  );
}
