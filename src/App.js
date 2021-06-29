import { useEffect, useState } from "react"
import { Route } from "react-router-dom";
import axios from "axios";
import Details from "./components/Details"
import Nav from "./components/Nav";
import { baseURLSales, baseURLExpenses, config } from "./services";
import "./App.css";

function App() {
  const [expensesData, setExpensesData] = useState([]);
  const [salesData, setSalesData] = useState([])

  useEffect(() => {
    const fetchExpensesData = async() => {
      const resp = await axios.get(baseURLExpenses, config);
      setExpensesData(resp.data.records);
    }
    fetchExpensesData();

    const fetchSalesData = async() => {
      const resp = await axios.get(baseURLSales, config);
      setSalesData(resp.data.records);
    }
    fetchSalesData();
  },[])


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
        <Details salesData={salesData} expensesData={expensesData}/>
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
