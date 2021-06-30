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

  return (
    <div>
      <h2>Expenses</h2>
      <Table selectedExpenses={selectedExpenses} />
      <div id="expenses-calculations">
        <Calculation category="Total Expenses" total={totalExpenses} />
        <Calculation category="Supplies" total={totalSupplies} />
        <Calculation category="Packaging" total={totalPackaging} />
        <Calculation category="Delivery" total={totalDelivery} />
        <Calculation category="Ingredients" total={totalIngredients} />
        <Calculation category="Kimchi" total={totalKimchi} />
        <Calculation category="Jalapenos" total={totalJalapenos} />
        <Calculation category="Beans" total={totalBeans} />
      </div>
    </div>
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
