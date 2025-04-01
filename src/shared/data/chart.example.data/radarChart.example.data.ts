// import { Monitor, Smartphone } from "lucide-react";

import { ChartConfig } from "../../shadcn/ui/chart";
import {
  TChartData,
  TChartProps,
  TCustomRadarChartConfig,
} from "../../ui/chart/chart.type";
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
  // chartContainerClassName: "mx-auto aspect-square max-h-[500px]",
  theme: colorTheme.vividColors_5,
  animation: {
    isAnimationActive: true,
    animationBegin: 0,
    animationDuration: 1000,
  },
  legend: true,
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
