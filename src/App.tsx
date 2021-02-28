import React, { Suspense, lazy, ReactElement } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));
const LoadApi = lazy(() => import('./routes/TriggerLoading'));

function App(): ReactElement {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/characters">Rick and Morti</Link>
        </li>
      </ul>
      <Switch>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/characters" component={LoadApi} />
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
