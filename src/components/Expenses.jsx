import Calculation from "./Calculation";
import Table from "./Table";

const Expenses = (props) => {
  const { selectedExpenses } = props;

  return (
    <div>
      <h2>Expenses</h2>
      <Table selectedExpenses={selectedExpenses}/>
      <Calculation selectedExpenses={selectedExpenses} />
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