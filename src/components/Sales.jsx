import { Doughnut } from "react-chartjs-2";
import Calculation from "./Calculation";
import Table from "./Table";
import ToForm from "./ToForm";
import { Calculations } from "../services"

const Sales = (props) => {
  const { selectedSales } = props;

  const salesCalculations = new Calculations (selectedSales);
  // console.log(salesCalculations.totalKimchi());
  // const reducer = (accumulator, sale) => accumulator + sale.fields.price;
  // // total kimchi
  // const totalKimchi = Number(
  //   selectedSales
  //   .filter((sale) => sale.fields.category === "Kimchi")
  //     .reduce(reducer, 0)
  //     .toFixed(2)
  // );
  // // total jalapenos
  // const totalJalapenos = Number(
  //   selectedSales
  //   .filter((sale) => sale.fields.category === "Jalapenos")
  //   .reduce(reducer, 0)
  //   .toFixed(2)
  //   );
  //   // total beans
  //   const totalBeans = Number(
  //     selectedSales
  //     .filter((sale) => sale.fields.category === "Beans")
  //     .reduce(reducer, 0)
  //     .toFixed(2)
  //     );
  //     // total delivery fee
  // const totalDeliveryFee = Number(
  //   selectedSales
  //   .filter((sale) => sale.fields.chargedDeliveryFee === "true")
  //     .reduce((accumulator) => accumulator + 4, 0)
  //     .toFixed(2)
  // );
  // // total jar discount \
  // const totalJarDiscount = Number(
  //   selectedSales
  //   .filter((sale) => sale.fields.jarDiscount)
  //   .reduce((accumulator, sale) => accumulator + sale.fields.jarDiscount, 0)
  //   .toFixed(2)
  //   );
  //   // total sales
  //   const totalSales =
  //   totalKimchi +
  //   totalJalapenos +
  //   totalBeans +
  //   totalDeliveryFee -
  //   totalJarDiscount;
    

  // const donutSales = {
  //   labels: ["Kimchi", "Jalapenos", "Beans","Delivery Fee"],
  //   datasets: [
  //     {
  //       label: "Total Category Sales",
  //       data: [totalKimchi,totalJalapenos,totalBeans, totalDeliveryFee],
  //       backgroundColor: [
  //         "rgba(255, 99, 132, 0.2)",
  //         "rgba(54, 162, 235, 0.2)",
  //         "rgba(255, 206, 86, 0.2)",
  //         "rgba(75, 192, 192, 0.2)",
  //         "rgba(153, 102, 255, 0.2)",
  //         "rgba(255, 159, 64, 0.2)"
  //       ],
  //       borderColor: ["rgba(255, 99, 132, 1)",
  //       "rgba(54, 162, 235, 1)",
  //       "rgba(255, 206, 86, 1)",
  //       "rgba(75, 192, 192, 1)",
  //       "rgba(153, 102, 255, 1)",
  //       "rgba(255, 159, 64, 1)"],
  //       borderWidth: 1,
  //     }
  //   ],
  // }

  return (
    <main>
      <ToForm details="sales" />
      <Table selectedSales={selectedSales} />
      <div id="donut-container">
        <Doughnut data={salesCalculations.donutSales} />
      </div>
      <div id="calculations-container">
        <Calculation category="Total Sales" total={salesCalculations.totalSales} />
        <Calculation category="Kimchi" total={salesCalculations.totalKimchi} />
        <Calculation category="Jalapenos" total={salesCalculations.totalJalapenos} />
        <Calculation category="Beans" total={salesCalculations.totalBeans} />
        <Calculation category="Delivery Fees" total={salesCalculations.totalDeliveryFee} />
        <Calculation category="Jar Discount" total={salesCalculations.totalJarDiscount} />
      </div>
    </main>
  );
};

export default Sales;
