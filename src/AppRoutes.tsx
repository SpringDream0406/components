import { Route, Routes } from "react-router-dom";
import { Chart } from "@/chart_js/Chart";
import {
  areaChartProps,
  barChartProps,
  lineChartProps,
  pieChartProps,
  radarChartProps,
} from "@/chart_js/example.data";

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
    </Routes>
  );
};

export default AppRoutes;
