import { useEffect, useState } from "react";

// props is salesData and expensesData
const BatchMenu = (props) => {
  const { expensesData, salesData } = props;
  const [selectedBatch, setSelectedBatch] = useState("");
  const [entries, setEntries] = useState([]);
 
  // useEffect(() => {
  //   setEntries(...props.salesData,...props.salesData)
  //   console.log(entries);
  // }, [props.salesData, props.salesData, entries])
  // find unique values of props.entries.fields.batch and set them into an array
  const salesBatches = new Set(salesData.map((sale) => sale.fields.batch))
  const expensesBatches = new Set(expensesData.map((expense) => expense.fields.batch))
  
  const batches = new Set([...salesBatches, ...expensesBatches])
  const options = new Array(...batches);

  // onChange render data to only those batches
  const handleChange = (e) => {
    setSelectedBatch(e.target.value);
    const selectedSales = salesData.filter((sale) => sale.fields.batch === selectedBatch);
    const selectedExpenses = expensesData.filter((expense) => expense.fields.batch === selectedBatch)
  }

  return (
    <div>
    {/* // populate BatchMenu to list available batches */}
      <select id="dropdown" onChange={handleChange}>
        {options.map((option) => (
          <option>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default BatchMenu;