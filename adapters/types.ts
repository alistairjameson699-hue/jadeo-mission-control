import type { DashboardData } from "@/types/dashboard";

export type DashboardAdapter = {
  name: "Profound" | "Export" | "Manual" | "Mock";
  getDashboardData: (clientId: string) => Promise<DashboardData>;
};
