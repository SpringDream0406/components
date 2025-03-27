import { ChartConfig } from "@/shared/shadcn/ui/chart";

export type TChartData = {
  type: "bar" | "pie"; // 차트 종류
  data: Record<string, string | number | undefined>[]; // 차트의 데이터
};

// 차트의 공통 설정
type TBasicCustomChartConfig = {
  chartContainerClassName?: string; // 차트 컨테이너의 className || ""
  theme?: string[]; // 차트의 색상 테마로 적용하기 // chartConfig의 color || || 테마 반복 || black
  animation?: {
    isAnimationActive?: boolean; // 애니메이션 on/off || true
    animationBegin?: number; // 애니메이션 시작 시간 || 0
    animationDuration?: number; // 애니메이션 지속 시간 || 500
  };
};

// Bar 차트 설정
export type TCustomBarChartConfig = TBasicCustomChartConfig & {
  tooltip?: {
    cursor?: boolean | Record<string, any>; // 툴팁의 커서 on/off || false // 객체로 fill 같은 커스텀 기능 사용
    content?: {
      indicator?: "dashed" | "line" | "dot"; // 툴팁의 인디케이터 스타일 || "line"
    };
  };
  barChart?: {
    accessibilityLayer?: boolean; // 키보드 접근과 스크린리더 기능 on/off || false
    vertical?: "x" | "y"; // 배경 선 그리기 x축 | x + y축
    xAxis?: {
      tickLine?: boolean; // 축의 눈금선 on/off || false
      tickMargin?: number; // 눈금선과 축 사이의 간격 || 10
      axisLine?: boolean; // 축의 선 on/off || false
      tickFormatter?: (value: string) => string; // 눈금선의 텍스트 포맷 || value.slice(0, 3)
    };
    bar?: {
      radius?: number; // 바의 모서리 둥글기 || 4
      opacity?: number; // 바의 투명도 || 1 (0~1)
      stroke?: string; // 바의 테두리 색상 || "none"
      strokeWidth?: number; // 바의 테두리 두께 || 0.5
    };
  };
  legend?: boolean; // 범례 on/off || false
};

// Pie 차트 설정
export type TCustomPieChartConfig = TBasicCustomChartConfig & {
  pie?: {
    innerRadius?: number; // 파이 차트의 내부 반지름 || 60
    stroke?: string; // 파이 차트의 테두리 색상 || undefined
    strokeWidth?: number; // 파이 차트의 테두리 두께 || 2
  };
  TotalValueTspan?: {
    totalValueClassName?: string; // 테일윈드 className으로 스타일 조정 || "fill-foreground text-3xl font-bold"
    moveValueX?: number; // 중심 값의 x축 이동 || 0
    moveValueY?: number; // 중심 값의 y축 이동 || 0
  };
  explainTspan?: {
    explainClassName?: string; // 테일윈드 className으로 스타일 조정 || fill-muted-foreground"
    text?: string; // 텍스트 내용 || ""
    moveExplainX?: number; // 중심 값의 x축 이동 || 0
    moveExplainY?: number; // 중심 값의 y축 이동 || 0
  };
};

export type TChartProps<TCustomChartConfig> = {
  chartData: TChartData;
  chartConfig?: ChartConfig;
  customChartConfig?: TCustomChartConfig;
};
