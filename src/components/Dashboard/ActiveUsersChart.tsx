import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartDataPoint } from "@/types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface ActiveUsersChartProps {
  data: ChartDataPoint[];
  isLoading?: boolean;
}

export function ActiveUsersChart({
  data,
  isLoading = false,
}: ActiveUsersChartProps) {
  return (
    <Card className="col-span-3 lg:col-span-1">
      <CardHeader>
        <CardTitle>Active Users Trend</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        {isLoading ? (
          <div className="h-full w-full bg-muted rounded animate-pulse flex items-center justify-center">
            <p className="text-muted-foreground">Loading chart data...</p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="timestamp"
                tick={{ fontSize: 10 }}
                axisLine={{ className: "stroke-muted" }}
                tickLine={{ className: "stroke-muted" }}
                interval={Math.ceil(data.length / 5) - 1}
              />
              <YAxis
                tick={{ fontSize: 10 }}
                axisLine={{ className: "stroke-muted" }}
                tickLine={{ className: "stroke-muted" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                  color: "hsl(var(--card-foreground))",
                }}
                itemStyle={{ color: "hsl(var(--card-foreground))" }}
                labelStyle={{ color: "hsl(var(--card-foreground))" }}
              />
              <Bar
                dataKey="value"
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
                isAnimationActive={true}
                animationDuration={500}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
