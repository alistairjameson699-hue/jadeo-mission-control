import { Sidebar } from "@/components/layout/Sidebar";
import type { Client } from "@/types/dashboard";

export function AppShell({ children, client }: { children: React.ReactNode; client: Client }) {
  return (
    <div className="flex min-h-screen bg-[#050807]/80">
      <Sidebar client={client} />
      <main className="thin-scrollbar h-screen flex-1 overflow-y-auto px-8 py-7">
        {children}
      </main>
    </div>
  );
}
