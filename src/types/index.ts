
export interface Data {
  timestamp: string;
  active_users: number;
  page_views: number;
  avg_session_duration: number;
}

export interface ChartDataPoint {
  timestamp: string;
  value: number;
}

export interface ChartData {
  pageViews: ChartDataPoint[];
  activeUsers: ChartDataPoint[];
  avgSessionDuration: ChartDataPoint[];
}
