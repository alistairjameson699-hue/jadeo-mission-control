import type { DashboardAdapter } from "@/adapters/types";
import { mockAdapter } from "@/adapters/mockAdapter";

export const manualAdapter: DashboardAdapter = {
  name: "Manual",
  async getDashboardData(clientId) {
    return mockAdapter.getDashboardData(clientId);
  }
};
