import { useState, useEffect, useCallback } from "react";
import { Data, ChartData, ChartDataPoint } from "@/types";
import { formatTimestamp } from "@/lib/utils";
import socket from "@/services/socket";

const MAX_DATA_POINTS = 20;

export const useTrafficData = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [chartData, setChartData] = useState<ChartData>({
    pageViews: [],
    activeUsers: [],
    avgSessionDuration: [],
  });

  const [metricsData, setMetricsData] = useState<Data>(null);
  useEffect(() => {
    socket.on("connect", () => {
      console.warn("Connected to socket server");
    });

    socket.on("metricsUpdate", (data) => {
      setMetricsData(data);
      updateChartData(data);
      setLoading(false);
    });

    socket.on("error", (error) => {
      console.error("Socket error:", error);
      setError("Failed to connect to socket server. Please try again later.");
    });

    socket.on("disconnect", () => {
      console.warn("Disconnected from socket server");
    });
  }, []);

  const updateChartData = useCallback((newData: Data) => {
    setChartData((prev) => {
      const time = formatTimestamp(newData.timestamp);

      // Create new data points
      const pageViewPoint: ChartDataPoint = { timestamp: time, value: newData.page_views };
      const activeUsersPoint: ChartDataPoint = { timestamp: time, value: newData.active_users };
      const avgSessionDurationPoint: ChartDataPoint = { timestamp: time, value: newData.avg_session_duration };

      // Limit the number of data points by removing oldest when we exceed MAX_DATA_POINTS
      const newPageViews = [...prev.pageViews, pageViewPoint].slice(-MAX_DATA_POINTS);
      const newActiveUsers = [...prev.activeUsers, activeUsersPoint].slice(-MAX_DATA_POINTS);
      const newAvgSessionDuration = [...prev.avgSessionDuration, avgSessionDurationPoint].slice(-MAX_DATA_POINTS);

      return {
        pageViews: newPageViews,
        activeUsers: newActiveUsers,
        avgSessionDuration: newAvgSessionDuration,
      };
    });
  }, []);

  return { metricsData, chartData, loading, error };
};
