import { TBasicCustomChartConfig, TChartProps } from "./chart/chart.type";
import {
  CMAreaChart,
  CMBarChart,
  CMLineChart,
  CMPieChart,
  CMRadarChart,
} from "@/shared/ui/chart/";

// TCustomConfig의 범위가 넓어서 제약 걸어줌
export const Chart = <TCustomConfig extends TBasicCustomChartConfig>({
  chartData,
  chartConfig,
  customChartConfig,
}: TChartProps<TCustomConfig>) => {
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
      default:
        return (
          <>{`type으로 적으신 ${chartData.type}이 Chart 항목에 존재하지 않습니다.`}</>
        );
    }
  };

  return <>{renderChart()}</>;
};
