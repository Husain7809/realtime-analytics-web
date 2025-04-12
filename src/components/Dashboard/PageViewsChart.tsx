import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartDataPoint } from "@/types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface PageViewsChartProps {
  data: ChartDataPoint[];
  isLoading?: boolean;
}

export function PageViewsChart({
  data,
  isLoading = false,
}: PageViewsChartProps) {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Page Views</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        {isLoading ? (
          <div className="h-full w-full bg-muted rounded animate-pulse flex items-center justify-center">
            <p className="text-muted-foreground">Loading chart data...</p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="timestamp"
                tick={{ fontSize: 12 }}
                axisLine={{ className: "stroke-muted" }}
                tickLine={{ className: "stroke-muted" }}
              />
              <YAxis
                tick={{ fontSize: 12 }}
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
              <Line
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{
                  r: 3,
                  className: "fill-primary stroke-background stroke-2",
                }}
                activeDot={{
                  r: 6,
                  className: "fill-primary stroke-background stroke-2",
                }}
                isAnimationActive={true}
                animationDuration={500}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
