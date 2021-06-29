const Sales = (props) => {
  const { salesData } = props;

  return (
    <div>
      <h2>Details</h2>
      <main>
        {salesData.map((sale) => (
          <h3 key={sale.id}>{sale.fields.entryID}</h3>
        ))}
      </main>
    </div>
  );
};

export default Sales;