import React from 'react'
import './App.css';
import Home from './pages/Home';
import { Route, HashRouter, Switch } from 'react-router-dom';
import ProjectForm from './components/ProjectForm';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="**/addcustomer" exact component={ProjectForm} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
