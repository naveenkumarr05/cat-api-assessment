import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Link } from "react-router-dom";
import Content from "../src/components/Content";

//import "./styles.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/randomcat">Random</Link>
            </li>
            <li>
              <Link to="/catfulldetails">Gallery</Link>
            </li>
          </ul>
        </nav>
        <Content />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
