const Calculation = (props) => {
  const { category, total, className } = props;

  const expensesOnly = className === "expenses" ? null : { display: "none" };
  const salesOnly = className === "sales" ? null : { display: "none" };

  return (
    <div className="calculation" className={className}>
      <h5 className="category">{category}</h5>
      <p className="total">${total}</p>
    </div>
  );
};

export default Calculation;
