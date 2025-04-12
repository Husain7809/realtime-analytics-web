import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface SessionDurationGaugeProps {
  value: number;
  isLoading?: boolean;
}

export function SessionDurationGauge({
  value,
  isLoading = false,
}: SessionDurationGaugeProps) {
  const percentage = Math.min(100, (value / 10) * 100);

  // Determine color based on value
  const getColorClass = (value: number) => {
    if (value < 3) return "bg-red-500";
    if (value < 6) return "bg-orange-400";
    return "bg-green-500";
  };

  return (
    <Card className="col-span-3 lg:col-span-2">
      <CardHeader>
        <CardTitle>Average Session Duration</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-2">
            <div className="h-4 w-full bg-muted rounded animate-pulse" />
            <div className="h-10 w-1/2 bg-muted rounded animate-pulse mx-auto" />
          </div>
        ) : (
          <div className="space-y-4">
            <Progress
              value={percentage}
              className="h-2 transition-all animate-value-change"
              indicatorClassName={cn(getColorClass(value))}
            />
            <div className="text-center">
              <span className="text-4xl font-bold animate-value-change">
                {value}
              </span>
              <span className="text-2xl ml-2 text-muted-foreground">min</span>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Poor (0-3 min)</span>
              <span>Average (3-6 min)</span>
              <span>Good (6+ min)</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
