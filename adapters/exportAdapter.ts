import type { DashboardAdapter } from "@/adapters/types";
import { mockAdapter } from "@/adapters/mockAdapter";

export const exportAdapter: DashboardAdapter = {
  name: "Export",
  async getDashboardData(clientId, options) {
    // Placeholder: future CSV/JSON export parsing should map source files into DashboardData here.
    // Frontend components should never know the original column names.
    return mockAdapter.getDashboardData(clientId);
  }
};
