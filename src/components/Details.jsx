import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Doughnut } from "react-chartjs-2";
import Calculation from "./Calculation";
import Table from "./Table";
import ToForm from "./ToForm";
import { Calculations } from "../services"

const Details = (props) => {
  const { selectedExpenses, selectedSales } = props;
  const [className, setClassName] = useState("");
  const [viewingEntries, setViewingEntries] = useState([])
  const [viewingCalculations, setViewingCalculations] = useState({})
  const params = useParams();

  useEffect(() => {
    setClassName(params.id);
    if (params.id === "sales") {
      setViewingEntries(selectedSales)
    }
    if (params.id === "expenses") {
      setViewingEntries(selectedExpenses)
    }
    setViewingCalculations(new Calculations(viewingEntries));
  }, [selectedSales, selectedExpenses, viewingEntries, params.id])

  const expensesOnly = className === "expenses" ? null : { display: "none" };
  const salesOnly = className === "sales" ? null : { display: "none" };

  return (
    <main>
      <ToForm details={params.id}/>
      <Table className={className} viewingEntries={viewingEntries} />
      <div id="donut-container">
        <Doughnut data={params.id === "sales" ? viewingCalculations.donutSales : viewingCalculations.donutExpenses} />
      </div>
      <div id="calculations-container">
        <Calculation className={className} category="Total Sales" total={viewingCalculations.totalSales} />
        <Calculation style={expensesOnly} category="Total Expenses" total={viewingCalculations.totalExpenses} />
        <Calculation style={expensesOnly} category="Supplies" total={viewingCalculations.totalSupplies} />
        <Calculation style={expensesOnly} category="Packaging" total={viewingCalculations.totalPackaging} />
        <Calculation style={expensesOnly} category="Delivery" total={viewingCalculations.totalDelivery} />
        <Calculation style={expensesOnly} category="Ingredients" total={viewingCalculations.totalIngredients} />
        <Calculation category="Kimchi" total={viewingCalculations.totalKimchi} />
        <Calculation category="Jalapenos" total={viewingCalculations.totalJalapenos} />
        <Calculation category="Beans" total={viewingCalculations.totalBeans} />
        <Calculation style={salesOnly} category="Delivery Fees" total={viewingCalculations.totalDeliveryFee} />
        <Calculation style={salesOnly} category="Jar Discount" total={viewingCalculations.totalJarDiscount} />
      </div>
    </main>
  );
};

export default Details;