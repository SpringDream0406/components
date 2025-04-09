// import { Monitor, Smartphone } from "lucide-react";

import { colorTheme } from "../colorTheme";

const barChartData = {
  type: "bar", // 차트 유형
  data: [
    {
      label: "January", // 1월 데이터
      desktop: 90,
      mobile: 80,
      phone: 50,
      tablet: 30,
      watch: 20,
      laptop: 70,
      accessory: 50,
    },
    {
      label: "February", // 2월 데이터
      desktop: 10,
      mobile: 90,
      phone: 60,
      tablet: 40,
      watch: 25,
      laptop: 20,
      accessory: 55,
    },
    {
      label: "March", // 3월 데이터
      desktop: 50,
      mobile: 90,
      phone: 70,
      tablet: 50,
      watch: 30,
      laptop: 80,
      accessory: 60,
    },
    {
      label: "April", // 4월 데이터
      desktop: 73,
      mobile: 90,
      phone: 80,
      tablet: 60,
      watch: 35,
      laptop: 30,
      accessory: 65,
    },
    {
      label: "May", // 5월 데이터
      desktop: 9,
      mobile: 30,
      phone: 90,
      tablet: 70,
      watch: 40,
      laptop: 40,
      accessory: 70,
    },
    {
      label: "June", // 6월 데이터
      desktop: 14,
      mobile: 40,
      phone: 10,
      tablet: 80,
      watch: 45,
      laptop: 15,
      accessory: 75,
    },
    {
      label: "July", // 7월 데이터
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

const customBarChartConfig = {
  chartContainerClassName: "h-[300px] w-[400px]", // 차트 컨테이너 클래스명 || "min-h-[200px] w-full"
  theme: colorTheme.vividColors_5, // 차트 색상 테마 || rootColors_5
  animation: {
    isAnimationActive: true, // 애니메이션 활성화 여부 || true
    animationBegin: 0, // 애니메이션 시작 시간(ms) || 0
    animationDuration: 1000, // 애니메이션 지속 시간(ms) || 500
  },
  tooltip: {
    cursor: true, // 툴팁 커서 활성화 여부 || false
    content: {
      indicator: "dot", // 툴팁 인디케이터 스타일 (dot, line, dashed 중 선택) || "line"
    },
  },
  legend: true, // 범례 표시 여부 || false
  cartesian: {
    accessibilityLayer: true, // 접근성 레이어 활성화 여부 || false
    vertical: "x", // 수직 그리드 라인 표시 방향 (x, y 중 선택)
    xAxis: {
      xDataKey: "label", // x축 데이터 키 이름 || "label"
      xTickLine: true, // x축 눈금선 표시 여부 || false
      xTickMargin: 10, // x축 눈금선과 축 사이의 간격 || 10
      xAxisLine: false, // x축 선 표시 여부 || false
      xTickFormatter: (value) => value.slice(0, 3), // x축 텍스트 포맷 함수 || value.slice(0, 3)
    },
    yAxis: {
      yShow: true, // y축 표시 여부 || true
      yTickCount: 5, // y축 눈금 개수 || 5
      // yTicks: [0, 10, 50, 100], // 명시적 y축 눈금 값 설정 || undefined
      yTickLine: true, // y축 눈금선 표시 여부 || false
      yTickMargin: 10, // y축 눈금선과 축 사이의 간격 || 10
      yAxisLine: true, // y축 선 표시 여부 || false
      yTickFormatter: (value) => `${value}`, // y축 텍스트 포맷 함수 || `${value}`
    },
  },
  bar: {
    radius: 1, // 바의 모서리 둥글기 || 4
    opacity: 0.7, // 바의 투명도 || 1
    stroke: "black", // 바의 테두리 색상 || "none"
    strokeWidth: 0.5, // 바의 테두리 두께 || 0.5
  },
  table: {
    showTable: true, // 테이블 표시 여부 || false
    tableClassName: "w-[900px] h-[200px]", // 테이블 클래스명 || ""
    layout: "horizontal", // 테이블 레이아웃 (vertical 또는 horizontal) || "vertical"
  },
};

// 테마를 설정하고 범례가 필요없다면 없어도 됨
const barChartConfig = {
  desktop: {
    label: "Desktop", // Desktop 항목의 레이블
    // icon: Monitor, // 아이콘 컴포넌트 (주석 처리됨)
    // color: "#2563eb", // 개별 색상 설정 (테마가 있으면 생략 가능)
  },
  mobile: {
    label: "Mobile", // Mobile 항목의 레이블
    // icon: Smartphone, // 아이콘 컴포넌트 (주석 처리됨)
    // color: "#60a5fa", // 개별 색상 설정 (테마가 있으면 생략 가능)
  },
  phone: {
    label: "Phone", // Phone 항목의 레이블
    // icon: Smartphone, // 아이콘 컴포넌트 (주석 처리됨)
    // color: "#60a5fa", // 개별 색상 설정 (테마가 있으면 생략 가능)
  },
  tablet: {
    label: "Tablet", // Tablet 항목의 레이블
    // icon: Tablet, // 아이콘 컴포넌트 (주석 처리됨)
    // color: "#34d399", // 개별 색상 설정 (테마가 있으면 생략 가능)
  },
  watch: {
    label: "Watch", // Watch 항목의 레이블
    // icon: Watch, // 아이콘 컴포넌트 (주석 처리됨)
    // color: "#fbbf24", // 개별 색상 설정 (테마가 있으면 생략 가능)
  },
  laptop: {
    label: "Laptop", // Laptop 항목의 레이블
    // icon: Laptop, // 아이콘 컴포넌트 (주석 처리됨)
    // color: "#3b82f6", // 개별 색상 설정 (테마가 있으면 생략 가능)
  },
  accessory: {
    label: "Accessory", // Accessory 항목의 레이블
    // icon: Accessory, // 아이콘 컴포넌트 (주석 처리됨)
    // color: "#a855f7", // 개별 색상 설정 (테마가 있으면 생략 가능)
  },
  e: {
    label: "e", // e 항목의 레이블
    // icon: Accessory, // 아이콘 컴포넌트 (주석 처리됨)
    // color: "#a855f7", // 개별 색상 설정 (테마가 있으면 생략 가능)
  },
  n: {
    label: "n", // n 항목의 레이블
    // icon: Accessory, // 아이콘 컴포넌트 (주석 처리됨)
    // color: "#a855f7", // 개별 색상 설정 (테마가 있으면 생략 가능)
  },
  t: {
    label: "한글", // 한글 항목의 레이블
    // icon: Accessory, // 아이콘 컴포넌트 (주석 처리됨)
    // color: "#a855f7", // 개별 색상 설정 (테마가 있으면 생략 가능)
  },
};

export const barChartProps = {
  chartData: barChartData, // 차트 데이터
  chartConfig: barChartConfig, // 차트 구성 설정
  customChartConfig: customBarChartConfig, // 커스텀 차트 구성 설정
};
