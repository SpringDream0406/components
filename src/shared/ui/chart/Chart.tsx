import { TChartProps } from "./chart.type";
import CMbarChart from "./charts/CMBarChart";
import CMPieChart from "./charts/CMPieChart";

export const Chart = ({
  chartData,
  chartConfig,
  customChartConfig,
}: TChartProps) => {
  // console.log(chartData.type);
  // console.log(chartConfig);

  const renderChart = () => {
    const chartProps = {
      chartData,
      chartConfig,
      customChartConfig,
    };

    switch (chartData.type) {
      case "bar":
        return <CMbarChart {...chartProps} />;
      case "pie":
        return <CMPieChart />;
      default:
        return <>null</>;
    }
  };

  return <>{renderChart()}</>;
};
