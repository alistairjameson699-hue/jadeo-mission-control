import type { DataSource, ReviewStatus } from "@/types/data-source";

export function DataSourceBadge({
  source,
  reviewStatus
}: {
  source: DataSource;
  reviewStatus: ReviewStatus;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-jadeo-muted">
      <span className="h-1.5 w-1.5 rounded-full bg-jadeo-green" />
      {source} / {reviewStatus}
    </span>
  );
}
