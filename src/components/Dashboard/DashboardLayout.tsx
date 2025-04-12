import { useState, useEffect } from "react";
import { useTrafficData } from "@/hooks/useTrafficData";
import { StatCard } from "./StatCard";
import { PageViewsChart } from "./PageViewsChart";
import { ActiveUsersChart } from "./ActiveUsersChart";
import { SessionDurationGauge } from "./SessionDurationGauge";
import { Users, LineChart, Clock } from "lucide-react";

export function DashboardLayout() {
  const { metricsData, chartData, loading, error } = useTrafficData();
  const [lastUpdateTime, setLastUpdateTime] = useState<string>("");

  // Set last update time
  useEffect(() => {
    if (metricsData) {
      const now = new Date();
      const formattedTime = `${now.getHours().toString().padStart(2, "0")}:${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;
      setLastUpdateTime(formattedTime);
    }
  }, [metricsData]);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Traffic Pulse Monitor
          </h1>
          <p className="text-muted-foreground">
            Real-time analytics dashboard
            {lastUpdateTime && (
              <span className="ml-2 text-xs">
                Last updated: {lastUpdateTime}
              </span>
            )}
          </p>
        </div>
      </div>

      {error ? (
        <div className="rounded-lg border border-destructive bg-destructive/10 p-4 text-destructive">
          {error}
        </div>
      ) : (
        <>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-4">
            <StatCard
              title="Active Users"
              value={metricsData?.active_users || 0}
              icon={<Users className="h-4 w-4" />}
              isLoading={loading}
              className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900"
            />
            <StatCard
              title="Page Views"
              value={metricsData?.page_views || 0}
              icon={<LineChart className="h-4 w-4" />}
              isLoading={loading}
              className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900"
            />
            <StatCard
              title="Avg. Session Duration"
              value={`${metricsData?.avg_session_duration || 0} min`}
              icon={<Clock className="h-4 w-4" />}
              isLoading={loading}
              className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
            <PageViewsChart data={chartData.pageViews} isLoading={loading} />
            <SessionDurationGauge
              value={metricsData?.avg_session_duration || 0}
              isLoading={loading}
            />
            <ActiveUsersChart
              data={chartData.activeUsers}
              isLoading={loading}
            />
          </div>
        </>
      )}
    </div>
  );
}
