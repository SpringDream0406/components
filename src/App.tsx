import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "@/shared/ui/NavBar";
import AppRoutes from "@/AppRoutes";
import { navItems } from "@/shared/data/navItems";

function App() {
  return (
    <Router>
      <NavBar navItems={navItems} />
      <div className="p-4">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
