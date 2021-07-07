import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Doughnut } from "react-chartjs-2";
import Calculation from "./Calculation";
import "../componentsCSS/Calculations.css";
import Table from "./Table";
import ToForm from "./ToForm";
import { Calculations } from "../services";

const Details = (props) => {
  const { selectedExpenses, selectedSales, styleColor } = props;
  const [className, setClassName] = useState("");
  const [viewingEntries, setViewingEntries] = useState([]);
  const [viewingCalculations, setViewingCalculations] = useState({});
  const params = useParams();

  useEffect(() => {
    setClassName(params.id);
    if (params.id === "sales") {
      setViewingEntries(selectedSales);
    }
    if (params.id === "expenses") {
      setViewingEntries(selectedExpenses);
    }
    setViewingCalculations(new Calculations(viewingEntries));
  }, [selectedSales, selectedExpenses, viewingEntries, params.id]);

  console.log(viewingEntries);
  return (
    <main>
      <div id="entries">
        <ToForm details={params.id} />
        <Table className={className} viewingEntries={viewingEntries} styleColor={styleColor} />
      </div>
      <div id="donut-container">
        <Doughnut
          data={
            params.id === "sales"
              ? viewingCalculations.donutSales
              : viewingCalculations.donutExpenses
          }
        />
      </div>
      <div id="calculations-container">
        {!viewingCalculations.calculations ? (
          <h4>Loading...</h4>
        ) : (
          viewingCalculations.calculations
            .filter((category) => category.className.includes(params.id))
            .map((category) => (
              <Calculation
                key={category.name}
                name={category.name}
                sum={category.sum}
              />
            ))
        )}
        {!viewingCalculations.calculations ? (
          <h4>Loading...</h4>
        ) : (
          viewingCalculations.grandTotals
            .filter((category) => category.className.includes(params.id))
            .map((category) => (
              <Calculation
                key={category.name}
                name={category.name}
                sum={category.sum}
              />
            ))
        )}
      </div>
    </main>
  );
};

export default Details;
