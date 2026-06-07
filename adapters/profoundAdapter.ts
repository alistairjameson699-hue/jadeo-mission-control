import type { DashboardAdapter } from "@/adapters/types";
import { mockAdapter } from "@/adapters/mockAdapter";

export const profoundAdapter: DashboardAdapter = {
  name: "Profound",
  async getDashboardData(clientId, options) {
    // Reserved for authorized server-side Profound API/export integration.
    // Do not expose Profound keys or raw fields to the browser. Map Profound data
    // into DashboardData first, then return it through this adapter contract.
    return mockAdapter.getDashboardData(clientId, options);
  }
};
