
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

function RevenueChart({ metrics, isLive, setIsLive }) {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <div>
          <h2>Revenue Analytics</h2>
          <p>Monthly revenue performance</p>
        </div>

        <button
          className={`live-button ${isLive ? "active" : ""}`}
          onClick={() => setIsLive(!isLive)}
        >
          <span className="live-dot"></span>
          {isLive ? "Live · Pause" : "Paused · Resume"}
        </button>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={metrics}>
            <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="var(--chart-line)"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RevenueChart;
