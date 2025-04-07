// import { Monitor, Smartphone } from "lucide-react";

import { ChartConfig } from "../../../components/ui/chart";
import {
  TChartData,
  TChartProps,
  TCustomLineChartConfig,
} from "../../ui/chart/chart.type";
import { colorTheme } from "../colorTheme";

const lineChartData: TChartData = {
  type: "line",
  data: [
    { label: "January", desktop: 186, mobile: null },
    { label: "February", desktop: 305, mobile: 100 },
    { label: "March", desktop: 237 },
    { label: "April", desktop: 73, mobile: 190 },
    { label: "May", desktop: 209, mobile: 130 },
    { label: "June", desktop: 214, mobile: 140 },
  ],
};

const customLineChartConfig: TCustomLineChartConfig = {
  // theme: colorTheme.vividColors_5,
  // animation: {
  //   isAnimationActive: true,
  //   animationBegin: 0,
  //   animationDuration: 1000,
  // },
  // tooltip: {
  //   cursor: true,
  //   content: {
  //     indicator: "dot",
  //   },
  // },
  // legend: true,
  // chart: {
  //   accessibilityLayer: true,
  //   vertical: "x",
  //   xAxis: {
  //     tickLine: true,
  //     tickMargin: 10,
  //     axisLine: false,
  //     tickFormatter: (value) => value.slice(0, 3),
  //   },
  // },
  line: {
    strokeWidth: 10,
    dot: true,
    type: "linear",
  },
};

// 테마를 설정하고 범례가 필요없다면 없어도 됨
const lineChartConfig: ChartConfig = {
  desktop: {
    label: "Desktop",
    // color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    // color: "hsl(var(--chart-2))",
  },
};

export const lineChartProps: TChartProps<TCustomLineChartConfig> = {
  chartData: lineChartData,
  chartConfig: lineChartConfig,
  customChartConfig: customLineChartConfig,
};
