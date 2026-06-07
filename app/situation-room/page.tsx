import { AppShell } from "@/components/layout/AppShell";
import { TopBar } from "@/components/layout/TopBar";
import { AssetsFrame } from "@/components/dashboard/AssetsFrame";
import { EvidenceFeedFrame } from "@/components/dashboard/EvidenceFeedFrame";
import { MindshareScoreFrame } from "@/components/dashboard/MindshareScoreFrame";
import { RankingFrame } from "@/components/dashboard/RankingFrame";
import { SectionCard } from "@/components/dashboard/SectionCard";
import { TrendFrame } from "@/components/dashboard/TrendFrame";
import { getDashboardData } from "@/lib/dashboard";

export default async function SituationRoomPage({
  searchParams
}: {
  searchParams?: { clientId?: string };
}) {
  const data = await getDashboardData(searchParams?.clientId);
  const summaryMetrics = data.summaryMetrics ?? [];

  return (
    <AppShell client={data.client}>
      <TopBar client={data.client} project={data.project} syncedAt={data.mindshareScore.syncedAt} />
      <div className="mt-7 grid grid-cols-[1fr_1.1fr_0.9fr] gap-5">
        <SectionCard>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">AI Mindshare Score</h2>
            <span className="text-xs text-jadeo-muted">{data.mindshareScore.status}</span>
          </div>
          <MindshareScoreFrame score={data.mindshareScore} />
        </SectionCard>
        <SectionCard>
          <h2 className="mb-5 text-lg font-semibold text-white">AI Recommendation Trend</h2>
          <TrendFrame points={data.recommendationTrends} />
        </SectionCard>
        <SectionCard>
          <h2 className="mb-7 text-lg font-semibold text-white">Industry Ranking</h2>
          <RankingFrame rankings={data.industryRankings} />
        </SectionCard>
      </div>
      <div className="mt-5 grid grid-cols-[0.78fr_1.35fr] gap-5">
        <SectionCard>
          <h2 className="mb-5 text-lg font-semibold text-white">Core Cognitive Assets</h2>
          <AssetsFrame assets={data.cognitiveAssets} />
        </SectionCard>
        <SectionCard>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">
              Live AI Evidence Feed
            </h2>
            <span className="text-sm text-jadeo-green">View all</span>
          </div>
          <EvidenceFeedFrame evidence={data.evidenceFeed} />
        </SectionCard>
      </div>
      <div className="mt-5 rounded-xl border border-jadeo-green/20 bg-jadeo-green/10 px-7 py-6">
       <div className="mt-5 rounded-xl border border-jadeo-green/20 bg-jadeo-green/10 px-7 py-6">
  <div className="grid grid-cols-4 gap-8 text-sm">
    {summaryMetrics.map((metric) => (
      <div key={metric.label}>
        <p className="text-jadeo-muted">{metric.label}</p>
        <p className="mt-2 text-2xl text-white">{metric.value}</p>
        {metric.delta ? (
          <p className="mt-1 text-xs text-jadeo-green">{metric.delta}</p>
        ) : null}
      </div>
    ))}
  </div>
</div>
        </div>
      </div>
    </AppShell>
  );
}
