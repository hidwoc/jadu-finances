import { useEffect, useState } from "react";

const Table = (props) => {
  const [entries, setEntries] = useState([]);
  const [tableClass, setTableClass] = useState("");

  useEffect(() => {
    if (props.selectedExpenses) {
      setEntries(props.selectedExpenses)
      setTableClass("expenses")
    }
    if (props.selectedSales) {
      setEntries(props.selectedSales)
      setTableClass("sales")
    }
  },[props.selectedExpenses, props.selectedSales])

  return (
    <div>
      {/* research on creating tables on w3schools */}
      <table>
        <tr>
          <th className={tableClass}>{tableClass === "expenses" ? "Description" : "Customer"}</th>
          <th>Quantity</th>
          <th>Category</th>
          <th>Price</th>
          <th className={tableClass}>{tableClass === "expenses" ? "Vendor" : "Charged Delivery Fee?"}</th>
          <th className={tableClass}>{tableClass === "expenses" ? null : "Jar Discount"}</th>
        </tr>
        {entries.map((entry) => (
          <tr key={entry.id}>
            <td className={tableClass}>{tableClass === "expenses" ? entry.fields.description : entry.fields.customer}</td>
            <td>{entry.fields.quantity}</td>
            <td>{entry.fields.category}</td>
            <td>${entry.fields.price.toFixed(2)}</td>
            <td className={tableClass}>{tableClass === "expenses" ? entry.fields.vendor : entry.fields.chargedDeliveryFee}</td>
            <td className={tableClass}>{tableClass === "expenses" ? null : entry.fields.jarDiscount ? "$" + entry.fields.jarDiscount.toFixed(2) : null}</td>
            {console.log(typeof entry.fields.jarDiscount)}
          </tr>
          
        ))}
      </table>
    </div>
  );
};

export default Table;