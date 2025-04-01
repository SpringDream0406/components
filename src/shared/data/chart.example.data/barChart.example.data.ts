// import { Monitor, Smartphone } from "lucide-react";

import { ChartConfig } from "../../shadcn/ui/chart";
import {
  TChartData,
  TChartProps,
  TCustomBarChartConfig,
} from "../../ui/chart/chart.type";
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
  //   theme: colorTheme.vividColors_5,
  //   animation: {
  //     isAnimationActive: true,
  //     animationBegin: 0,
  //     animationDuration: 1000,
  //   },
  //   tooltip: {
  //     cursor: true,
  //     content: {
  // indicator: "dot",
  //     },
  //   },
  //   legend: true,
  //   chart: {
  //     accessibilityLayer: true,
  //     vertical: "x",
  //     xAxis: {
  //       tickLine: true,
  //       tickMargin: 10,
  //       axisLine: false,
  //       tickFormatter: (value) => value.slice(0, 3),
  //     },
  //   },
  //   bar: {
  //     radius: 1,
  //     opacity: 0.7,
  //     stroke: "black",
  //     strokeWidth: 0.5,
  //   },
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
