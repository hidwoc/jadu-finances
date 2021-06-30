import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import BatchMenu from "./components/BatchMenu";
import Expenses from "./components/Expenses";
import Sales from "./components/Sales";
import Nav from "./components/Nav";
import { baseURLSales, baseURLExpenses, config } from "./services";
import "./App.css";

function App() {
  // rawData
  const [expensesData, setExpensesData] = useState([]);
  const [salesData, setSalesData] = useState([]);
  // select batch via BatchMenu
  const [selectedBatch, setSelectedBatch] = useState("MAY");
  // filteredData by selectedBatch
  const [selectedSales, setSelectedSales] = useState([]);
  const [selectedExpenses, setSelectedExpenses] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

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

  }, [toggleFetch]);

  // Filter rawData to render the selected batch when selectedBatch is selected on BatchMenu
  useEffect(() => {
    setSelectedSales(salesData.filter((sale) => sale.fields.batch === selectedBatch));
    setSelectedExpenses(expensesData.filter((expense) => expense.fields.batch === selectedBatch));
  }, [selectedBatch])

  return (
    <div className="App">
      <Nav />
      <BatchMenu salesData={salesData} expensesData={expensesData} setSelectedBatch={setSelectedBatch}/>

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
