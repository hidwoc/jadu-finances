import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import BatchMenu from "./components/BatchMenu";
import Details from "./components/Details";
import Form from "./components/Form";
import Nav from "./components/Nav";
import Summary from "./components/Summary";
import { baseURLSales, baseURLExpenses, config } from "./services";
import "./App.css";

function App() {
  // rawData
  const [expensesData, setExpensesData] = useState([]);
  const [salesData, setSalesData] = useState([]);
  // select batch via BatchMenu
  const [selectedBatch, setSelectedBatch] = useState("Select Batch to View");
  // filteredData by selectedBatch
  const [selectedSales, setSelectedSales] = useState([]);
  const [selectedExpenses, setSelectedExpenses] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  // get unique Keys from BatchMenu
  // const [keys, setKeys] = useState([]);
  // let totalsObject = {};

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

  /** 
   // separate useEffect so .filter has a chance to be called on newly fetched data???
   * TODO:  update, rawData, selectedData, calculations on POST/PUT/DELETE*/
  useEffect(() => {
    // Filter rawData to render the selected batch when selectedBatch is selected on BatchMenu
    setSelectedSales(
      salesData.filter((sale) => sale.fields.batch === selectedBatch)
    );
    setSelectedExpenses(
      expensesData.filter((expense) => expense.fields.batch === selectedBatch)
    );
  }, [selectedBatch, salesData, expensesData]);

  return (
    <div className="App">
      <header>
        <h3>JADU FINANCES</h3>
      </header>
      <div id="body-div">
        <div id="nav-div">
          <Nav />
        </div>
        <div id="batchmenu-div">
          <BatchMenu
            salesData={salesData}
            expensesData={expensesData}
            setSelectedBatch={setSelectedBatch}
            // setKeys={setKeys}
          />
        </div>
        <div id="main-div">
          <Route exact path="/">
            <Summary /> {/*  totalsObject={totalsObject} */}
          </Route>
          {/**
           * ? Leave this as NOT an exact path so I can gray it out in CSS?
           *  */}
          <Route exact path="/details/:id">
            <Details
              selectedExpenses={selectedExpenses}
              selectedSales={selectedSales}
            />
          </Route>
          <Route path="/details/:id/form">
            <Form setToggleFetch={setToggleFetch} />
          </Route>
        </div>
      </div>
    </div>
  );
}

export default App;
