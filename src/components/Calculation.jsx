const Calculation = (props) => {
  const { selectedExpenses } = props;

  const reducer = (accumulator, expense) => accumulator + expense.fields.price;
  // total expenses
  const totalExpenses = Number(selectedExpenses.reduce(reducer, 0).toFixed(2));
  console.log("total expenses: ", totalExpenses);
  // total packaging
  const totalPackaging = Number(selectedExpenses
    .filter((expense) => expense.fields.category === "Packaging")
    .reduce(reducer, 0).toFixed(2));
    console.log('total packaging: ', totalPackaging)
  // total supplies
  const totalSupplies = Number(selectedExpenses
    .filter((expense) => expense.fields.category === "Supplies")
    .reduce(reducer, 0).toFixed(2));
  console.log('total supplies: ', totalSupplies)
  // total delivery
  const totalDelivery = Number(selectedExpenses
    .filter((expense) => expense.fields.category === "Delivery")
    .reduce(reducer, 0).toFixed(2));
  console.log('total delivery: ', totalDelivery)
  // total kimchi
  const totalKimchi = Number (selectedExpenses
  .filter((expense) => expense.fields.category === "Kimchi")
  .reduce(reducer, 0).toFixed(2));
  console.log('total kimchi: ', totalKimchi);
  // total jalapenos
  const totalJalapenos = Number (selectedExpenses
    .filter((expense) => expense.fields.category === "Jalapenos")
    .reduce(reducer, 0).toFixed(2));
  console.log('total jalapenos: ', totalJalapenos)
  // total beans
  const totalBeans = Number (selectedExpenses
    .filter((expense) => expense.fields.category === "Beans")
    .reduce(reducer, 0).toFixed(2));
  console.log('total beans: ', totalBeans)
  // total ingredients
  const totalIngredients = totalKimchi + totalBeans + totalJalapenos;
  console.log(totalIngredients)

  return (
    <div>
      <main>
        (div.category>p.
      </main>
    </div>
  );
};

export default Calculation;