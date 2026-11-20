
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";

import metrics from "../data/metrics.json";

function Analytics() {
  return (
    <div className="analytics-page">
      <div className="page-heading">
        <h1>Business Analytics</h1>
        <p>Track monthly revenue and order trends.</p>
      </div>

      <div className="analytics-grid">

        <div className="analytics-card">
          <h2>Monthly Revenue</h2>
          <p>Revenue performance over six months</p>

          <div className="analytics-chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={metrics}>
                <CartesianGrid
                  stroke="#334155"
                  strokeDasharray="3 3"
                />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="var(--chart-line)"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="analytics-card">
          <h2>Monthly Orders</h2>
          <p>Number of orders processed each month</p>

          <div className="analytics-chart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={metrics}>
                <CartesianGrid
                  stroke="#334155"
                  strokeDasharray="3 3"
                />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="orders"
                  fill="var(--chart-bar)"
                  radius={[3, 3, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Analytics;
