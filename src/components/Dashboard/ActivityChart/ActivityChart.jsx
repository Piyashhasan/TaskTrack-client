import PropTypes from "prop-types";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ActivityChart = (props) => {
  const { data } = props;
  const chartData = {
    labels: data?.labels,
    datasets: [
      {
        data: data?.values,
        backgroundColor: data?.backgroundColor || [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
      },
    ],
  };
  const chartOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const label = chartData.labels[tooltipItem.dataIndex] || "";
            const value = tooltipItem.raw;
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  return <Doughnut className="mt-3" data={chartData} options={chartOptions} />;
};

ActivityChart.propTypes = {
  data: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    values: PropTypes.arrayOf(PropTypes.number).isRequired,
    backgroundColor: PropTypes.arrayOf(PropTypes.string),
    borderColor: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
export default ActivityChart;
