import { defaultDemoClientId, demoDashboards } from "@/data/demo-dashboard";
import type { DashboardAdapter } from "@/adapters/types";

export const mockAdapter: DashboardAdapter = {
  name: "Mock",
  async getDashboardData(clientId = defaultDemoClientId) {
    const dashboard = demoDashboards[clientId];

    if (!dashboard) {
      return demoDashboards[defaultDemoClientId];
    }

    return dashboard;
  }
};
