// import { Monitor, Smartphone } from "lucide-react";

import { colorTheme } from "../colorTheme";

const lineChartData = {
  type: "line", // 차트 유형
  data: [
    { label: "January", desktop: 186, mobile: null }, // 1월 데이터 (mobile은 null 값)
    { label: "February", desktop: 305, mobile: 100 }, // 2월 데이터
    { label: "March", desktop: 237 }, // 3월 데이터 (mobile 값 없음)
    { label: "April", desktop: 73, mobile: 190 }, // 4월 데이터
    { label: "May", desktop: 209, mobile: 130 }, // 5월 데이터
    { label: "June", desktop: 214, mobile: 140 }, // 6월 데이터
  ],
};

const customLineChartConfig = {
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
    vertical: "y", // 수직 그리드 라인 표시 방향 (x, y 중 선택)
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
      // yTicks: [0, 100, 200, 300, 400], // 명시적 y축 눈금 값 설정 || undefined
      yTickLine: true, // y축 눈금선 표시 여부 || false
      yTickMargin: 10, // y축 눈금선과 축 사이의 간격 || 10
      yAxisLine: true, // y축 선 표시 여부 || false
      yTickFormatter: (value) => `${value}`, // y축 텍스트 포맷 함수 || `${value}`
    },
  },
  line: {
    strokeWidth: 10, // 선 두께 || 2
    dot: true, // 데이터 포인트 표시 여부 || false
    type: "linear", // 선 유형 (linear, monotone, step 중 선택) || "monotone"
    connectNulls: false, // null 값 연결 여부 || true
  },
  // 차트 여백 설정
  margin: { top: 5, right: 20, bottom: 5, left: 10 }, // || { top: 0, right: 12, bottom: 0, left: 12 }
  table: {
    showTable: true, // 테이블 표시 여부 || false
    tableClassName: "w-[350px]", // 테이블 클래스명 || ""
    layout: "vertical", // 테이블 레이아웃 (vertical 또는 horizontal) || "vertical"
  },
};

// 테마를 설정하고 범례가 필요없다면 없어도 됨
const lineChartConfig = {
  desktop: {
    label: "Desktop", // Desktop 항목의 레이블
    // color: "hsl(var(--chart-1))", // 개별 색상 설정 (테마가 있으면 생략 가능)
  },
  mobile: {
    label: "Mobile", // Mobile 항목의 레이블
    // color: "hsl(var(--chart-2))", // 개별 색상 설정 (테마가 있으면 생략 가능)
  },
};

export const lineChartProps = {
  chartData: lineChartData, // 차트 데이터
  chartConfig: lineChartConfig, // 차트 구성 설정
  customChartConfig: customLineChartConfig, // 커스텀 차트 구성 설정
};
