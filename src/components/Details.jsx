import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Route } from "react-router-dom"
import Calculation from "./Calculation";
// import DonutChart from "./DonutChart";
import Form from "./Form";
import Table from "./Table";
import ToForm from "./ToForm";

const Details = (props) => {
  const { selectedExpenses, selectedSales, setToggleFetch } = props;
  const [viewingEntries, setViewingEntries] = useState([])
  const params = useParams();

  useEffect(() => {
    if (params.id === "sales") {
      setViewingEntries(selectedSales)
    }
    if (params.id === "expenses") {
      setViewingEntries(selectedExpenses)
    }
  }, [selectedSales, selectedExpenses, params.id])


  return (
    <main>
      <ToForm />
      <Table viewingEntries={viewingEntries} />
      {/* <DonutChart /> */}
      <div id="calculations-container">


      </div>
      <Route path="/details/:id/form">
        <Form setToggleFetch={setToggleFetch} />
      </Route>
    </main>
  );
};

export default Details;