import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import { calculate, existingCalculate } from "./calulate";

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

  button: {
    background: "#d59f00",
  },

  copyButton: {
    background: "#d59f00",
    width: 100,
  },

  colorHighlight: {
    color: "#d59f00",
    "&.Mui-focused": {
      color: "#d59f00",
    },
  },

  textArea: {
    height: 150,
    width: 325,
    resize: "none",
    background: "#fff",
    fontSize: 20,
  },

  radio: {
    "&$checked": {
      color: "#d59f00",
    },
  },
  checked: {},
}));

export default function NewPayroll() {
  const classes = useStyles();
  const MINIMUM_PERCENTAGE = 0.1;
  const [enteredTotal, setEnteredTotal] = useState(0);
  const [periods, setPeriods] = useState(12);
  const [downPayment, setDownPayment] = useState(0);
  const [existingAmt, setExisting] = useState(0);
  const [checked, setChecked] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState(
    `Please make some calculations`
  );

  const validateNumber = (total) => {
    var totalString = total.toString();
    let isnum = /^\d+(\.\d{1,2})?$/.test(totalString);
    return isnum;
  };

  const handleEnteredTotal = (event) => {
    setEnteredTotal(event.target.value);
  };

  const handlePeriod = (event) => {
    setPeriods(event.target.value);
  };

  const handleDownPayment = (event) => {
    setDownPayment(event.target.value);
  };

  const handleExisting = (event) => {
    setExisting(event.target.value);
  };

  const handleSubmitFromTotal = () => {
    if (!validateNumber(enteredTotal)) {
      alert("Total must be greater or equal to 0");
      return;
    }

    // if checked, existing payroll is being calculated
    if (checked) {
      var tempDownPayment = enteredTotal * MINIMUM_PERCENTAGE;

      var {
        calculatedDownPayment,
        paymentPerPeriod,
        remainingAmt,
        remaining_existing,
      } = existingCalculate(
        enteredTotal,
        tempDownPayment,
        existingAmt,
        periods
      );

      setTextAreaValue(
        `Total: $${enteredTotal}\nDown Payment: $${calculatedDownPayment}\nRemaining: ${remainingAmt}\nRemaining + Existing: $${remaining_existing}\nPayment Per ${periods} Periods: $${paymentPerPeriod}`
      );
    } else {
      var tempDownPayment = enteredTotal * MINIMUM_PERCENTAGE;

      var { calculatedDownPayment, paymentPerPeriod, remainingAmt } = calculate(
        enteredTotal,
        tempDownPayment,
        periods
      );

      setTextAreaValue(
        `Total: $${enteredTotal}\nDown Payment: $${calculatedDownPayment}\nRemaining: $${remainingAmt}\nPayment Per ${periods} Periods: $${paymentPerPeriod}`
      );
    }
  };

  const handleSubmitFromDownPayment = () => {
    if (!validateNumber(enteredTotal)) {
      alert("Total must be greater or equal to 0");
      return;
    }

    if (!validateNumber(downPayment)) {
      alert("Down Payment must be greater equal to 0");
      return;
    }

    if (downPayment < enteredTotal * MINIMUM_PERCENTAGE) {
      alert("Down Payment must be greater or equal to 10% of total");
      return;
    }

    // existing amount
    if (checked) {
      var {
        calculatedDownPayment,
        paymentPerPeriod,
        remainingAmt,
        remaining_existing,
      } = existingCalculate(enteredTotal, downPayment, existingAmt, periods);

      setTextAreaValue(
        `Total: $${enteredTotal}\nDown Payment: $${calculatedDownPayment}\nRemaining: ${remainingAmt}\nRemaining + Existing: $${remaining_existing}\nPayment Per ${periods} Periods: $${paymentPerPeriod}`
      );
    } else {
      var { calculatedDownPayment, paymentPerPeriod, remainingAmt } = calculate(
        enteredTotal,
        downPayment,
        periods
      );

      setTextAreaValue(
        `Total: $${enteredTotal}\nDown Payment: $${calculatedDownPayment}\nRemaining: $${remainingAmt}\nPayment Per ${periods} Periods: $${paymentPerPeriod}`
      );
    }
  };

  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = textAreaValue;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

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
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="total"
              variant="outlined"
              label="Total"
              type="number"
              className={classes.textField}
              onChange={handleEnteredTotal}
              InputProps={{
                className: classes.input,
                startAdornment: (
                  <InputAdornment position="start">
                    <span className={classes.colorHighlight}>$</span>
                  </InputAdornment>
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
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={() => {
                    setChecked(!checked);
                  }}
                  name="checkedA"
                />
              }
              label="Existing Payroll"
            />
          </Grid>
          {checked ? (
            <Grid item xs={12}>
              <TextField
                id="existing"
                variant="outlined"
                label="Existing"
                type="number"
                className={classes.textField}
                onChange={handleExisting}
                InputProps={{
                  className: classes.input,
                  startAdornment: (
                    <InputAdornment position="start">
                      <span className={classes.colorHighlight}>$</span>
                    </InputAdornment>
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
            </Grid>
          ) : (
            <div></div>
          )}

          <Grid style={{ marginLeft: "10px" }} item xs={12} sm={8}>
            <FormControl component="fieldset" className={classes.form}>
              <FormLabel className={classes.colorHighlight} component="legend">
                Periods
              </FormLabel>
              <RadioGroup
                row
                aria-label="period"
                name="period"
                value={periods.toString()}
                onChange={handlePeriod}
              >
                <FormControlLabel
                  value="12"
                  control={
                    <Radio
                      disableRipple
                      classes={{
                        root: classes.radio,
                        checked: classes.checked,
                      }}
                    />
                  }
                  label="12"
                />
                <FormControlLabel
                  value="16"
                  control={
                    <Radio
                      classes={{
                        root: classes.radio,
                        checked: classes.checked,
                      }}
                    />
                  }
                  label="16"
                />
                <FormControlLabel
                  value="20"
                  control={
                    <Radio
                      classes={{
                        root: classes.radio,
                        checked: classes.checked,
                      }}
                    />
                  }
                  label="20"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid style={{ marginLeft: "10px" }} item xs={12} sm={8}>
            <Button
              className={classes.button}
              onClick={handleSubmitFromTotal}
              variant="contained"
            >
              Calculate From Total
            </Button>
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              id="downPayment"
              variant="outlined"
              label="Down Payment"
              type="number"
              onChange={handleDownPayment}
              className={classes.textField}
              InputProps={{
                className: classes.input,
                startAdornment: (
                  <InputAdornment position="start">
                    <span className={classes.colorHighlight}>$</span>
                  </InputAdornment>
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
          </Grid>
          <Grid style={{ marginLeft: "10px" }} item xs={12} sm={8}>
            <Button
              className={classes.button}
              onClick={handleSubmitFromDownPayment}
              variant="contained"
            >
              Calculate From Down Payment
            </Button>
          </Grid>
          <Grid style={{ marginLeft: "10px" }} item xs={12} sm={8}>
            <textarea
              className={classes.textArea}
              disabled
              value={textAreaValue}
            />
          </Grid>
          <Grid style={{ marginLeft: "10px" }} item xs={12} sm={8}>
            <Button
              onClick={copyToClipboard}
              className={classes.copyButton}
              variant="contained"
            >
              Copy
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </main>
  );
}
