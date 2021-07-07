import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import BatchMenu from "./components/BatchMenu";
import Details from "./components/Details";
import Form from "./components/Form";
import Nav from "./components/Nav";
// import Summary from "./components/Summary";
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
  // change colors based on tab selection
  const [colorTheme, setColorTheme] = useState("summary");
  const [styleColor, setStyleColor] = useState("#FF9B54");

  const [toggleFetch, setToggleFetch] = useState(false);

  // get unique Keys from BatchMenu
  // const [keys, setKeys] = useState([]);

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

  useEffect(() => {
    if (colorTheme === "sales") {
      setStyleColor("#317D44")
    } else if (colorTheme === "expenses") {
      setStyleColor("#7D1E1D")
    } else {
      setStyleColor("#FF9B54")
    }
  }, [colorTheme])

  return (
    <div className="App">
      <header>
        <h3>JADU FINANCES</h3>
      </header>
      <div id="body-div">
        <div id="nav-div" style={{borderTopColor: styleColor}}>
          <Nav colorTheme={colorTheme} setColorTheme={setColorTheme} styleColor={styleColor} />
        </div>
        <div id="batchmenu-div" style={{backgroundColor: styleColor}}>
          <BatchMenu
            salesData={salesData}
            expensesData={expensesData}
            setSelectedBatch={setSelectedBatch}
            // setKeys={setKeys}
          />
        </div>
        <div id="main-div">
          <Route exact path="/">
            <article>
              <h2>Welcome Home!</h2>
              <p>Select which batch you'd like to learn more about using the Batch Menu above. Use the Sales and Expenses tabs to view details for your selected batch.</p>
            </article>
            {/* <Summary />  totalsObject={totalsObject} */}
          </Route>
          <Route exact path="/details/:id">
            <Details
              selectedExpenses={selectedExpenses}
              selectedSales={selectedSales}
              styleColor={styleColor}
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
