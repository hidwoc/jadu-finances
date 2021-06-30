import Calculation from "./Calculation";
import Table from "./Table";

const Sales = (props) => {
  const { selectedSales } = props;

  const reducer = (accumulator, sale) => accumulator + sale.fields.price;
  // total kimchi
  const totalKimchi = Number(
    selectedSales
      .filter((sale) => sale.fields.category === "Kimchi")
      .reduce(reducer, 0)
      .toFixed(2)
  );
  console.log("total Kimchi", totalKimchi);
  // total jalapenos
  const totalJalapenos = Number(
    selectedSales
      .filter((sale) => sale.fields.category === "Jalapenos")
      .reduce(reducer, 0)
      .toFixed(2)
  );
  console.log("total Jalapenos", totalJalapenos);
  // total beans
  const totalBeans = Number(
    selectedSales
      .filter((sale) => sale.fields.category === "Beans")
      .reduce(reducer, 0)
      .toFixed(2)
  );
  console.log("total Beans", totalBeans);
  // total delivery fee
  const totalDeliveryFee = Number(
    selectedSales
      .filter((sale) => sale.fields.chargedDeliveryFee === "true")
      .reduce((accumulator) => accumulator + 4, 0)
      .toFixed(2)
  );
  console.log("total DeliveryFee", totalDeliveryFee);
  // total jar discount \
  const totalJarDiscount = Number(
    selectedSales
      .filter((sale) => sale.fields.jarDiscount)
      .reduce((accumulator, sale) => accumulator + sale.fields.jarDiscount, 0)
      .toFixed(2)
  );
  console.log("total JarDiscount", totalJarDiscount);
  // total sales
  const totalSales =
    totalKimchi +
    totalJalapenos +
    totalBeans +
    totalDeliveryFee -
    totalJarDiscount;
  console.log("totalSales", totalSales);

  return (
    <div>
      <h2>Sales</h2>
      <Table selectedSales={selectedSales} />
      <div id="sales-calculations">
        <Calculation category="Total Sales" total={totalSales} />
        <Calculation category="Kimchi" total={totalKimchi} />
        <Calculation category="Jalapenos" total={totalJalapenos} />
        <Calculation category="Beans" total={totalBeans} />
        <Calculation category="Delivery Fees" total={totalDeliveryFee} />
        <Calculation category="Jar Discount" total={totalJarDiscount} />
      </div>
    </div>
  );
};

export default Sales;
