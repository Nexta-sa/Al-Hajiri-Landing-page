import { TrendingUp, Clock, LayoutGrid, type LucideIcon } from "lucide-react";

const map: Record<string, LucideIcon> = { TrendingUp, Clock, LayoutGrid };

/** Resolve a demo-results metric icon key to its Lucide component. */
export function resultsMetricIcon(key: string): LucideIcon {
  return map[key] ?? TrendingUp;
}
