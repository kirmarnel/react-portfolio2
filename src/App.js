import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Navbar } from "./components/Navbar"
import { Home } from "./components/Home"

function App() {
  return (
    <Router>
        <div>
      <Navbar />
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
