
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import KPICard from "./components/KPICard";
import RevenueChart from "./components/RevenueChart";
import ProtectedRoute from "./components/ProtectedRoute";

import Analytics from "./pages/Analytics";
import Orders from "./pages/Orders";
import Team from "./pages/Team";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

import useLiveMetrics from "./hooks/useLiveMetrics";
import "./App.css";

const kpiData = [
  { title: "Total Revenue", value: "$128,450", change: "+12.5%" },
  { title: "Total Orders", value: "1,248", change: "+8.2%" },
  { title: "Active Customers", value: "3,842", change: "+15.3%" },
  { title: "Conversion Rate", value: "4.8%", change: "+2.1%" }
];

function Dashboard() {
  const { metrics, isLive, setIsLive } = useLiveMetrics();

  return (
    <>
      <h1>Dashboard Overview</h1>
      <p>Welcome to PulseOps Enterprise Portal.</p>

      <section className="kpi-grid">
        {kpiData.map((kpi) => (
          <KPICard
            key={kpi.title}
            title={kpi.title}
            value={kpi.value}
            change={kpi.change}
          />
        ))}
      </section>

      <RevenueChart
        metrics={metrics}
        isLive={isLive}
        setIsLive={setIsLive}
      />
    </>
  );
}

function DashboardLayout() {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="content-wrapper">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/team" element={<Team />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
