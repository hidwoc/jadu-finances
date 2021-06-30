import { Doughnut } from "react-chartjs-2";

const DonutChart = (props) => {
  return (
    <div>
      <Doughnut data={props.selectedExpenses} />
    </div>
  );
};

export default DonutChart;