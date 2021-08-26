import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Navbar } from "./components/Navbar"
import { Home } from "./components/Home"
import { Footer } from "./components/Footer"

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
      <Footer />
    </div>
    </Router>
  );
}

export default App;
