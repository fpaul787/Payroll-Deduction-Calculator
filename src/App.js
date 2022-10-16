import './App.css';
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import Navbar from "./Navbar";
import NewPayroll from './NewPayroll';
import ReactGA from 'react-ga';
import {useEffect} from 'react';

const TRACKING_ID = "UA-159676073-1"; // Tracking ID
ReactGA.initialize(TRACKING_ID);

function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <NewPayroll />
      </ThemeProvider>
    </div>
  );
}

export default App;
