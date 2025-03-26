import { ChartConfig } from "@/shared/shadcn/ui/chart";

export type TChartData = {
  type: string; // 차트 종류
  data: Record<string, string | number | undefined>[]; // 차트의 데이터
};

export type TCustomChartConfig = {
  tooltip?: {
    cursor?: boolean; // 툴팁의 커서 on/off || false
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
  animation?: {
    duration?: number; // 애니메이션 지속 시간 || 500
  };
  legend?: boolean; // 범례 on/off || false
  theme?: string[]; // 차트의 색상 테마로 적용하기 // chartConfig의 color || 테마(최대 숫자 초과한건 없는걸로 처리) || black
};

export type TChartProps = {
  chartData: TChartData;
  chartConfig?: ChartConfig;
  customChartConfig?: TCustomChartConfig;
};
