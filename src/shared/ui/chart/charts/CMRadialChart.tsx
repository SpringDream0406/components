import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { ChartContainer } from "@/shared/shadcn/ui/chart";
import { TChartProps, TCustomRadialChartConfig } from "../chart.type";
import { colorTheme } from "@/shared/data/colorTheme";

const CMRadialChart = ({
  chartData,
  chartConfig = {},
  customChartConfig = {},
}: TChartProps<TCustomRadialChartConfig>) => {
  // TCustomPieChartConfig와 TBasicCustomChartConfig에서 필요한 값만 구조 분해 및 기본값 설정
  const {
    chartContainerClassName = "", // 차트 컨테이너의 className || ""
    theme = colorTheme.rainbow_7, // 기본 테마 색상
    animation: {
      isAnimationActive = true, // 애니메이션 on/off
      animationBegin = 0, // 애니메이션 시작 시간
      animationDuration = 500, // 애니메이션 지속 시간
    } = {},
    topTSpan: {
      topTSpanClassName = "fill-foreground text-4xl font-bold", // 중심 값 스타일
      topTSpanText = "", // 중심 값
      moveTopTSpanX = 0, // 중심 값의 x축 이동
      moveTopTSpanY = 0, // 중심 값의 y축 이동
    } = {},
    bottomTSpan: {
      bottomTSpanClassName = "fill-muted-foreground", // 중심 텍스트 설명 스타일
      bottomTSpanText = "", // 중심 텍스트 설명
      moveBottomTSpanX = 0, // 중심 텍스트 설명의 x축 이동
      moveBottomTSpanY = 0, // 중심 텍스트 설명의 y축 이동
    } = {},
    radial: {
      stroke = undefined, // 레이더 차트의 테두리 색상
      strokeWidth = 2, // 레이더 차트의 테두리 두께
      strokeOpacity = 0.5, // 레이더 차트의 투명도
    } = {},
  } = customChartConfig;

  // 데이터에 색상 및 바 비율 추가
  const refactoredData = chartData.data.map((key, index) => ({
    ...key,
    fill:
      typeof key.label === "string" // label이 string인지 확인
        ? chartConfig?.[key.label]?.color || theme[index % theme.length]
        : theme[index % theme.length], // label이 string이 아니면 theme 색상 사용

    // 바 비율 계산
    barPercentage:
      typeof key.value === "number" && typeof key.max === "number"
        ? (key.value / key.max) * 100
        : 0, // 기본값 0
  })) as Array<{ value: number; fill: string; barPercentage: number }>;

  //
  return (
    <ChartContainer config={chartConfig} className={chartContainerClassName}>
      <RadialBarChart
        data={refactoredData}
        startAngle={0}
        endAngle={(refactoredData[0]?.barPercentage / 100) * 360}
        innerRadius={80}
        outerRadius={110}
      >
        {/* 배경 그리기 */}
        <PolarGrid
          gridType="circle"
          radialLines={false}
          {...(stroke ? { stroke } : {})} // stroke가 있으면 적용
          strokeWidth={strokeWidth}
          strokeOpacity={strokeOpacity}
          className="first:fill-muted last:fill-background"
          polarRadius={[86, 74]} // 바깥쪽 원과 안쪽 원의 반지름
        />

        {/* 바 그리기 */}
        <RadialBar
          dataKey="value"
          background
          cornerRadius={10}
          isAnimationActive={isAnimationActive}
          animationBegin={animationBegin}
          animationDuration={animationDuration}
        />

        {/* 가운데 텍스트 */}
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={(viewBox.cx || 0) + moveTopTSpanX} // 중심 값의 x축 이동
                      y={(viewBox.cy || 0) - moveTopTSpanY} // 중심 값의 y축 이동
                      className={topTSpanClassName} // 중심 값 스타일
                    >
                      {topTSpanText ||
                        refactoredData[0]?.value.toLocaleString()}
                    </tspan>
                    <tspan
                      x={(viewBox.cx || 0) + moveBottomTSpanX} // 중심 텍스트 설명의 x축 이동
                      y={(viewBox.cy || 0) + 24 - moveBottomTSpanY} // 중심 텍스트 설명의 y축 이동
                      className={bottomTSpanClassName} // 중심 텍스트 설명 스타일
                    >
                      {bottomTSpanText ||
                        `${refactoredData[0]?.barPercentage.toFixed(0)}%`}
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
};

export default CMRadialChart;
