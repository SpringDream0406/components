import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shared/shadcn/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { TChartProps } from "../chart.type";

const CMbarChart = ({
  chartData,
  chartConfig = {},
  customChartConfig,
}: TChartProps) => {
  // 첫 번째 데이터 항목의 키들 가져오기
  const dataKeys = Object.keys(chartData.data[0]);
  // 첫 번째 키를 XAxis의 dataKey로 사용
  const xAxisKey = "label";
  // 나머지 키들을 Bar 컴포넌트의 dataKey로 사용
  const barKeys = dataKeys.filter((key) => key !== xAxisKey);

  // customChartConfig에서 필요한 속성을 구조 분해 할당으로 추출 하거나 기본값 할당
  const {
    tooltip: {
      cursor = false, // 툴팁의 커서 on/off
      content: { indicator = "line" } = {}, //  툴팁의 인디케이터 스타일
    } = {},
    barChart: {
      accessibilityLayer = false, // 키보드 접근과 스크린리더 기능 on/off
      vertical, // 배경 선 그리기 x축 | x + y축 // || 데이터 없으면 안 그림
      xAxis: {
        tickLine = false, // 축의 눈금선 on/off
        tickMargin = 10, // 눈금선과 축 사이의 간격
        axisLine = false, // 축의 선 on/off
        tickFormatter = (value: string) => value.slice(0, 3), // 눈금선의 텍스트 포맷
      } = {},
      bar: {
        radius = 4, // 바의 모서리 둥글기
        opacity = 1, // 바의 투명도
        stroke = "none", // 바의 테두리 색상
        strokeWidth = 0.5, // 바의 테두리 두께
      } = {},
    } = {},
    legend = false, // 범례 on/off || false
    theme = "black", // 차트의 색상 테마로 적용하기 // chartConfig의 color || 테마(최대 숫자 초과한건 없는걸로 처리) || black
    animation: {
      duration = 500, // 애니메이션 지속 시간
    } = {},
  } = customChartConfig || {};

  //
  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer={accessibilityLayer} data={chartData.data}>
        {/* 배경에 축 선 그리기 */}
        {vertical && (
          <CartesianGrid vertical={vertical === "x" ? false : true} />
        )}
        {/* X축 그리기 */}
        <XAxis
          dataKey={xAxisKey}
          tickLine={tickLine}
          tickMargin={tickMargin}
          axisLine={axisLine}
          tickFormatter={tickFormatter}
        />
        {/* 커서 올렸을 때 */}
        <ChartTooltip
          cursor={cursor}
          content={<ChartTooltipContent indicator={indicator} />}
        />
        {/* 범례 */}
        {legend && <ChartLegend content={<ChartLegendContent />} />}
        {/* 데이터 바 그리기 */}
        {barKeys.map((key, index) => (
          <Bar
            key={key}
            dataKey={key}
            fill={chartConfig[key]?.color || theme?.[index]}
            radius={radius}
            opacity={opacity}
            stroke={stroke}
            strokeWidth={strokeWidth}
            animationDuration={duration}
          />
        ))}
      </BarChart>
    </ChartContainer>
  );
};

export default CMbarChart;
