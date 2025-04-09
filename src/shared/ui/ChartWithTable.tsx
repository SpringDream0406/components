import { Chart } from "./Chart";
import { TBasicCustomChartConfig, TChartProps } from "./chart/chart.type";
import DataTable from "./DataTable";
import { colorTheme } from "../data/colorTheme"; // colorTheme 가져오기

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
    if (chartConfig?.[key]?.color) {
      return chartConfig[key].color;
    }
    if (customChartConfig?.theme && customChartConfig.theme[index]) {
      return customChartConfig.theme[index];
    }
    // theme이 없을 경우 colorTheme.rootColors_5를 순서대로 사용
    return colorTheme.rootColors_5[index % colorTheme.rootColors_5.length];
  };

  // PieChart 전용 컬럼 정의
  const pieColumns = [
    {
      accessorKey: "label",
      header: "Label",
      cell: ({ row }: { row: any }) => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: getColorForKey(row.original.label, row.index),
              borderRadius: "50%",
            }}
          />
          <span>{row.original.label}</span>
        </div>
      ),
    },
    ...Object.keys(chartData.data[0])
      .filter((key) => key !== "label")
      .map((key) => ({
        accessorKey: key,
        header: key.charAt(0).toUpperCase() + key.slice(1),
      })),
  ];

  // 기본 컬럼 정의
  const defaultColumns = [
    {
      accessorKey: "label",
      header: "Label",
    },
    ...Object.keys(chartData.data[0])
      .filter((key) => key !== "label")
      .map((key, index, array) => ({
        accessorKey: key,
        header: () => (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {chartData.type !== "radial" || index !== array.length - 1 ? ( // 마지막 헤더에서 색상 제외
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: getColorForKey(key, index),
                  borderRadius: "50%",
                }}
              />
            ) : null}
            <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
          </div>
        ),
      })),
  ];

  // 테이블 데이터와 컬럼 정의
  const tableProps = {
    data: chartData.data,
    columns: chartData.type === "pie" ? pieColumns : defaultColumns, // PieChart와 기본 컬럼 분리
    className: customChartConfig?.table?.tableClassName || "", // 테이블 클래스 적용
  };

  // 레이아웃 설정: 가로 또는 세로
  const isHorizontalLayout = customChartConfig?.table?.layout === "horizontal";

  return (
    <div
      className={`flex ${
        isHorizontalLayout ? "flex-row" : "flex-col"
      } items-center justify-center gap-4`}
    >
      <div className="flex-shrink-0">
        <Chart {...chartProps} />
      </div>
      {customChartConfig?.table?.showTable && (
        <div className="flex-shrink-0">
          <DataTable {...tableProps} />
        </div>
      )}
    </div>
  );
};

export default ChartWithTable;
