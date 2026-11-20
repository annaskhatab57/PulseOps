
import { useEffect, useState } from "react";
import initialMetrics from "../data/metrics.json";

function useLiveMetrics() {
  const [metrics, setMetrics] = useState(initialMetrics);
  const [isLive, setIsLive] = useState(() =>
  localStorage.getItem("pulseops-live") !== "false"
);
useEffect(() => {
  function syncLiveSetting() {
    setIsLive(localStorage.getItem("pulseops-live") !== "false");
  }

  window.addEventListener("pulseops-live-changed", syncLiveSetting);

  return () => {
    window.removeEventListener("pulseops-live-changed", syncLiveSetting);
  };
}, []);

  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      setMetrics((previousMetrics) => {
        const updatedMetrics = [...previousMetrics];

        const lastIndex = updatedMetrics.length - 1;
        const lastMetric = updatedMetrics[lastIndex];

        const change = Math.floor(Math.random() * 5000) - 2500;

        updatedMetrics[lastIndex] = {
          ...lastMetric,
          revenue: Math.max(0, lastMetric.revenue + change)
        };

        return updatedMetrics;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isLive]);

  return { metrics, isLive, setIsLive };
}

export default useLiveMetrics;
