import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { colorTheme } from "../colorTheme";

const CMAreaChart = ({
  chartData,
  chartConfig = {},
  customChartConfig = {},
}) => {
  // 첫 번째 데이터 항목의 키들 가져오기
  const dataKeys = Object.keys(chartData.data[0]);
  // XAxis의 dataKey로 사용할 키
  const xAxisKey = "label";
  // 나머지 키들을 Area 컴포넌트의 dataKey로 사용
  const areaKeys = dataKeys.filter((key) => key !== xAxisKey);

  // customChartConfig에서 필요한 속성을 구조 분해 할당으로 추출하거나 기본값 설정
  const {
    chartContainerClassName = "min-h-[200px] w-full", // 차트 컨테이너의 className || "min-h-[200px] w-full"
    theme = colorTheme.rootColors_5, // 차트의 색상 테마
    animation: {
      isAnimationActive = true, // 애니메이션 on/off || true
      animationBegin = 0, // 애니메이션 시작 시간
      animationDuration = 500, // 애니메이션 지속 시간
    } = {},
    tooltip: {
      cursor = false, // 툴팁의 커서 on/off
      content: {
        indicator = "line", // 툴팁의 인디케이터 스타일
      } = {},
    } = {},
    legend = false, // 범례 on/off || false
    cartesian: {
      accessibilityLayer = false, // 키보드 접근과 스크린리더 기능 on/off
      vertical, // 배경 선 그리기 x축 | x + y축
      xAxis: {
        xDataKey = "label", // x축 데이터 키 || "label"
        xTickLine = false, // x축의 눈금선 on/off
        xTickMargin = 8, // x축 눈금선과 축 사이의 간격
        xAxisLine = false, // x축의 선 on/off
        xTickFormatter = (value) => value.slice(0, 3), // x축 눈금선의 텍스트 포맷
      } = {},
      yAxis: {
        yDataKey = undefined, // y축 데이터 키 || undefined
        yShow = true, // y축 표시 여부 || true
        yTickCount = 5, // y축의 눈금 개수
        yTicks = undefined, // y축의 눈금 값
        yTickLine = false, // y축의 눈금선 on/off
        yTickMargin = 8, // y축 눈금선과 축 사이의 간격
        yAxisLine = false, // y축의 선 on/off
        yTickFormatter = (value) => `${value}`, // y축 눈금선의 텍스트 포맷
      } = {},
    } = {},
    area: {
      type = "natural", // 영역의 타입 (monotone, natural 등)
      dot = false, // 점 표시 on/off
      fillOpacity = 0.4, // 영역의 투명도
    } = {},
    margin = { top: 0, right: 12, bottom: 0, left: 12 }, // 차트 내부 여백
  } = customChartConfig;

  return (
    <ChartContainer className={chartContainerClassName} config={chartConfig}>
      <AreaChart
        accessibilityLayer={accessibilityLayer}
        data={chartData.data}
        margin={margin}
      >
        {/* 커서 올렸을 때 */}
        <ChartTooltip
          cursor={cursor}
          content={<ChartTooltipContent indicator={indicator} />}
        />

        {/* 배경에 축 선 그리기 */}
        {vertical && (
          <CartesianGrid vertical={vertical === "x" ? false : true} />
        )}

        {/* X축 그리기 */}
        <XAxis
          dataKey={xDataKey}
          tickLine={xTickLine}
          tickMargin={xTickMargin}
          axisLine={xAxisLine}
          tickFormatter={xTickFormatter}
        />

        {/* Y축 그리기 (yShow가 true일 때만 렌더링) */}
        {yShow && (
          <YAxis
            dataKey={yDataKey}
            tickCount={yTickCount}
            ticks={yTicks}
            tickLine={yTickLine}
            tickMargin={yTickMargin}
            axisLine={yAxisLine}
            tickFormatter={yTickFormatter}
          />
        )}

        {/* 범례 */}
        {legend && <ChartLegend content={<ChartLegendContent />} />}

        {/* 데이터 영역 그리기 */}
        {areaKeys.map((key, index) => (
          <Area
            key={key}
            dataKey={key}
            type={type}
            dot={dot}
            fill={chartConfig[key]?.color || theme?.[index % theme.length]}
            fillOpacity={fillOpacity}
            stroke={chartConfig[key]?.color || theme?.[index % theme.length]}
            stackId="a" // 어짜피 하나로 쌓기 때문에 고정값 처리
            isAnimationActive={isAnimationActive}
            animationBegin={animationBegin}
            animationDuration={animationDuration}
          />
        ))}
      </AreaChart>
    </ChartContainer>
  );
};

export default CMAreaChart;
