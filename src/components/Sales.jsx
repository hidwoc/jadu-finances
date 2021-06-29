import Table from "./Table";

const Sales = (props) => {
  const { selectedSales } = props;

  return (
    <div>
      <h2>Sales</h2>
      <Table selectedSales={selectedSales}/>
    </div>
  );
};

export default Sales;