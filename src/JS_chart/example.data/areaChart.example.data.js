// import { Monitor, Smartphone } from "lucide-react";

import { ChartConfig } from "@/components/ui/chart";
import { colorTheme } from "../colorTheme";

const areaChartData = {
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

const customAreaChartConfig = {
  chartContainerClassName: "h-[400px] w-[400px]",
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
    vertical: "x",
    xAxis: {
      xTickLine: true, // x축 눈금선 on/off
      xTickMargin: 10, // x축 눈금선과 축 사이의 간격
      xAxisLine: false, // x축 선 on/off
      xTickFormatter: (value) => value.slice(0, 3), // x축 텍스트 포맷
    },
    yAxis: {
      // yTickCount: 10, // y축 눈금 개수
      // yTicks: [0, 100, 200, 300, 400, 500], // y축 눈금 값
      yTickLine: true, // y축 눈금선 on/off
      yTickMargin: 10, // y축 눈금선과 축 사이의 간격
      yAxisLine: true, // y축 선 on/off
    },
  },
  area: {
    type: "natural",
    dot: true,
    fillOpacity: 0.4,
  },
  table: {
    showTable: true,
    tableClassName: "w-[300px]",
    layout: "horizontal",
  },
};

// 테마를 설정하고 범례가 필요없다면 없어도 됨
const areaChartConfig = {
  desktop: {
    label: "Desktop",
    // color: "yellow",
  },
  mobile: {
    label: "Mobile",
    // color: "blue",
  },
};

export const areaChartProps = {
  chartData: areaChartData,
  chartConfig: areaChartConfig,
  customChartConfig: customAreaChartConfig,
};
