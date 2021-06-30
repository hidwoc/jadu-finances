import { Doughnut } from "react-chartjs-2";
import Calculation from "./Calculation";
import Table from "./Table";

const Expenses = (props) => {
  const { selectedExpenses } = props;

  const reducer = (accumulator, expense) => accumulator + expense.fields.price;
  // total expenses
  const totalExpenses = Number(selectedExpenses.reduce(reducer, 0).toFixed(2));
  // total packaging
  const totalPackaging = Number(
    selectedExpenses
      .filter((expense) => expense.fields.category === "Packaging")
      .reduce(reducer, 0)
      .toFixed(2)
  );
  // total supplies
  const totalSupplies = Number(
    selectedExpenses
      .filter((expense) => expense.fields.category === "Supplies")
      .reduce(reducer, 0)
      .toFixed(2)
  );
  // total delivery
  const totalDelivery = Number(
    selectedExpenses
      .filter((expense) => expense.fields.category === "Delivery")
      .reduce(reducer, 0)
      .toFixed(2)
  );
  // total kimchi
  const totalKimchi = Number(
    selectedExpenses
      .filter((expense) => expense.fields.category === "Kimchi")
      .reduce(reducer, 0)
      .toFixed(2)
  );
  // total jalapenos
  const totalJalapenos = Number(
    selectedExpenses
      .filter((expense) => expense.fields.category === "Jalapenos")
      .reduce(reducer, 0)
      .toFixed(2)
  );
  // total beans
  const totalBeans = Number(
    selectedExpenses
      .filter((expense) => expense.fields.category === "Beans")
      .reduce(reducer, 0)
      .toFixed(2)
  );
  // total ingredients
  const totalIngredients = totalKimchi + totalBeans + totalJalapenos;

  const donutExpenses = {
      labels: ["Packaging", "Supplies", "Delivery", "Kimchi", "Jalapenos", "Beans"],
      datasets: [
        {
          label: "Total Category Expenses",
          data: [totalPackaging,totalSupplies,totalDelivery,totalKimchi,totalJalapenos,totalBeans,],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: ["rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"],
          borderWidth: 1,
        }
      ],
    }
  
  return (
    <main>
      <Table selectedExpenses={selectedExpenses} />
      <div id="donut-container">
        <Doughnut data={donutExpenses} />
      </div>
      <div id="calculations-container">
        <Calculation category="Total Expenses" total={totalExpenses} />
        <Calculation category="Supplies" total={totalSupplies} />
        <Calculation category="Packaging" total={totalPackaging} />
        <Calculation category="Delivery" total={totalDelivery} />
        <Calculation category="Ingredients" total={totalIngredients} />
        <Calculation category="Kimchi" total={totalKimchi} />
        <Calculation category="Jalapenos" total={totalJalapenos} />
        <Calculation category="Beans" total={totalBeans} />
      </div>
    </main>
  );
};

export default Expenses;

// OG DETAILS.JSX RIP
// const [entries, setEntries] = useState([]);
// const params = useParams();

// useEffect(() => {
//   console.log(params.id)
//   params.id === "sales"
//   ? setEntries(props.salesData)
//   : setEntries(props.expensesData);

// }, [params.id, props.salesData, props.expensesData])
