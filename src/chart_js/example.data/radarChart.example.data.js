import { colorTheme } from "../colorTheme";

const radarChartData = {
  type: "radar", // 차트 유형
  data: [
    { label: "January", desktop: 186, mobile: 80 }, // 1월 데이터
    { label: "February", desktop: 305, mobile: 200 }, // 2월 데이터
    { label: "March", desktop: 237, mobile: 120 }, // 3월 데이터
    { label: "April", desktop: 73, mobile: 190 }, // 4월 데이터
    { label: "May", desktop: 209, mobile: 130 }, // 5월 데이터
    { label: "June", desktop: 214, mobile: 140 }, // 6월 데이터
  ],
};

const customRadarChartConfig = {
  chartContainerClassName: "aspect-square h-[300px]", // 차트 컨테이너 클래스명 || "min-h-[200px] w-full"
  theme: colorTheme.vividColors_5, // 차트 색상 테마 || rootColors_5
  animation: {
    isAnimationActive: true, // 애니메이션 활성화 여부 || true
    animationBegin: 0, // 애니메이션 시작 시간(ms) || 0
    animationDuration: 1000, // 애니메이션 지속 시간(ms) || 500
  },
  tooltip: {
    cursor: false, // 툴팁 커서 설정 || false
    content: {
      indicator: "line", // 툴팁 인디케이터 스타일 (dot, line, dashed 중 선택) || "line"
    },
  },
  legend: true, // 범례 표시 여부 || false
  radar: {
    stroke: "#8884d8", // 레이더 차트 선 색상 || "none"
    strokeWidth: 2, // 레이더 차트 선 두께 || 2
  },
  table: {
    showTable: true, // 테이블 표시 여부 || false
    tableClassName: "w-[400px]", // 테이블 클래스명 || ""
    layout: "vertical", // 테이블 레이아웃 (vertical 또는 horizontal) || "vertical"
  },
};

// 테마를 설정했다면 없어도 됨
const radarChartConfig = {
  desktop: {
    label: "Desktop", // Desktop 항목의 레이블
    // color: "hsl(var(--chart-1))", // 개별 색상 설정 (테마가 있으면 생략 가능)
  },
  mobile: {
    label: "Mobile", // Mobile 항목의 레이블
    // color: "hsl(var(--chart-2))", // 개별 색상 설정 (테마가 있으면 생략 가능)
  },
};

export const radarChartProps = {
  chartData: radarChartData, // 차트 데이터
  chartConfig: radarChartConfig, // 차트 구성 설정
  customChartConfig: customRadarChartConfig, // 커스텀 차트 구성 설정
};
