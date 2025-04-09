import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { colorTheme } from "../colorTheme";

const CMRadarChart = ({
  chartData,
  chartConfig = {},
  customChartConfig = {},
}) => {
  // 첫 번째 데이터 항목의 키들 가져오기
  const dataKeys = Object.keys(chartData.data[0]);
  // XAxis의 dataKey로 사용할 키
  const axisKey = "label";
  // 나머지 키들을 Area 컴포넌트의 dataKey로 사용
  const areaKeys = dataKeys.filter((key) => key !== axisKey);

  // TCustomPieChartConfig와 TBasicCustomChartConfig에서 필요한 값만 구조 분해 및 기본값 설정
  const {
    chartContainerClassName = "min-h-[200px] w-full", // 차트 컨테이너의 className || "min-h-[200px] w-full"
    theme = colorTheme.rootColors_5, // 기본 테마 색상
    animation: {
      isAnimationActive = true, // 애니메이션 on/off
      animationBegin = 0, // 애니메이션 시작 시간
      animationDuration = 500, // 애니메이션 지속 시간
    } = {},
    tooltip: {
      cursor = false, // 툴팁의 커서 on/off
      content: {
        indicator = "line", // 툴팁의 인디케이터 스타일
      } = {},
    } = {},
    legend = false, // 범례 on/off,
    radar: {
      stroke = "none", // 레이더 차트의 테두리 색상
      strokeWidth = 2, // 레이더 차트의 테두리 두께
    } = {},
  } = customChartConfig;

  // 데이터 수에 따라 투명도 계산
  const calcudateOpacity = (index, length) => {
    const minOpacity = 0.1;
    return Math.max(1 - index / length, minOpacity);
  };

  //
  return (
    <ChartContainer config={chartConfig} className={chartContainerClassName}>
      <RadarChart data={chartData.data}>
        {/* 커서 올렸을 때 */}
        <ChartTooltip
          cursor={cursor}
          content={<ChartTooltipContent indicator={indicator} />}
        />
        {/* 모서리에 label 표시 */}
        <PolarAngleAxis dataKey={axisKey} />

        {/* 선 그리기 */}
        <PolarGrid />

        {/* 범례 */}
        {legend && <ChartLegend content={<ChartLegendContent />} />}

        {/* 데이터 그리기 */}
        {areaKeys.map((key, index) => (
          <Radar
            key={key}
            dataKey={key}
            fill={chartConfig[key]?.color || theme?.[index % theme.length]}
            fillOpacity={calcudateOpacity(index, areaKeys.length)}
            isAnimationActive={isAnimationActive}
            animationBegin={animationBegin}
            animationDuration={animationDuration}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        ))}
      </RadarChart>
    </ChartContainer>
  );
};

export default CMRadarChart;
