import { TrendingUp } from "lucide-react";
import type { MindshareScore } from "@/types/dashboard";
import { DataSourceBadge } from "@/components/dashboard/DataSourceBadge";

export function MindshareScoreFrame({ score }: { score: MindshareScore }) {
  return (
    <div className="grid grid-cols-[220px_1fr] gap-7">
      <div className="relative flex h-56 w-56 items-center justify-center rounded-full border-[18px] border-jadeo-green/20 shadow-glow">
        <div
          className="absolute inset-[-18px] rounded-full"
          style={{
            background:
              "conic-gradient(#36F48B 0deg 245deg, rgba(255,255,255,0.08) 245deg 360deg)",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 18px), black 0)"
          }}
        />
        <div className="text-center">
          <p className="text-7xl font-semibold text-jadeo-green">{score.currentScore}</p>
          <p className="mt-1 text-sm text-jadeo-muted">/100</p>
          <p className="mt-2 text-sm text-white">当前得分</p>
        </div>
      </div>
      <div className="flex flex-col justify-center border-l border-white/10 pl-6">
        <DataSourceBadge source={score.dataSource} reviewStatus={score.reviewStatus} />
        <div className="mt-8 space-y-6">
          <div>
            <p className="text-sm text-jadeo-muted">上月得分</p>
            <p className="mt-2 text-3xl text-white">{score.lastMonthScore}</p>
          </div>
          <div>
            <p className="text-sm text-jadeo-muted">本月得分</p>
            <p className="mt-2 text-3xl text-white">{score.currentScore}</p>
          </div>
          <div>
            <p className="text-sm text-jadeo-muted">提升幅度</p>
            <p className="mt-2 flex items-center gap-2 text-2xl text-jadeo-green">
              <TrendingUp className="h-5 w-5" />+ {score.growth}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
