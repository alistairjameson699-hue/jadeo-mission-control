import type { CognitiveAsset } from "@/types/dashboard";

const statusStyles = {
  Occupied: "text-jadeo-green bg-jadeo-green/10",
  Contested: "text-jadeo-warning bg-jadeo-warning/10",
  Deploying: "text-blue-400 bg-blue-400/10",
  Pending: "text-jadeo-muted bg-white/5"
};

export function AssetsFrame({ assets }: { assets: CognitiveAsset[] }) {
  return (
    <div className="space-y-3">
      {assets.map((asset) => (
        <div
          key={asset.assetName}
          className="grid grid-cols-[1fr_110px_70px] items-center gap-4 border-b border-white/10 py-3 last:border-b-0"
        >
          <div>
            <p className="text-sm font-medium text-white">{asset.assetName}</p>
            <p className="mt-1 text-xs text-jadeo-muted">{asset.concept}</p>
          </div>
          <span className={`rounded-md px-2 py-1 text-xs ${statusStyles[asset.status]}`}>
            {asset.status}
          </span>
          <p className="text-right text-lg text-white">{asset.recommendationRate}%</p>
        </div>
      ))}
    </div>
  );
}
