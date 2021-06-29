import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <h2>Summary</h2>
      </Route>
       {/**
        * ? Leave this as NOT an exact path so I can gray it out in CSS?
        *  */}
      <Route path="/details/:id">
        <h2>Details</h2>
      </Route>
      {/**
        * TODO: Link in ToForm.jsx
        *  */}
      <Route path="/details/:id/form">
        <h2>Form</h2>
      </Route>
    </div>
  );
}

export default App;
