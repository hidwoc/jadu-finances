const Expenses = (props) => {
  const { selectedExpenses } = props;

  console.log(selectedExpenses)
  return (
    <div>
      <h2>Details</h2>
      <main>
        {selectedExpenses.map((expense) => (
          <h3 key={expense.id}>{expense.fields.entryID}</h3>
        ))}
      </main>
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