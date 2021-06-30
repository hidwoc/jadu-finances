// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { Doughnut } from "react-chartjs-2";

// const DonutChart = (props) => {
//   const [donutData, setDonutData] = useState({});
//   const params = useParams();

//   useEffect(() => {
//     if (params.id === "sales") {
//       setDonutData(donutSales)
//     }
//     if (params.id === "expenses") {
//       setDonutData(donutExpenses)
//     }
//   },[params.id])
//   // also trigger if sales/expenses get updated

//   const donutSales = {
//     labels: ["Kimchi", "Jalapenos", "Beans","Delivery Fee"],
//     datasets: [
//       {
//         label: "Total Category Sales",
//         data: [totalKimchi,totalJalapenos,totalBeans, totalDeliveryFee],
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           "rgba(255, 206, 86, 0.2)",
//           "rgba(75, 192, 192, 0.2)",
//           "rgba(153, 102, 255, 0.2)",
//           "rgba(255, 159, 64, 0.2)"
//         ],
//         borderColor: ["rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)"],
//         borderWidth: 1,
//       }
//     ],
//   }

//   const donutExpenses = {
//     labels: ["Packaging", "Supplies", "Delivery", "Kimchi", "Jalapenos", "Beans"],
//     datasets: [
//       {
//         label: "Total Category Expenses",
//         data: [totalPackaging,totalSupplies,totalDelivery,totalKimchi,totalJalapenos,totalBeans],
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           "rgba(255, 206, 86, 0.2)",
//           "rgba(75, 192, 192, 0.2)",
//           "rgba(153, 102, 255, 0.2)",
//           "rgba(255, 159, 64, 0.2)"
//         ],
//         borderColor: ["rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)"],
//         borderWidth: 1,
//       }
//     ],
//   }

//   return (
//     <div id="donut-container">
//       <Doughnut data={donutData} />
//     </div>
//   );
// };

// export default DonutChart;
