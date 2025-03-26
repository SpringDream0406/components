import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { TChartProps } from "@/shared/ui/chart/chart.type";
import { Chart } from "@/shared/ui/chart/Chart";
import {
  barChartConfig,
  barChartData,
  customBarChartConfig,
} from "@/shared/data/barChart.example.data";
import { pieChartData } from "./shared/data/pieChart.example.data";

function App() {
  const barChartProps: TChartProps = {
    chartData: barChartData,
    chartConfig: barChartConfig,
    customChartConfig: customBarChartConfig,
  };

  const pieChartProps: TChartProps = {
    chartData: pieChartData,
    chartConfig: {}, // 파이 차트에 대한 설정
    customChartConfig: {}, // 파이 차트에 대한 커스텀 설정
  };

  const navItems = [
    { path: "/", label: "홈 페이지" },
    { path: "/bar-chart", label: "Bar Chart" },
    { path: "/pie-chart", label: "Pie Chart" },
  ];

  return (
    <Router>
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className="text-white hover:text-gray-400">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4">
        <Routes>
          <Route path="/bar-chart" element={<Chart {...barChartProps} />} />
          <Route path="/pie-chart" element={<Chart {...pieChartProps} />} />
          <Route path="/" element={<div>홈 페이지</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
