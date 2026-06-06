import { mockAdapter } from "@/adapters/mockAdapter";
import { defaultDemoClientId } from "@/data/demo-dashboard";

export async function getDashboardData(clientId = defaultDemoClientId) {
  return mockAdapter.getDashboardData(clientId);
}
