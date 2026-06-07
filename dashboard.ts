import { exportAdapter } from "@/adapters/exportAdapter";
import { manualAdapter } from "@/adapters/manualAdapter";
import { mockAdapter } from "@/adapters/mockAdapter";
import { profoundAdapter } from "@/adapters/profoundAdapter";
import { supabaseAdapter } from "@/adapters/supabaseAdapter";
import type { DashboardSource } from "@/adapters/types";
import { defaultDemoClientId } from "@/data/demo-dashboard";

const adapters = {
  mock: mockAdapter,
  manual: manualAdapter,
  export: exportAdapter,
  profound: profoundAdapter,
  supabase: supabaseAdapter
};

/**
 * Single dashboard read boundary for the app.
 *
 * Switching client data should only require changing clientId. Switching data
 * sources should only require changing source. UI components downstream receive
 * the same DashboardData shape regardless of Mock, Manual, Export, Supabase, or
 * Profound origin.
 */
export async function getDashboardData(
  clientId = defaultDemoClientId,
  source: DashboardSource = "mock"
) {
  return adapters[source].getDashboardData(clientId, { source });
}
