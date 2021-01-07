import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    h6: {
      color: "#d59f00 !important",
      fontWeight: "bold",
    },
  },
  palette: {
    background: {
      default: "#001530",
    },
  },
});

export default theme;
