import type { IndustryRanking } from "@/types/dashboard";

function percent(value: number) {
  return `${value}%`;
}

export function RankingFrame({ rankings }: { rankings: IndustryRanking[] }) {
  return (
    <div className="space-y-5">
      {rankings.map((item) => (
        <div key={item.brandName} className="grid grid-cols-[28px_110px_1fr_48px] items-center gap-3">
          <span className="text-lg text-white">{item.rank}</span>
          <span className={item.isClientBrand ? "font-semibold text-jadeo-green" : "text-white/80"}>
            {item.brandName}
          </span>
          <div className="h-2 rounded-full bg-white/10">
            <div
              className={`h-2 rounded-full ${
                item.isClientBrand ? "bg-jadeo-green" : "bg-white/45"
              }`}
              style={{ width: `${item.recommendationRate}%` }}
            />
          </div>
          <span className="text-right text-sm text-white">{percent(item.recommendationRate)}</span>
        </div>
      ))}
    </div>
  );
}
