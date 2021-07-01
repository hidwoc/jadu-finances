import Calculation from "./Calculation";
// import comboChart
// render Calculations for all time (and selected time frame?) expenses, sales, net

const Summary = (props) => {
  const { selectedBatch, totalExpenses, totalSales } = props;
  return (
    /**
     * TODO: change main tag/div ID so it's not following CSS for Sales/Expenses
     */
    <main>
      <div id="calculations-container">
        <Calculation category={`${selectedBatch} Expenses`} total={totalExpenses} />
        <Calculation category={`${selectedBatch} Sales`} total={totalSales} />
        <Calculation id="big-calculation" category={`${selectedBatch} Net Income`} total={totalSales - totalExpenses} />
        {/* <Calculation category={`${selectedBatch} Expenses`} total={totalExpenses} />
        <Calculation category={`${selectedBatch} Expenses`} total={totalExpenses} />
        <Calculation category={`${selectedBatch} Expenses`} total={totalExpenses} /> */}
      </div>
    </main>
  );
};

export default Summary;