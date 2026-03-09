import { DashboardStatusType, DashboardWidgetSize, DashboardWidgetType } from "./dashboard.types";

export interface DashboardMetricItem {
  label: string;
  value: string;
}

export interface DashboardListItem {
  title: string;
  description: string;
  status: string;
  statusType: DashboardStatusType;
}

export interface DashboardWidgetDefinition {
  id: string;
  title: string;
  description: string;
  type: DashboardWidgetType;
  size: DashboardWidgetSize;
  tourId: string;
  metrics?: DashboardMetricItem[];
  items?: DashboardListItem[];
}
