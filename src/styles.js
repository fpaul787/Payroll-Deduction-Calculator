import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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

  link: {
    fontSize: "20px",
    marginTop: "10px",
  },

  nameStyle: {
    "&:visited": {
      color: "#d59f00",
    },
  },
}));