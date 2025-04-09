import {
  CMAreaChart,
  CMBarChart,
  CMLineChart,
  CMPieChart,
  CMRadarChart,
  DataTable,
} from "./components";
import { colorTheme } from "./colorTheme"; // colorTheme 가져오기

export const Chart = ({ chartData, chartConfig, customChartConfig }) => {
  const chartProps = {
    chartData,
    chartConfig,
    customChartConfig,
  };

  // 차트 렌더링 함수
  const renderChart = () => {
    switch (chartData.type) {
      case "area":
        return <CMAreaChart {...chartProps} />;
      case "bar":
        return <CMBarChart {...chartProps} />;
      case "line":
        return <CMLineChart {...chartProps} />;
      case "pie":
        return <CMPieChart {...chartProps} />;
      case "radar":
        return <CMRadarChart {...chartProps} />;
      default:
        return (
          <>{`type으로 적으신 ${chartData.type}이 Chart 항목에 존재하지 않습니다.`}</>
        );
    }
  };

  // 테이블 관련 기능이 필요 없는 경우 바로 차트만 렌더링
  if (!customChartConfig?.table?.showTable) {
    return <>{renderChart()}</>;
  }

  // 색상 매핑 함수
  const getColorForKey = (key, index) => {
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
      cell: ({ row }) => (
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

  // 차트와 테이블을 함께 렌더링
  return (
    <div
      className={`flex ${
        isHorizontalLayout ? "flex-row" : "flex-col"
      } items-center justify-center gap-4`}
    >
      <div className="flex-shrink-0">{renderChart()}</div>
      {customChartConfig?.table?.showTable && (
        <div className="flex-shrink-0">
          <DataTable {...tableProps} />
        </div>
      )}
    </div>
  );
};

export default Chart;
