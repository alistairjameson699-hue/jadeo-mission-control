import type { DashboardAdapter } from "@/adapters/types";

export const profoundAdapter: DashboardAdapter = {
  name: "Profound",
  async getDashboardData(clientId) {
    throw new Error(
      `Profound adapter is reserved for authorized server-side integration. clientId=${clientId}`
    );
  }
};
