import type { DashboardData } from "@/types/dashboard";

export type DashboardSource = "mock" | "manual" | "export" | "profound" | "supabase";

export type DashboardAdapterOptions = {
  source?: DashboardSource;
};

export type DashboardAdapter = {
  name: "Profound" | "Export" | "Manual" | "Mock" | "Supabase";
  getDashboardData: (clientId: string, options?: DashboardAdapterOptions) => Promise<DashboardData>;
};
