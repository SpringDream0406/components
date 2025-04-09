import { ChartConfig } from "@/components/ui/chart";

// 차트 데이터 형식
// 첫번째 데이터는 label로 x축에 사용
export type TChartData = {
  type: "bar" | "pie" | "line" | "area" | "radar" | "radial"; // 차트 종류
  data: Record<string, string | number | undefined | null>[]; // 차트의 데이터
};

// 차트의 공통 설정
export type TBasicCustomChartConfig = {
  chartContainerClassName?: string; // 차트 컨테이너의 className || "min-h-[200px] w-full"
  theme?: string[]; // 차트의 색상 테마로 적용하기 // chartConfig의 color || 테마 반복 || rootColors_5
  animation?: {
    isAnimationActive?: boolean; // 애니메이션 on/off || true
    animationBegin?: number; // 애니메이션 시작 시간 || 0
    animationDuration?: number; // 애니메이션 지속 시간 || 500
  };
  tooltip?: {
    cursor?: boolean | Record<string, any>; // 툴팁의 커서 on/off || false // 객체로 fill 같은 커스텀 기능 사용
    content?: {
      indicator?: "dashed" | "line" | "dot"; // 툴팁의 인디케이터 스타일 || "line"
    };
  };
  legend?: boolean; // 범례 on/off || false

  // 테이블 관련 설정 추가
  table?: {
    showTable?: boolean; // 테이블 표시 여부 || false
    tableClassName?: string; // 테이블의 className || ""
    layout?: "vertical" | "horizontal"; // 테이블 레이아웃 || "vertical"
  };
};

// x/y축이 필요한 cartesian 차트 설정
export type TCustomCartesianChartConfig = TBasicCustomChartConfig & {
  cartesian?: {
    accessibilityLayer?: boolean; // 키보드 접근과 스크린리더 기능 on/off || false
    vertical?: "x" | "y"; // 배경 선 그리기 x축 | x + y축
    xAxis?: {
      xDataKey?: string; // x축 데이터 키 || "label"
      xTickLine?: boolean; // x축의 눈금선 on/off || false
      xTickMargin?: number; // x축 눈금선과 축 사이의 간격 || 10
      xAxisLine?: boolean; // x축의 선 on/off || false
      xTickFormatter?: (value: string) => string; // x축 눈금선의 텍스트 포맷 || value.slice(0, 3)
    };
    yAxis?: {
      yDataKey?: string; // y축 데이터 키 || undefined
      yShow?: boolean; // y축 표시 여부 || true
      yTickCount?: number; // y축의 눈금 개수 || 5 // yTicks 설정되면 무시됨
      yTicks?: number[]; // y축의 눈금 값 || undefined
      yTickLine?: boolean; // y축의 눈금선 on/off || false
      yTickMargin?: number; // y축 눈금선과 축 사이의 간격 || 10
      yAxisLine?: boolean; // y축의 선 on/off || false
      yTickFormatter?: (value: string) => string; // y축 눈금선의 텍스트 포맷 || `${value}`
    };
  };
};

// Area 차트 설정
export type TCustomAreaChartConfig = TCustomCartesianChartConfig & {
  area?: {
    type?: "monotone" | "natural" | "step"; // 영역의 타입 || "natural"
    dot?: boolean; // 점 표시 on/off || false
    fillOpacity?: number; // 영역의 투명도 || 0.4
  };
  margin?: { top?: number; right?: number; bottom?: number; left?: number }; // || { top: 0, right: 12, bottom: 0, left: 12 }
};

// Bar 차트 설정
export type TCustomBarChartConfig = TCustomCartesianChartConfig & {
  bar?: {
    radius?: number; // 바의 모서리 둥글기 || 4
    opacity?: number; // 바의 투명도 || 1 (0~1)
    stroke?: string; // 바의 테두리 색상 || "none"
    strokeWidth?: number; // 바의 테두리 두께 || 0.5
  };
};

// Line 차트 설정
export type TCustomLineChartConfig = TCustomCartesianChartConfig & {
  line?: {
    type?: "monotone" | "linear" | "step"; // 선의 타입 || "monotone"
    dot?: boolean; // 점 표시 on/off || false
    connectNulls?: boolean; // null 값 연결 on/off || true
    strokeWidth?: number; // 선의 두께 || 2
  };
  margin?: { top?: number; right?: number; bottom?: number; left?: number }; // || {}
};

// Radar 차트 설정
export type TCustomRadarChartConfig = TBasicCustomChartConfig & {
  radar?: {
    stroke?: string; // 선의 색상 || "none"
    strokeWidth?: number; // 선의 두께 || 2
  };
};

// 가운데 text 설정
type TCustomCenterTextConfig = {
  topTSpan?: {
    topTSpanClassName?: string; // 테일윈드 className으로 스타일 조정 || "fill-foreground text-3xl font-bold"
    topTSpanText?: string; // 텍스트 내용 || 차트마다 다른 설정 해놓음
    moveTopTSpanX?: number; // x축 이동 || 0
    moveTopTSpanY?: number; // y축 이동 || 0
  };
  bottomTSpan?: {
    bottomTSpanClassName?: string; // 테일윈드 className으로 스타일 조정 || "fill-muted-foreground"
    bottomTSpanText?: string; // 텍스트 내용 || 차트마다 다른 설정 해놓음
    moveBottomTSpanX?: number; // x축 이동 || 0
    moveBottomTSpanY?: number; // y축 이동 || 0
  };
};

// Pie 차트 설정
export type TCustomPieChartConfig = TBasicCustomChartConfig &
  TCustomCenterTextConfig & {
    pie?: {
      innerRadius?: number; // 파이 차트의 내부 반지름 || 60
      stroke?: string; // 파이 차트의 테두리 색상 || undefined
      strokeWidth?: number; // 파이 차트의 테두리 두께 || 2
      opacity?: number; // 파이 차트의 투명도 || 1 (0~1)
    };
  };

// 차트 컴포넌트에 넘기는 props
export type TChartProps<TCustomChartConfig> = {
  chartData: TChartData;
  chartConfig?: ChartConfig;
  customChartConfig?: TCustomChartConfig;
};
