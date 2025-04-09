import { ChartConfig } from "@/components/ui/chart";
import { colorTheme } from "../colorTheme";

const pieChartData = {
  type: "pie",
  data: [
    { label: "chrome", value: 275 },
    { label: "safari", value: 200 },
    { label: "firefox", value: 287 },
    { label: "edge", value: 173 },
    { label: "other", value: 190 },
  ],
};

const customPieChartConfig = {
  chartContainerClassName: "aspect-square h-[200px]",
  // theme: colorTheme.vividColors_5,
  animation: {
    isAnimationActive: true,
    animationBegin: 0,
    animationDuration: 1000,
  },
  // legend: true,
  pie: {
    innerRadius: 40,
    stroke: "black",
    strokeWidth: 3,
    opacity: 0.7,
  },
  topTSpan: {
    topTSpanClassName: "fill-foreground text-2xl font-bold",
    moveTopTSpanX: 0,
    moveTopTSpanY: 0,
  },
  bottomTSpan: {
    bottomTSpanClassName: "fill-muted-foreground text-1xl",
    bottomTSpanText: "총합",
    // moveExplainX: 0,
    // moveBottomTSpanY: 0,
  },
  table: {
    showTable: true,
    tableClassName: "w-[200px]",
    layout: "horizontal",
  },
};

// 테마를 설정했다면 없어도 됨
const pieChartConfig = {
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

export const pieChartProps = {
  chartData: pieChartData,
  chartConfig: pieChartConfig,
  customChartConfig: customPieChartConfig,
};
