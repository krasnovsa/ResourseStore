import React from "react";
import "./styles.css";
import Routes from 'routes'
import {BrowserRouter as Router} from 'react-router-dom'
import TopBar from 'components/top-bar'

export default function App() {
  return (
    <div className="App">
      <h1>Resource Store </h1>
      <Router>
        <TopBar />
        <Routes />
      </Router> 
    </div>
  );
}
 