
function KPICard({ title, value, change }) {
  return (
    <div className="kpi-card">
      <p className="kpi-title">{title}</p>
      <h2 className="kpi-value">{value}</h2>
      <p className="kpi-change">
        {change} <span>vs. last month</span>
      </p>
    </div>
  );
}

export default KPICard;
