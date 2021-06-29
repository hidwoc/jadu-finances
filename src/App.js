import { Route } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <h2>Summary</h2>
      </Route>
      <Route path="/details/:id">
        <h2>Details</h2>
      </Route>
    </div>
  );
}

export default App;
