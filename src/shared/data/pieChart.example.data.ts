// import { Monitor, Smartphone } from "lucide-react";

import { ChartConfig } from "../shadcn/ui/chart";
import {
  TChartData,
  TChartProps,
  TCustomPieChartConfig,
} from "../ui/chart/chart.type";
import { colorTheme } from "./colorTheme";

const pieChartData: TChartData = {
  type: "pie",
  data: [
    { label: "chrome", value: 275 },
    { label: "safari", value: 200 },
    { label: "firefox", value: 287 },
    { label: "edge", value: 173 },
    { label: "other", value: 190 },
  ],
};

const customPieChartConfig: TCustomPieChartConfig = {
  chartContainerClassName: "mx-auto aspect-square max-h-[500px]",
  theme: colorTheme.vividColors_5,
  animation: {
    isAnimationActive: true,
    animationDuration: 1000,
  },
  pie: {
    innerRadius: 100,
    stroke: "black",
    strokeWidth: 3,
  },
  TotalValueTspan: {
    totalValueClassName: "fill-foreground text-6xl font-bold",
    // moveValueX: 0,
    moveValueY: 0,
  },
  explainTspan: {
    explainClassName: "fill-muted-foreground text-2xl",
    text: "총합",
    // moveExplainX: 0,
    moveExplainY: -20,
  },
};

// 테마를 설정했다면 없어도 됨
const pieChartConfig: ChartConfig = {
  chrome: {
    label: "Chrome",
    // color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    // color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    // color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    // color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    // color: "hsl(var(--chart-5))",
  },
};

export const pieChartProps: TChartProps<TCustomPieChartConfig> = {
  chartData: pieChartData,
  chartConfig: pieChartConfig,
  customChartConfig: customPieChartConfig,
};
