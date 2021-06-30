const Calculation = (props) => {
  const { category, total } = props;

  return (
    <div className="calculation">
      <h5 className="category">{category}</h5>
      <p className="total">${total}</p>
    </div>
  );
};

export default Calculation;
