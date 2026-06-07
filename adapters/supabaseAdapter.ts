import type { DashboardAdapter } from "@/adapters/types";
import { mockAdapter } from "@/adapters/mockAdapter";

export const supabaseAdapter: DashboardAdapter = {
  name: "Supabase",
  async getDashboardData(clientId, options) {
    // Reserved for a future Jadeo-owned normalized database layer.
    // Supabase rows should be converted to DashboardData before reaching UI components.
    return mockAdapter.getDashboardData(clientId, options);
  }
};
