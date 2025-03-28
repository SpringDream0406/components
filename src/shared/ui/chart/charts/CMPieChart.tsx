import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shared/shadcn/ui/chart";
import { TChartProps, TCustomPieChartConfig } from "../chart.type";
import { colorTheme } from "@/shared/data/colorTheme";

const CMPieChart = ({
  chartData,
  chartConfig = {},
  customChartConfig = {},
}: TChartProps<TCustomPieChartConfig>) => {
  // TCustomPieChartConfig와 TBasicCustomChartConfig에서 필요한 값만 구조 분해 및 기본값 설정
  const {
    chartContainerClassName = "", // 차트 컨테이너의 className || ""
    theme = colorTheme.rootColors_5, // 기본 테마 색상
    animation: {
      isAnimationActive = true, // 애니메이션 on/off
      animationBegin = 0, // 애니메이션 시작 시간
      animationDuration = 500, // 애니메이션 지속 시간
    } = {},
    legend = false, // 범례 on/off,
    pie: {
      innerRadius = 60, // 파이 차트의 내부 반지름
      stroke = undefined, // 파이 차트의 테두리 색상
      strokeWidth = 2, // 파이 차트의 테두리 두께
      opacity = 1, // 파이 차트의 투명도
    } = {},
    TotalValueTspan: {
      totalValueClassName = "fill-foreground text-3xl font-bold", // 중심 값 스타일
      moveValueX = 0, // 중심 값의 x축 이동
      moveValueY = 0, // 중심 값의 y축 이동
    } = {},
    explainTspan: {
      explainClassName = "fill-muted-foreground", // 중심 텍스트 설명 스타일
      text: explainText = "", // 중심 텍스트 설명
      moveExplainX = 0, // 중심 텍스트 설명의 x축 이동
      moveExplainY = 0, // 중심 텍스트 설명의 y축 이동
    } = {},
  } = customChartConfig;

  // 차트 데이터의 총 합계 계산
  const totalValue = React.useMemo(() => {
    return chartData.data.reduce(
      (acc, curr) => acc + (typeof curr.value === "number" ? curr.value : 0),
      0
    );
  }, [chartData.data]);

  // 데이터에 색상 추가
  const dataWithColors = chartData.data.map((key, index) => ({
    ...key,
    fill:
      typeof key.label === "string" // label이 string인지 확인
        ? chartConfig?.[key.label]?.color || theme[index % theme.length]
        : theme[index % theme.length], // label이 string이 아니면 theme 색상 사용
  }));

  //
  return (
    <ChartContainer config={chartConfig} className={chartContainerClassName}>
      <PieChart>
        {/* cursor는 반응없고, content는 숨기는게 best여서 커스텀 안함 */}
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />

        {/* 범례 */}
        {legend && <ChartLegend content={<ChartLegendContent />} />}
        <Pie
          data={dataWithColors}
          dataKey="value"
          nameKey="label"
          innerRadius={innerRadius} // 내부 반지름
          stroke={stroke} // 테두리 색상
          strokeWidth={strokeWidth} // 테두리 두께
          opacity={opacity} // 투명도
          isAnimationActive={isAnimationActive} // 애니메이션 on/off
          animationBegin={animationBegin} // 애니메이션 시작 시간
          animationDuration={animationDuration} // 애니메이션 지속 시간
        >
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
                      x={(viewBox.cx || 0) + moveValueX} // 중심 값의 x축 이동
                      y={(viewBox.cy || 0) - moveValueY} // 중심 값의 y축 이동
                      className={totalValueClassName} // 중심 값 스타일
                    >
                      {totalValue.toLocaleString()}
                    </tspan>
                    <tspan
                      x={(viewBox.cx || 0) + moveExplainX} // 중심 텍스트 설명의 x축 이동
                      y={(viewBox.cy || 0) + 24 - moveExplainY} // 중심 텍스트 설명의 y축 이동
                      className={explainClassName} // 중심 텍스트 설명 스타일
                    >
                      {explainText}
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
};

export default CMPieChart;
