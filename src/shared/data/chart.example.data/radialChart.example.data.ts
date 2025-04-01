// import { Monitor, Smartphone } from "lucide-react";

import { ChartConfig } from "../../shadcn/ui/chart";
import {
  TChartData,
  TChartProps,
  TCustomRadialChartConfig,
} from "../../ui/chart/chart.type";
import { colorTheme } from "../colorTheme";

const radialChartData: TChartData = {
  type: "radial",
  data: [{ label: "safari", value: 400, max: 800 }],
};

const customRadialChartConfig: TCustomRadialChartConfig = {
  chartContainerClassName: "mx-auto aspect-square max-h-[500px]",
  // theme: colorTheme.vividColors_5,
  animation: {
    isAnimationActive: true,
    animationBegin: 0,
    animationDuration: 1000,
  },
  topTSpan: {
    // topTSpanClassName: "fill-foreground text-4xl font-bold",
    // topTSpanText: "",
    // moveTopTSpanX: 0,
    // moveTopTSpanY: 0,
  },
  bottomTSpan: {
    // bottomTSpanClassName: "fill-muted-foreground text-2xl",
    // bottomTSpanText: "총합",
    // moveBottomTSpanX: 10,
    // moveBottomTSpanY: -20,
  },
  radial: {
    // stroke: "black",
    // strokeWidth: 1.5,
    // strokeOpacity: 0.5,
  },
};

// 테마를 설정했다면 없어도 됨
const radialChartConfig: ChartConfig = {
  safari: {
    label: "Safari",
    // color: "red",
  },
};

export const radialChartProps: TChartProps<TCustomRadialChartConfig> = {
  chartData: radialChartData,
  chartConfig: radialChartConfig,
  customChartConfig: customRadialChartConfig,
};
