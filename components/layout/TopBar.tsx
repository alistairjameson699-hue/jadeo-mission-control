import { Bell, CalendarDays, ChevronDown } from "lucide-react";
import { formatDateTime } from "@/lib/format";
import type { Client, Project } from "@/types/dashboard";

export function TopBar({
  client,
  project,
  syncedAt
}: {
  client: Client;
  project: Project;
  syncedAt: string;
}) {
  return (
    <header className="flex items-center justify-between gap-6">
      <div>
        <h1 className="text-3xl font-semibold uppercase text-white">{project.terminalName}</h1>
        <p className="mt-1 text-sm text-jadeo-muted">{project.subtitle}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/78">
          <CalendarDays className="h-4 w-4 text-jadeo-green" />
          <span title={`Updated ${formatDateTime(syncedAt)}`}>{project.dateRangeLabel}</span>
          <ChevronDown className="h-4 w-4 text-jadeo-muted" />
        </div>
        <div className="relative rounded-lg border border-white/10 bg-white/[0.03] p-3">
          <Bell className="h-5 w-5 text-white/76" />
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-jadeo-green px-1 text-[10px] font-bold text-black">
            3
          </span>
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-jadeo-green/15 text-xs font-bold text-jadeo-green">
            {client.logoLabel}
          </div>
          <span className="text-sm text-white">{client.brandDisplayName}</span>
          <ChevronDown className="h-4 w-4 text-jadeo-muted" />
        </div>
      </div>
    </header>
  );
}
