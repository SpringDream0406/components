// import { Monitor, Smartphone } from "lucide-react";

import { ChartConfig } from "../shadcn/ui/chart";
import { TChartData, TCustomChartConfig } from "../ui/chart/chart.type";
import { colorTheme } from "./colorTheme";

export const barChartData: TChartData = {
  type: "bar",
  data: [
    {
      label: "January",
      desktop: 186,
      mobile: 80,
      phone: 50,
      tablet: 30,
      watch: 20,
      laptop: 100,
      accessory: 50,
      e: 100,
      n: 100,
      t: 100,
    },
    {
      label: "February",
      desktop: 305,
      mobile: 200,
      phone: 60,
      tablet: 40,
      watch: 25,
      laptop: 110,
      accessory: 55,
    },
    {
      label: "March",
      desktop: 237,
      mobile: 120,
      phone: 70,
      tablet: 50,
      watch: 30,
      laptop: 120,
      accessory: 60,
    },
    {
      label: "April",
      desktop: 73,
      mobile: 190,
      phone: 80,
      tablet: 60,
      watch: 35,
      laptop: 130,
      accessory: 65,
    },
    {
      label: "May",
      desktop: 209,
      mobile: 130,
      phone: 90,
      tablet: 70,
      watch: 40,
      laptop: 140,
      accessory: 70,
    },
    {
      label: "June",
      desktop: 214,
      mobile: 140,
      phone: 100,
      tablet: 80,
      watch: 45,
      laptop: 150,
      accessory: 75,
    },
    {
      label: "July",
      desktop: 128,
      mobile: 90,
      phone: 110,
      tablet: 90,
      watch: 50,
      laptop: 160,
      accessory: 80,
    },
  ],
};

export const customBarChartConfig: TCustomChartConfig = {
  animation: {
    // duration: 500,
  },
  //   tooltip: {
  //     cursor: false,
  //     content: {
  //       indicator: "line",
  //     },
  //   },
  //   legend: false,
  theme: colorTheme.lightGreenToDarkBlue_10,
  //   barChart: {
  //     accessibilityLayer: true,
  //     vertical: "x",
  //     xAxis: {
  //       tickLine: true,
  //       tickMargin: 10,
  //       axisLine: false,
  //       tickFormatter: (value) => value.slice(0, 3),
  //     },
  //     bar: {
  //       radius: 1,
  //       opacity: 0.7,
  //       stroke: "black",
  //       strokeWidth: 0.5,
  //     },
  //   },
};

// 테마를 설정하고 범례가 필요없다면
export const barChartConfig: ChartConfig = {
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
