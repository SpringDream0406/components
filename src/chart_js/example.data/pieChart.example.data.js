import { colorTheme } from "../colorTheme";

const pieChartData = {
  type: "pie", // 차트 유형
  data: [
    { label: "chrome", value: 275 }, // 크롬 브라우저 데이터
    { label: "safari", value: 200 }, // 사파리 브라우저 데이터
    { label: "firefox", value: 287 }, // 파이어폭스 브라우저 데이터
    { label: "edge", value: 173 }, // 엣지 브라우저 데이터
    { label: "other", value: 190 }, // 기타 브라우저 데이터
  ],
};

const customPieChartConfig = {
  chartContainerClassName: "aspect-square h-[200px]", // 차트 컨테이너 클래스명 || "min-h-[200px] w-full"
  theme: colorTheme.vividColors_5, // 차트 색상 테마 || rootColors_5
  animation: {
    isAnimationActive: true, // 애니메이션 활성화 여부 || true
    animationBegin: 0, // 애니메이션 시작 시간(ms) || 0
    animationDuration: 1000, // 애니메이션 지속 시간(ms) || 500
  },
  legend: true, // 범례 표시 여부 || false
  pie: {
    innerRadius: 40, // 파이 차트의 내부 반지름(도넛 차트 효과) || 60
    stroke: "black", // 파이 차트 조각의 테두리 색상 || undefined
    strokeWidth: 3, // 파이 차트 조각의 테두리 두께 || 2
    opacity: 0.7, // 파이 차트의 투명도 (0~1) || 1
  },
  topTSpan: {
    topTSpanClassName: "fill-foreground text-2xl font-bold", // 상단 텍스트의 클래스명 || "fill-foreground text-3xl font-bold"
    topTSpanText: "브라우저", // 상단 텍스트 내용 || 차트마다 다른 설정
    moveTopTSpanX: 0, // 상단 텍스트의 X축 이동량 || 0
    moveTopTSpanY: 0, // 상단 텍스트의 Y축 이동량 || 0
  },
  bottomTSpan: {
    bottomTSpanClassName: "fill-muted-foreground text-1xl", // 하단 텍스트의 클래스명 || "fill-muted-foreground"
    bottomTSpanText: "총합", // 하단 텍스트 내용 || 차트마다 다른 설정
    moveBottomTSpanX: 0, // 하단 텍스트의 X축 이동량 || 0
    moveBottomTSpanY: 0, // 하단 텍스트의 Y축 이동량 || 0
  },
  tooltip: {
    cursor: false, // 툴팁 커서 설정 || false
    content: {
      indicator: "dot", // 툴팁 인디케이터 스타일 (dot, line, dashed 중 선택) || "line"
    },
  },
  table: {
    showTable: true, // 테이블 표시 여부 || false
    tableClassName: "w-[200px]", // 테이블 클래스명 || ""
    layout: "horizontal", // 테이블 레이아웃 (vertical 또는 horizontal) || "vertical"
  },
};

// 테마를 설정했다면 없어도 됨
const pieChartConfig = {
  chrome: {
    label: "Chrome", // Chrome 항목의 레이블
    // color: "hsl(var(--chart-1))", // 개별 색상 설정 (테마가 있으면 생략 가능)
  },
  safari: {
    label: "Safari", // Safari 항목의 레이블
    // color: "hsl(var(--chart-2))", // 개별 색상 설정 (테마가 있으면 생략 가능)
  },
  firefox: {
    label: "Firefox", // Firefox 항목의 레이블
    // color: "hsl(var(--chart-3))", // 개별 색상 설정 (테마가 있으면 생략 가능)
  },
  edge: {
    label: "Edge", // Edge 항목의 레이블
    // color: "hsl(var(--chart-4))", // 개별 색상 설정 (테마가 있으면 생략 가능)
  },
  other: {
    label: "Other", // Other 항목의 레이블
    // color: "hsl(var(--chart-5))", // 개별 색상 설정 (테마가 있으면 생략 가능)
  },
};

export const pieChartProps = {
  chartData: pieChartData, // 차트 데이터
  chartConfig: pieChartConfig, // 차트 구성 설정
  customChartConfig: customPieChartConfig, // 커스텀 차트 구성 설정
};
