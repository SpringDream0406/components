// import { Monitor, Smartphone } from "lucide-react";

import { ChartConfig } from "@/components/ui/chart";
import { TChartData, TChartProps, TCustomBarChartConfig } from "../chart.type";
import { colorTheme } from "../colorTheme";

const barChartData: TChartData = {
  type: "bar",
  data: [
    {
      label: "January",
      desktop: 90,
      mobile: 80,
      phone: 50,
      tablet: 30,
      watch: 20,
      laptop: 70,
      accessory: 50,
    },
    {
      label: "February",
      desktop: 10,
      mobile: 90,
      phone: 60,
      tablet: 40,
      watch: 25,
      laptop: 20,
      accessory: 55,
    },
    {
      label: "March",
      desktop: 50,
      mobile: 90,
      phone: 70,
      tablet: 50,
      watch: 30,
      laptop: 80,
      accessory: 60,
    },
    {
      label: "April",
      desktop: 73,
      mobile: 90,
      phone: 80,
      tablet: 60,
      watch: 35,
      laptop: 30,
      accessory: 65,
    },
    {
      label: "May",
      desktop: 9,
      mobile: 30,
      phone: 90,
      tablet: 70,
      watch: 40,
      laptop: 40,
      accessory: 70,
    },
    {
      label: "June",
      desktop: 14,
      mobile: 40,
      phone: 10,
      tablet: 80,
      watch: 45,
      laptop: 15,
      accessory: 75,
    },
    {
      label: "July",
      desktop: 12,
      mobile: 90,
      phone: 10,
      tablet: 90,
      watch: 50,
      laptop: 60,
      accessory: 80,
    },
  ],
};

const customBarChartConfig: TCustomBarChartConfig = {
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
    vertical: "x",
    xAxis: {
      xDataKey: "label", // 명시적으로 xDataKey 추가
      xTickLine: true, // x축 눈금선 on/off
      xTickMargin: 10, // x축 눈금선과 축 사이의 간격
      xAxisLine: false, // x축 선 on/off
      xTickFormatter: (value) => value.slice(0, 3), // x축 텍스트 포맷
    },
    yAxis: {
      yShow: true, // y축 표시 여부 || true
      yTickCount: 5, // y축 눈금 개수
      // yTicks: [0, 10, 50, 100], // y축 눈금 값
      yTickLine: true, // y축 눈금선 on/off
      yTickMargin: 10, // y축 눈금선과 축 사이의 간격
      yAxisLine: true, // y축 선 on/off
      yTickFormatter: (value) => `${value}`, // y축 눈금 값 포맷 추가
    },
  },
  bar: {
    radius: 1,
    opacity: 0.7,
    stroke: "black",
    strokeWidth: 0.5,
  },
  table: {
    showTable: true,
    tableClassName: "w-[900px] h-[200px]",
    layout: "horizontal",
  },
};

// 테마를 설정하고 범례가 필요없다면 없어도 됨
const barChartConfig: ChartConfig = {
  desktop: {
    label: "Desktop",
    // icon: Monitor,
    // color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    // icon: Smartphone,
    // color: "#60a5fa",
  },
  phone: {
    label: "Phone",
    // icon: Smartphone,
    // color: "#60a5fa",
  },
  tablet: {
    label: "Tablet",
    // icon: Tablet,
    // color: "#34d399",
  },
  watch: {
    label: "Watch",
    // icon: Watch,
    // color: "#fbbf24",
  },
  laptop: {
    label: "Laptop",
    // icon: Laptop,
    // color: "#3b82f6",
  },
  accessory: {
    label: "Accessory",
    // icon: Accessory,
    // color: "#a855f7",
  },
  e: {
    label: "e",
    // icon: Accessory,
    // color: "#a855f7",
  },
  n: {
    label: "n",
    // icon: Accessory,
    // color: "#a855f7",
  },
  t: {
    label: "한글",
    // icon: Accessory,
    // color: "#a855f7",
  },
};

export const barChartProps: TChartProps<TCustomBarChartConfig> = {
  chartData: barChartData,
  chartConfig: barChartConfig,
  customChartConfig: customBarChartConfig,
};
