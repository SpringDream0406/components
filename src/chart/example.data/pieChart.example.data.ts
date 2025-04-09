import { ChartConfig } from "@/components/ui/chart";
import { TChartData, TChartProps, TCustomPieChartConfig } from "../chart.type";
import { colorTheme } from "../colorTheme";

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
  chartContainerClassName: "aspect-square h-[200px]",
  theme: colorTheme.vividColors_5,
  animation: {
    isAnimationActive: true,
    animationBegin: 0,
    animationDuration: 1000,
  },
  legend: true,
  pie: {
    innerRadius: 40,
    stroke: "black",
    strokeWidth: 3,
    opacity: 0.7,
  },
  topTSpan: {
    topTSpanClassName: "fill-foreground text-2xl font-bold",
    topTSpanText: "브라우저",
    moveTopTSpanX: 0,
    moveTopTSpanY: 0,
  },
  bottomTSpan: {
    bottomTSpanClassName: "fill-muted-foreground text-1xl",
    bottomTSpanText: "총합",
    moveBottomTSpanX: 0,
    moveBottomTSpanY: 0,
  },
  tooltip: {
    cursor: false,
    content: {
      indicator: "dot",
    },
  },
  table: {
    showTable: true,
    tableClassName: "w-[200px]",
    layout: "horizontal",
  },
};

const pieChartConfig: ChartConfig = {
  chrome: {
    label: "Chrome",
  },
  safari: {
    label: "Safari",
  },
  firefox: {
    label: "Firefox",
  },
  edge: {
    label: "Edge",
  },
  other: {
    label: "Other",
  },
};

export const pieChartProps: TChartProps<TCustomPieChartConfig> = {
  chartData: pieChartData,
  chartConfig: pieChartConfig,
  customChartConfig: customPieChartConfig,
};
