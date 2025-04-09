import { Route, Routes } from "react-router-dom";
import { Chart } from "@/shared/ui/Chart";
import {
  areaChartProps,
  barChartProps,
  lineChartProps,
  pieChartProps,
  radarChartProps,
} from "@/shared/data/chart.example.data/";
import ChartWithTable from "./shared/ui/ChartWithTable";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Home Route */}
      <Route path="/" element={<div>홈 페이지</div>} />

      {/* Chart Routes */}
      <Route path="/area-chart" element={<Chart {...areaChartProps} />} />
      <Route path="/bar-chart" element={<Chart {...barChartProps} />} />
      <Route path="/line-chart" element={<Chart {...lineChartProps} />} />
      <Route path="/radar-chart" element={<Chart {...radarChartProps} />} />
      <Route path="/pie-chart" element={<Chart {...pieChartProps} />} />

      {/* ChartWithTable Routes */}
      <Route path="/area-ct" element={<ChartWithTable {...areaChartProps} />} />
      <Route path="/bar-ct" element={<ChartWithTable {...barChartProps} />} />
      <Route path="/line-ct" element={<ChartWithTable {...lineChartProps} />} />
      <Route
        path="/radar-ct"
        element={<ChartWithTable {...radarChartProps} />}
      />
      <Route path="/pie-ct" element={<ChartWithTable {...pieChartProps} />} />
    </Routes>
  );
};

export default AppRoutes;
