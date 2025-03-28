import {
  TChartProps,
  TCustomBarChartConfig,
  TCustomPieChartConfig,
} from "./chart.type";
import CMAreaChart from "./charts/CMAreaChart";
import CMBarChart from "./charts/CMBarChart";
import CMLineChart from "./charts/CMLineChart";
import CMPieChart from "./charts/CMPieChart";

export const Chart = ({
  chartData,
  chartConfig,
  customChartConfig,
}: TChartProps<TCustomBarChartConfig | TCustomPieChartConfig>) => {
  // console.log(chartData.type);
  // console.log(chartConfig);

  const renderChart = () => {
    const chartProps = {
      chartData,
      chartConfig,
      customChartConfig,
    };

    switch (chartData.type) {
      case "area":
        return <CMAreaChart {...chartProps} />;
      case "bar":
        return <CMBarChart {...chartProps} />;
      case "line":
        return <CMLineChart {...chartProps} />;
      case "pie":
        return <CMPieChart {...chartProps} />;
      default:
        return (
          <>{`type으로 적으신 ${chartData.type}이 Chart 항목에 존재하지 않습니다.`}</>
        );
    }
  };

  return <>{renderChart()}</>;
};
