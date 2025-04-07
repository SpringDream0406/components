import { Chart } from "./Chart";
import { TBasicCustomChartConfig, TChartProps } from "./chart/chart.type";
import DataTable from "./DataTable";

const ChartWithTable = <TCustomConfig extends TBasicCustomChartConfig>({
  chartData,
  chartConfig,
  customChartConfig,
}: TChartProps<TCustomConfig>) => {
  const chartProps = {
    chartData,
    chartConfig,
    customChartConfig,
  };

  // 색상 매핑 함수
  const getColorForKey = (key: string, index: number): string => {
    // 1. chartConfig에서 색상 확인
    if (chartConfig?.[key]?.color) {
      return chartConfig[key].color;
    }

    // 2. customChartConfig.theme에서 색상 확인
    if (customChartConfig?.theme && customChartConfig.theme[index]) {
      return customChartConfig.theme[index];
    }

    // 3. 기본 색상
    return "#CCCCCC"; // 회색 (기본값)
  };

  // 컬럼 정의
  const columns = [
    {
      accessorKey: "label",
      header: "Label",
    },
    ...Object.keys(chartData.data[0])
      .filter((key) => key !== "label") // label 필드는 제외
      .map((key, index) => ({
        accessorKey: key,
        header: () => (
          // 함수로 정의
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {/* 색상 원(circle) */}
            <div
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: getColorForKey(key, index), // 동적으로 색상 가져오기
                borderRadius: "50%",
              }}
            />
            {/* 헤더 텍스트 */}
            <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
          </div>
        ),
      })),
  ];

  // 테이블 데이터와 컬럼 정의
  const tableProps = {
    data: chartData.data,
    columns,
  };

  return (
    <>
      <Chart {...chartProps} />
      <DataTable {...tableProps} />
    </>
  );
};

export default ChartWithTable;
