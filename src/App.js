import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
// import BatchMenu from "./components/BatchMenu";
import Expenses from "./components/Expenses";
import Sales from "./components/Sales";
import Nav from "./components/Nav";
import { baseURLSales, baseURLExpenses, config } from "./services";
import "./App.css";

function App() {
  const [expensesData, setExpensesData] = useState([]);
  const [salesData, setSalesData] = useState([]);
  const [selectedBatch, setSelectedBatch] = useState(""); // from BatchMenu
  const [selectedSales, setSelectedSales] = useState([]);
  const [selectedExpenses, setSelectedExpenses] = useState([]);

  useEffect(() => {
    const fetchExpensesData = async () => {
      const resp = await axios.get(baseURLExpenses, config);
      setExpensesData(resp.data.records);
    };
    fetchExpensesData();

    const fetchSalesData = async () => {
      const resp = await axios.get(baseURLSales, config);
      setSalesData(resp.data.records);
    };
    fetchSalesData();
  }, []);

  // From BatchMenu -- populate BatchMenu with unique values and...
  const salesBatches = new Set(salesData.map((sale) => sale.fields.batch))
  const expensesBatches = new Set(expensesData.map((expense) => expense.fields.batch))
  
  const batches = new Set([...salesBatches, ...expensesBatches])
  const options = new Array(...batches);
  console.log(options)

  // ...onChange render data to only those batches
  const handleChange = (e) => {
    setSelectedBatch(e.target.value);
    console.log(selectedBatch)
    setSelectedSales(salesData.filter((sale) => sale.fields.batch === selectedBatch));
    setSelectedExpenses(expensesData.filter((expense) => expense.fields.batch === selectedBatch));
  }
  // moved from BatchMenu

  return (
    <div className="App">
      <Nav />
      {/* <BatchMenu salesData={salesData} expensesData={expensesData}/> */}
      <select id="dropdown" placeholder="Selected Batch" onChange={handleChange}>
        <option disabled>Select a Batch</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>

      <Route exact path="/">
        <h2>Summary</h2>
      </Route>
      {/**
       * ? Leave this as NOT an exact path so I can gray it out in CSS?
       *  */}
      <Route path="/details/expenses">
        <Expenses selectedExpenses={selectedExpenses} />
      </Route>
      <Route path="/details/sales">
        <Sales selectedSales={selectedSales} />
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
