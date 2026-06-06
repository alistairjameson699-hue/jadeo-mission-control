"use client";

import { ExternalLink, Maximize2, X } from "lucide-react";
import { useState } from "react";
import type { AiEvidence } from "@/types/dashboard";
import { DataSourceBadge } from "@/components/dashboard/DataSourceBadge";

const platformTone = {
  ChatGPT: "text-jadeo-green",
  Claude: "text-jadeo-warning",
  Gemini: "text-blue-400",
  Perplexity: "text-cyan-300"
};

const statusTone = {
  Positive: "border-jadeo-green/30 bg-jadeo-green/10 text-jadeo-green",
  Neutral: "border-jadeo-warning/30 bg-jadeo-warning/10 text-jadeo-warning",
  Negative: "border-jadeo-risk/30 bg-jadeo-risk/10 text-jadeo-risk",
  Missing: "border-white/15 bg-white/5 text-jadeo-muted"
};

export function EvidenceFeedFrame({ evidence }: { evidence: AiEvidence[] }) {
  const [selected, setSelected] = useState<AiEvidence | null>(null);

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {evidence.slice(0, 6).map((item) => (
          <article
            key={item.id}
            className="group rounded-lg border border-white/10 bg-white/[0.035] p-4 transition hover:border-jadeo-green/30 hover:bg-jadeo-green/[0.055]"
          >
            <div className="flex items-center justify-between">
              <p className={`text-sm font-semibold ${platformTone[item.platform]}`}>{item.platform}</p>
              <p className="text-xs text-jadeo-muted">{item.evidenceDate}</p>
            </div>
            <p className="mt-4 min-h-10 text-sm leading-5 text-white">Q: {item.prompt}</p>
            <div className="mt-4 rounded-lg border border-white/10 bg-black/30 p-3">
              <p className="min-h-12 text-xs leading-5 text-white/74">{item.answerSummary}</p>
              <button
                type="button"
                onClick={() => setSelected(item)}
                className="relative mt-4 block w-full overflow-hidden rounded-md border border-jadeo-green/20 bg-black/40 text-left"
                aria-label={`Open ${item.platform} evidence screenshot`}
              >
                <img
                  src={item.screenshotUrl}
                  alt={`${item.platform} evidence for ${item.prompt}`}
                  className="h-32 w-full object-cover opacity-90 transition duration-200 group-hover:scale-[1.015] group-hover:opacity-100"
                />
                <span className="absolute right-2 top-2 rounded-md border border-white/10 bg-black/70 p-1.5 text-white">
                  <Maximize2 className="h-3.5 w-3.5" />
                </span>
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between gap-3 text-xs">
              <span className={`rounded-full border px-2.5 py-1 ${statusTone[item.recommendationStatus]}`}>
                {item.recommendationStatus}
              </span>
              <span className="flex items-center gap-1 text-jadeo-muted">
                {item.rankingPosition}
                <ExternalLink className="h-3 w-3" />
              </span>
            </div>
            <div className="mt-3">
              <DataSourceBadge source={item.dataSource} reviewStatus={item.reviewStatus} />
            </div>
          </article>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/82 p-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-5xl overflow-hidden rounded-xl border border-white/12 bg-[#080D0B] shadow-glow">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className={`text-sm font-semibold ${platformTone[selected.platform]}`}>
                  {selected.platform} Evidence
                </p>
                <p className="mt-1 text-xs text-jadeo-muted">{selected.prompt}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-2 text-white/80 hover:text-white"
                aria-label="Close screenshot"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="bg-black p-5">
              <img
                src={selected.screenshotUrl}
                alt={`${selected.platform} enlarged evidence screenshot`}
                className="mx-auto max-h-[70vh] w-full rounded-lg border border-white/10 object-contain"
              />
            </div>
            <div className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4 text-sm">
              <p className="text-white/78">{selected.answerSummary}</p>
              <span className={`shrink-0 rounded-full border px-3 py-1 ${statusTone[selected.recommendationStatus]}`}>
                {selected.recommendationStatus} / {selected.rankingPosition}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
