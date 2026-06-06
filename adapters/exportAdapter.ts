import type { DashboardAdapter } from "@/adapters/types";
import { mockAdapter } from "@/adapters/mockAdapter";

export const exportAdapter: DashboardAdapter = {
  name: "Export",
  async getDashboardData(clientId) {
    return mockAdapter.getDashboardData(clientId);
  }
};
