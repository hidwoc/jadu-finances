import { useEffect } from "react";

// populates BatchMenu with available batches from data
// selects batch to then filter data in App
const BatchMenu = (props) => {
  const { expensesData, salesData, setSelectedBatch, setKeys } = props;

  const salesBatches = new Set(salesData.map((sale) => sale.fields.batch))
  const expensesBatches = new Set(expensesData.map((expense) => expense.fields.batch))
  
  const batches = new Set([...salesBatches, ...expensesBatches])
  const options = new Array(...batches);

  // useEffect(() => {
  //   setKeys(options)
  // }, [options])

  const handleChange = (e) => {
    setSelectedBatch(e.target.value);
  }

  return (
    <div>
      <select id="dropdown" onChange={handleChange}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default BatchMenu;