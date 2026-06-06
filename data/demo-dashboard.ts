import type { AiEvidence, DashboardData, Platform } from "@/types/dashboard";

const baseMeta = {
  dataSource: "Mock" as const,
  accessMethod: "demo_seed" as const,
  syncedAt: "2026-06-10T10:30:00+08:00",
  updatedAt: "2026-06-10T10:30:00+08:00",
  reviewStatus: "approved" as const,
  reviewer: "Jadeo Ops",
  confidenceLevel: "medium" as const,
  freshnessStatus: "demo" as const
};

const platforms: Platform[] = ["ChatGPT", "Claude", "Gemini", "Perplexity"];

const trendDates = [
  "2026-05-12",
  "2026-05-17",
  "2026-05-22",
  "2026-05-27",
  "2026-06-01",
  "2026-06-06",
  "2026-06-10"
];

const trendSeeds: Record<Platform, number[]> = {
  ChatGPT: [42, 48, 52, 56, 61, 64, 68],
  Claude: [35, 39, 42, 48, 53, 57, 61],
  Gemini: [28, 31, 35, 40, 45, 49, 52],
  Perplexity: [31, 34, 38, 43, 48, 52, 56]
};

export const demoDashboards: Record<string, DashboardData> = {
  "hisense-demo": {
    client: {
      id: "hisense-demo",
      clientName: "Hisense Demo Account",
      brandName: "Hisense",
      brandDisplayName: "Hisense 海信",
      industry: "Consumer Electronics",
      logoLabel: "Hisense",
      createdAt: "2026-06-01T09:00:00+08:00"
    },
    project: {
      id: "project_hisense_mission_control_demo",
      clientId: "hisense-demo",
      projectName: "AI Cognitive Asset Growth Demo",
      terminalName: "Situation Room",
      subtitle: "AI Cognitive Asset Command Center",
      dateRangeLabel: "2026/06/01 - 2026/06/10"
    },
    mindshareScore: {
      ...baseMeta,
      sourceMetric: "visibility_score",
      sourceRecordId: "mock_mindshare_hisense_001",
      currentScore: 68,
      lastMonthScore: 52,
      growth: 16,
      status: "Growing",
      date: "2026-06-10"
    },
    recommendationTrends: platforms.flatMap((platform) =>
      trendSeeds[platform].map((recommendationRate, index) => ({
        ...baseMeta,
        sourceMetric: "query_visibility",
        sourceRecordId: `mock_hisense_trend_${platform.toLowerCase()}_${index + 1}`,
        date: trendDates[index],
        platform,
        recommendationRate
      }))
    ),
    industryRankings: [
      ["Samsung", 1, 72, 4, false],
      ["Hisense", 2, 68, 16, true],
      ["LG", 3, 43, 6, false],
      ["Sony", 4, 39, 3, false],
      ["TCL", 5, 35, 2, false]
    ].map(([brandName, rank, recommendationRate, change, isClientBrand]) => ({
      ...baseMeta,
      sourceMetric: "share_of_voice",
      sourceRecordId: `mock_hisense_ranking_${String(brandName).toLowerCase()}`,
      brandName: String(brandName),
      rank: Number(rank),
      recommendationRate: Number(recommendationRate),
      change: Number(change),
      isClientBrand: Boolean(isClientBrand)
    })),
    cognitiveAssets: [
      ["Football Viewing TV", "Football match viewing", "Occupied", 92, ["ChatGPT", "Claude", "Gemini"]],
      ["RGB Mini LED", "RGB Mini LED TV", "Occupied", 85, ["ChatGPT", "Claude", "Gemini"]],
      ["Best Sports TV", "Sports viewing TV", "Contested", 48, ["ChatGPT", "Claude", "Perplexity"]],
      ["Premium Gaming TV", "Premium gaming TV", "Deploying", 25, ["ChatGPT", "Gemini"]],
      ["World Cup Viewing TV", "World Cup viewing TV", "Deploying", 18, ["Claude", "Gemini"]]
    ].map(([assetName, concept, status, recommendationRate, assetPlatforms]) => ({
      ...baseMeta,
      sourceMetric: "prompt_topic_visibility",
      sourceRecordId: `mock_hisense_asset_${String(assetName).toLowerCase().replaceAll(" ", "_")}`,
      assetName: String(assetName),
      concept: String(concept),
      status: status as "Occupied" | "Contested" | "Deploying" | "Pending",
      recommendationRate: Number(recommendationRate),
      platforms: assetPlatforms as Platform[],
      lastUpdated: "2026-06-10"
    })),
    evidenceFeed: ([
      {
        id: "evidence_hisense_chatgpt_football",
        platform: "ChatGPT",
        prompt: "What is the best TV for watching football?",
        answerSummary: "Hisense appears as a recommended brand for football viewing and motion clarity.",
        recommendationStatus: "Positive",
        rankingPosition: "Top 3",
        screenshotUrl: "/evidence/chatgpt-football-tv.svg",
        evidenceDate: "2026-06-10"
      },
      {
        id: "evidence_hisense_claude_mini_led",
        platform: "Claude",
        prompt: "Best Mini LED TV in 2026?",
        answerSummary: "Hisense is cited as a high-value Mini LED choice with strong brightness.",
        recommendationStatus: "Positive",
        rankingPosition: "Top 3",
        screenshotUrl: "/evidence/claude-mini-led.svg",
        evidenceDate: "2026-06-10"
      },
      {
        id: "evidence_hisense_gemini_sports",
        platform: "Gemini",
        prompt: "Which TV is best for sports viewing?",
        answerSummary: "Hisense is mentioned as a competitive sports TV option.",
        recommendationStatus: "Neutral",
        rankingPosition: "Mentioned",
        screenshotUrl: "/evidence/gemini-sports-tv.svg",
        evidenceDate: "2026-06-09"
      },
      {
        id: "evidence_hisense_perplexity_rgb",
        platform: "Perplexity",
        prompt: "Best RGB Mini LED TVs for premium home theater?",
        answerSummary: "Hisense RGB Mini LED appears in the recommendation set.",
        recommendationStatus: "Positive",
        rankingPosition: "Top 5",
        screenshotUrl: "/evidence/perplexity-rgb-mini-led.svg",
        evidenceDate: "2026-06-09"
      },
      {
        id: "evidence_hisense_chatgpt_gaming",
        platform: "ChatGPT",
        prompt: "Best premium gaming TV alternatives to Samsung?",
        answerSummary: "Hisense is referenced as a value-oriented alternative, but not the leading recommendation.",
        recommendationStatus: "Neutral",
        rankingPosition: "Mentioned",
        screenshotUrl: "/evidence/chatgpt-gaming-tv.svg",
        evidenceDate: "2026-06-08"
      },
      {
        id: "evidence_hisense_claude_world_cup",
        platform: "Claude",
        prompt: "What TV should I buy for watching the World Cup?",
        answerSummary: "Hisense is recommended for large-screen sports viewing and value.",
        recommendationStatus: "Positive",
        rankingPosition: "Top 3",
        screenshotUrl: "/evidence/claude-world-cup-tv.svg",
        evidenceDate: "2026-06-08"
      }
    ] satisfies Array<
      Pick<
        AiEvidence,
        | "id"
        | "platform"
        | "prompt"
        | "answerSummary"
        | "recommendationStatus"
        | "rankingPosition"
        | "screenshotUrl"
        | "evidenceDate"
      >
    >).map((item, index) => ({
      ...baseMeta,
      sourceMetric: "manual_evidence_review",
      sourceRecordId: `mock_hisense_evidence_${index + 1}`,
      ...item
    }))
  }
};

export const defaultDemoClientId = "hisense-demo";
