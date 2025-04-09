import { ChartConfig } from "@/components/ui/chart";
import {
  TChartData,
  TChartProps,
  TCustomRadarChartConfig,
} from "../chart.type";
import { colorTheme } from "../colorTheme";

const radarChartData: TChartData = {
  type: "radar",
  data: [
    { label: "January", desktop: 186, mobile: 80 },
    { label: "February", desktop: 305, mobile: 200 },
    { label: "March", desktop: 237, mobile: 120 },
    { label: "April", desktop: 73, mobile: 190 },
    { label: "May", desktop: 209, mobile: 130 },
    { label: "June", desktop: 214, mobile: 140 },
  ],
};

const customRadarChartConfig: TCustomRadarChartConfig = {
  chartContainerClassName: "aspect-square h-[300px]",
  theme: colorTheme.vividColors_5,
  animation: {
    isAnimationActive: true,
    animationBegin: 0,
    animationDuration: 1000,
  },
  tooltip: {
    cursor: false, // 툴팁 커서 설정 추가
    content: {
      indicator: "line", // 툴팁 인디케이터 스타일 추가
    },
  },
  legend: true,
  radar: {
    stroke: "#8884d8", // 레이더 차트 선 색상 추가
    strokeWidth: 2, // 레이더 차트 선 두께 추가
  },
  table: {
    showTable: true,
    tableClassName: "w-[400px]",
    layout: "vertical", // 명시적으로 layout 추가
  },
};

// 테마를 설정했다면 없어도 됨
const radarChartConfig: ChartConfig = {
  desktop: {
    label: "Desktop",
    // color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    // color: "hsl(var(--chart-2))",
  },
};

export const radarChartProps: TChartProps<TCustomRadarChartConfig> = {
  chartData: radarChartData,
  chartConfig: radarChartConfig,
  customChartConfig: customRadarChartConfig,
};
