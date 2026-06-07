import type { DashboardAdapter } from "@/adapters/types";
import { mockAdapter } from "@/adapters/mockAdapter";

export const manualAdapter: DashboardAdapter = {
  name: "Manual",
  async getDashboardData(clientId, options) {
    // Placeholder: future manual input rows should be normalized into DashboardData here.
    // The UI remains unchanged because it only reads the standard dashboard model.
    return mockAdapter.getDashboardData(clientId);
  }
};
