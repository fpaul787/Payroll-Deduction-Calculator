import './App.css';
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import Navbar from "./Navbar";
import NewPayroll from './NewPayroll';

function App() {
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
