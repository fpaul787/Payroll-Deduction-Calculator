import './App.css';
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import Navbar from "./Navbar";
import NewPayroll from './NewPayroll';
import ExistingPayroll from './ExistingPayroll'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <NewPayroll />
            </Route>
            <Route path="/existing"></Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
