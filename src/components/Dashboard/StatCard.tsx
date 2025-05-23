import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  description?: string;
  className?: string;
  isLoading?: boolean;
  trending?: "up" | "down" | "neutral";
}

export function StatCard({
  title,
  value,
  icon,
  description,
  className,
  isLoading = false,
  trending,
}: StatCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-4 w-4 text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="h-9 w-28 bg-muted rounded animate-pulse" />
        ) : (
          <div className="text-2xl font-bold transition-all animate-value-change">
            {value}
            {trending && (
              <span
                className={cn(
                  "ml-2 text-sm",
                  trending === "up" && "text-green-500",
                  trending === "down" && "text-red-500"
                )}
              >
                {trending === "up" ? "↑" : trending === "down" ? "↓" : "•"}
              </span>
            )}
          </div>
        )}
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}
