import {
  TChartProps,
  TCustomBarChartConfig,
  TCustomPieChartConfig,
} from "./chart.type";
import {
  CMAreaChart,
  CMBarChart,
  CMLineChart,
  CMPieChart,
  CMRadarChart,
  CMRadialChart,
} from "@/shared/ui/chart/charts";

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
      case "radar":
        return <CMRadarChart {...chartProps} />;
      case "radial":
        return <CMRadialChart {...chartProps} />;
      default:
        return (
          <>{`type으로 적으신 ${chartData.type}이 Chart 항목에 존재하지 않습니다.`}</>
        );
    }
  };

  return <>{renderChart()}</>;
};
