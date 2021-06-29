const Expenses = (props) => {
  const { expensesData } = props;

  return (
    <div>
      <h2>Details</h2>
      <main>
        {expensesData.map((expense) => (
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