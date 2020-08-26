import React from 'react';
import { Router } from "@reach/router"
import Login from './components/login/Login';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Router className="App">
        <Login exact path="/"></Login>
        <Dashboard path="dashboard"></Dashboard>
      </Router>
    </div>
  );
}

export default App;
