const Calculation = (props) => {
  const { name, sum } = props;

  return (
    <div className="calculation">
      <h5 className="name">{name}</h5>
      <p className="sum">${sum}</p>
    </div>
  );
};

export default Calculation;
