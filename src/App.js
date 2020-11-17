import './App.css';
import HomePage from './components/HomePage/index';
import NotFound from "./components/NotFound"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App home-background">
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
