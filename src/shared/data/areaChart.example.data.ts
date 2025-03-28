// import { Monitor, Smartphone } from "lucide-react";

import { ChartConfig } from "../shadcn/ui/chart";
import {
  TChartData,
  TChartProps,
  TCustomAreaChartConfig,
} from "../ui/chart/chart.type";
import { colorTheme } from "./colorTheme";

const areaChartData: TChartData = {
  type: "area",
  data: [
    { label: "January", desktop: 186, mobile: 1000 },
    { label: "February", desktop: 305, mobile: 200 },
    { label: "March", desktop: 237, mobile: 120 },
    { label: "April", desktop: 73, mobile: 190 },
    { label: "May", desktop: 209, mobile: 130 },
    { label: "June", desktop: 214, mobile: 140 },
  ],
};

const customAreaChartConfig: TCustomAreaChartConfig = {
  theme: colorTheme.vividColors_5,
  animation: {
    isAnimationActive: true,
    animationBegin: 0,
    animationDuration: 1000,
  },
  tooltip: {
    cursor: true,
    content: {
      indicator: "dot",
    },
  },
  legend: true,
  cartesian: {
    accessibilityLayer: true,
    // vertical: "x",
    xAxis: {
      tickLine: true,
      tickMargin: 10,
      axisLine: false,
      tickFormatter: (value) => value.slice(0, 3),
    },
    yAxis: {
      // tickCount: 10,
      ticks: [0, 100, 200, 300, 400],
      tickLine: true,
      tickMargin: 10,
      axisLine: true,
    },
  },
  area: {
    type: "natural",
    dot: true,
    fillOpacity: 0.4,
  },
};

// 테마를 설정하고 범례가 필요없다면 없어도 됨
const areaChartConfig: ChartConfig = {
  desktop: {
    label: "Desktop",
    // color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    // color: "hsl(var(--chart-2))",
  },
};

export const areaChartProps: TChartProps<TCustomAreaChartConfig> = {
  chartData: areaChartData,
  chartConfig: areaChartConfig,
  customChartConfig: customAreaChartConfig,
};
