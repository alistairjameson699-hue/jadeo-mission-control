import {
  BrainCircuit,
  FileText,
  Home,
  RadioTower,
  Settings,
  ShieldAlert
} from "lucide-react";
import { JadeoMark } from "@/components/brand/JadeoMark";
import type { Client } from "@/types/dashboard";

const items = [
  { label: "Situation Room", icon: Home, active: true },
  { label: "Cognitive Assets", icon: BrainCircuit },
  { label: "Live Evidence", icon: RadioTower },
  { label: "Threat Intelligence", icon: ShieldAlert },
  { label: "Executive Reports", icon: FileText },
  { label: "Settings", icon: Settings }
];

export function Sidebar({ client }: { client: Client }) {
  return (
    <aside className="flex h-screen w-[264px] shrink-0 flex-col border-r border-white/10 bg-black/35 px-4 py-7">
      <div className="px-2">
        <JadeoMark />
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-jadeo-green">
          Mission Control
        </p>
      </div>
      <nav className="mt-7 space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition ${
                item.active
                  ? "border border-jadeo-green/25 bg-jadeo-green/10 text-jadeo-green"
                  : "text-white/72 hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </div>
          );
        })}
      </nav>
      <div className="mt-auto rounded-lg border border-white/10 bg-white/[0.035] p-4">
        <p className="text-xs text-jadeo-muted">Current Client</p>
        <p className="mt-3 text-xl font-semibold italic text-jadeo-green">{client.brandName}</p>
        <p className="mt-1 text-sm text-white">{client.industry}</p>
        <div className="my-4 h-px bg-white/10" />
        <p className="text-xs text-jadeo-muted">Client Lead</p>
        <p className="mt-2 text-sm text-white">{client.clientLeadName ?? "Jadeo Client Success"}</p>
      </div>
    </aside>
  );
}
