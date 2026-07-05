import {
  EyeOff,
  Network,
  FileClock,
  PackageX,
  GaugeCircle,
  Hourglass,
  ScanSearch,
  TriangleAlert,
  FileBarChart,
  Lightbulb,
  TrendingUp,
  Gauge,
  type LucideIcon,
} from "lucide-react";

/**
 * Maps the icon keys stored in content/site.ts to concrete Lucide components,
 * so the copy data stays serialisable and the components stay presentational.
 */
export const iconMap: Record<string, LucideIcon> = {
  EyeOff,
  Network,
  FileClock,
  PackageX,
  GaugeCircle,
  Hourglass,
  ScanSearch,
  TriangleAlert,
  FileBarChart,
  Lightbulb,
  TrendingUp,
  Gauge,
};

export function resolveIcon(key: string): LucideIcon {
  return iconMap[key] ?? Gauge;
}
