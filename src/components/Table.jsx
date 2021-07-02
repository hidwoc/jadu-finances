const Table = (props) => {
  const { viewingEntries, className } = props;

  return (
    <div>
      {/* research on creating tables on w3schools */}
      <table>
        <tr>
          <th className={className}>
            {className === "expenses" ? "Description" : "Customer"}
          </th>
          <th>Quantity</th>
          <th>Category</th>
          <th>Price</th>
          <th className={className}>
            {className === "expenses" ? "Vendor" : "Charged Delivery Fee?"}
          </th>
          <th className={className}>
            {className === "expenses" ? null : "Jar Discount"}
          </th>
        </tr>
        {viewingEntries.map((entry) => (
          <tr key={entry.id}>
            <td className={className}>
              {className === "expenses"
                ? entry.fields.description
                : entry.fields.customer}
            </td>
            <td>{entry.fields.quantity}</td>
            <td>{entry.fields.category}</td>
            <td>${entry.fields.price.toFixed(2)}</td>
            <td className={className}>
              {className === "expenses"
                ? entry.fields.vendor
                : entry.fields.chargedDeliveryFee}
            </td>
            <td className={className}>
              {className === "expenses"
                ? null
                : entry.fields.jarDiscount
                ? "$" + entry.fields.jarDiscount.toFixed(2)
                : null}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
