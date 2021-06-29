const Sales = (props) => {
  const { selectedSales } = props;

  return (
    <div>
      <h2>Details</h2>
      <main>
        {selectedSales.map((sale) => (
          <h3 key={sale.id}>{sale.fields.entryID}</h3>
        ))}
      </main>
    </div>
  );
};

export default Sales;