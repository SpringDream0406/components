// import { Monitor, Smartphone } from "lucide-react";

import { ChartConfig } from "@/components/ui/chart";
import { TChartData, TChartProps, TCustomLineChartConfig } from "../chart.type";
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
  chartContainerClassName: "h-[300px] w-[400px]",
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
    vertical: "y",
    xAxis: {
      xDataKey: "label", // 명시적으로 xDataKey 설정
      xTickLine: true, // x축 눈금선 on/off
      xTickMargin: 10, // x축 눈금선과 축 사이의 간격
      xAxisLine: false, // x축 선 on/off
      xTickFormatter: (value) => value.slice(0, 3), // x축 텍스트 포맷
    },
    yAxis: {
      yShow: true, // y축 표시 여부 || true
      yTickCount: 5, // y축 눈금 개수
      // yTicks: [0, 100, 200, 300, 400], // y축 눈금 값
      yTickLine: true, // y축 눈금선 on/off
      yTickMargin: 10, // y축 눈금선과 축 사이의 간격
      yAxisLine: true, // y축 선 on/off
      yTickFormatter: (value) => `${value}`, // y축 텍스트 포맷 추가
    },
  },
  line: {
    strokeWidth: 10,
    dot: true,
    type: "linear",
    connectNulls: false, // null 값 연결 옵션 추가
  },
  // margin 속성 추가
  margin: { top: 5, right: 20, bottom: 5, left: 10 },
  table: {
    showTable: true,
    tableClassName: "w-[350px]",
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
