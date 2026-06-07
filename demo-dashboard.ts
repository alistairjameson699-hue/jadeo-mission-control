import type {
  AiEvidence,
  CognitiveAsset,
  DashboardData,
  DashboardSummaryMetric,
  IndustryRanking,
  Platform,
  RecommendationTrendPoint
} from "@/types/dashboard";
import type { DataMeta } from "@/types/data-source";

const baseMeta: DataMeta = {
  dataSource: "Mock",
  accessMethod: "demo_seed",
  syncedAt: "2026-06-10T10:30:00+08:00",
  updatedAt: "2026-06-10T10:30:00+08:00",
  reviewStatus: "approved",
  reviewer: "Jadeo Ops",
  confidenceLevel: "medium",
  freshnessStatus: "demo",
  sourceRecordId: "mock_base"
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

function meta(sourceRecordId: string, sourceMetric: string): DataMeta {
  return {
    ...baseMeta,
    sourceRecordId,
    sourceMetric
  };
}

function buildTrends(
  clientKey: string,
  seeds: Record<Platform, number[]>
): RecommendationTrendPoint[] {
  return platforms.flatMap((platform) =>
    seeds[platform].map((recommendationRate, index) => ({
      ...meta(`mock_${clientKey}_trend_${platform.toLowerCase()}_${index + 1}`, "query_visibility"),
      date: trendDates[index],
      platform,
      recommendationRate
    }))
  );
}

function buildRankings(
  clientKey: string,
  rows: Array<[string, number, number, number, boolean]>
): IndustryRanking[] {
  return rows.map(([brandName, rank, recommendationRate, change, isClientBrand]) => ({
    ...meta(`mock_${clientKey}_ranking_${brandName.toLowerCase().replaceAll(" ", "_")}`, "share_of_voice"),
    brandName,
    rank,
    recommendationRate,
    change,
    isClientBrand
  }));
}

function buildAssets(
  clientKey: string,
  rows: Array<[string, string, CognitiveAsset["status"], number, Platform[]]>
): CognitiveAsset[] {
  return rows.map(([assetName, concept, status, recommendationRate, assetPlatforms]) => ({
    ...meta(
      `mock_${clientKey}_asset_${assetName.toLowerCase().replaceAll(" ", "_")}`,
      "prompt_topic_visibility"
    ),
    assetName,
    concept,
    status,
    recommendationRate,
    platforms: assetPlatforms,
    lastUpdated: "2026-06-10"
  }));
}

function buildEvidence(
  clientKey: string,
  rows: Array<
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
  >
): AiEvidence[] {
  return rows.map((item, index) => ({
    ...meta(`mock_${clientKey}_evidence_${index + 1}`, "manual_evidence_review"),
    ...item
  }));
}

function buildSummary(
  clientKey: string,
  rows: Array<[string, string, string]>
): DashboardSummaryMetric[] {
  return rows.map(([label, value, detail], index) => ({
    ...meta(`mock_${clientKey}_summary_${index + 1}`, "dashboard_summary"),
    label,
    value,
    detail
  }));
}

export const demoDashboards: Record<string, DashboardData> = {
  "hisense-demo": {
    client: {
      id: "hisense-demo",
      clientName: "Hisense Demo Account",
      brandName: "Hisense",
      brandDisplayName: "Hisense 海信",
      industry: "Consumer Electronics",
      logoLabel: "Hisense",
      clientLeadName: "Zhang Wei",
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
      ...meta("mock_hisense_mindshare_001", "visibility_score"),
      currentScore: 68,
      lastMonthScore: 52,
      growth: 16,
      status: "Growing",
      date: "2026-06-10"
    },
    recommendationTrends: buildTrends("hisense", {
      ChatGPT: [42, 48, 52, 56, 61, 64, 68],
      Claude: [35, 39, 42, 48, 53, 57, 61],
      Gemini: [28, 31, 35, 40, 45, 49, 52],
      Perplexity: [31, 34, 38, 43, 48, 52, 56]
    }),
    industryRankings: buildRankings("hisense", [
      ["Samsung", 1, 72, 4, false],
      ["Hisense", 2, 68, 16, true],
      ["LG", 3, 43, 6, false],
      ["Sony", 4, 39, 3, false],
      ["TCL", 5, 35, 2, false]
    ]),
    cognitiveAssets: buildAssets("hisense", [
      ["Football Viewing TV", "Football match viewing", "Occupied", 92, ["ChatGPT", "Claude", "Gemini"]],
      ["RGB Mini LED", "RGB Mini LED TV", "Occupied", 85, ["ChatGPT", "Claude", "Gemini"]],
      ["Best Sports TV", "Sports viewing TV", "Contested", 48, ["ChatGPT", "Claude", "Perplexity"]],
      ["Premium Gaming TV", "Premium gaming TV", "Deploying", 25, ["ChatGPT", "Gemini"]],
      ["World Cup Viewing TV", "World Cup viewing TV", "Deploying", 18, ["Claude", "Gemini"]]
    ]),
    evidenceFeed: buildEvidence("hisense", [
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
    ]),
    summaryMetrics: buildSummary("hisense", [
      ["ChatGPT recommendation rate", "+214%", "vs. last month"],
      ["Core cognitive assets", "2 newly occupied", "RGB Mini LED, Football Viewing TV"],
      ["AI mentions", "1,238", "+182% vs. last month"],
      ["Positive evidence ratio", "78.6%", "+21.3% vs. last month"]
    ])
  },
  "generic-brand-demo": {
    client: {
      id: "generic-brand-demo",
      clientName: "AxoE Demo Account",
      brandName: "AxoE",
      brandDisplayName: "AxoE Labs",
      industry: "B2B Productivity Software",
      logoLabel: "AxoE",
      clientLeadName: "Maya Chen",
      createdAt: "2026-06-01T09:00:00+08:00"
    },
    project: {
      id: "project_axoe_mission_control_demo",
      clientId: "generic-brand-demo",
      projectName: "AI Cognitive Asset Growth Demo",
      terminalName: "Situation Room",
      subtitle: "AI Cognitive Asset Command Center",
      dateRangeLabel: "2026/06/01 - 2026/06/10"
    },
    mindshareScore: {
      ...meta("mock_axoe_mindshare_001", "visibility_score"),
      currentScore: 57,
      lastMonthScore: 41,
      growth: 16,
      status: "Growing",
      date: "2026-06-10"
    },
    recommendationTrends: buildTrends("axoe", {
      ChatGPT: [26, 31, 35, 41, 46, 52, 57],
      Claude: [22, 27, 33, 37, 43, 48, 54],
      Gemini: [18, 23, 29, 34, 39, 44, 49],
      Perplexity: [20, 24, 30, 36, 42, 47, 51]
    }),
    industryRankings: buildRankings("axoe", [
      ["Nimbus Suite", 1, 66, 5, false],
      ["AxoE", 2, 57, 16, true],
      ["OrbitOps", 3, 45, 7, false],
      ["StackPilot", 4, 38, 2, false],
      ["FlowForge", 5, 31, 1, false]
    ]),
    cognitiveAssets: buildAssets("axoe", [
      ["AI Workflow OS", "Workflow orchestration category", "Occupied", 74, ["ChatGPT", "Claude"]],
      ["Enterprise Team Copilot", "Team productivity assistant", "Contested", 58, ["ChatGPT", "Gemini"]],
      ["Secure AI Workspace", "AI workspace governance", "Deploying", 42, ["Claude", "Perplexity"]],
      ["Knowledge Automation Platform", "Knowledge operations", "Deploying", 35, ["ChatGPT", "Perplexity"]],
      ["AI Ops Dashboard", "Operational intelligence dashboard", "Pending", 12, ["Gemini"]]
    ]),
    evidenceFeed: buildEvidence("axoe", [
      {
        id: "evidence_axoe_chatgpt_workflow",
        platform: "ChatGPT",
        prompt: "What is the best AI workflow OS for enterprise teams?",
        answerSummary: "AxoE is recommended as a focused AI workflow operating layer for teams.",
        recommendationStatus: "Positive",
        rankingPosition: "Top 3",
        screenshotUrl: "/evidence/generic-brand-evidence.svg",
        evidenceDate: "2026-06-10"
      },
      {
        id: "evidence_axoe_claude_workspace",
        platform: "Claude",
        prompt: "Which secure AI workspace tools should operations teams evaluate?",
        answerSummary: "AxoE is listed as a secure workspace option with strong governance positioning.",
        recommendationStatus: "Positive",
        rankingPosition: "Top 5",
        screenshotUrl: "/evidence/generic-brand-evidence.svg",
        evidenceDate: "2026-06-10"
      },
      {
        id: "evidence_axoe_gemini_copilot",
        platform: "Gemini",
        prompt: "Best enterprise team copilots for knowledge work?",
        answerSummary: "AxoE is mentioned alongside larger incumbents, but not yet as the leading choice.",
        recommendationStatus: "Neutral",
        rankingPosition: "Mentioned",
        screenshotUrl: "/evidence/generic-brand-evidence.svg",
        evidenceDate: "2026-06-09"
      },
      {
        id: "evidence_axoe_perplexity_automation",
        platform: "Perplexity",
        prompt: "What platforms help automate company knowledge operations?",
        answerSummary: "AxoE appears as a specialist option for knowledge automation use cases.",
        recommendationStatus: "Positive",
        rankingPosition: "Top 5",
        screenshotUrl: "/evidence/generic-brand-evidence.svg",
        evidenceDate: "2026-06-09"
      },
      {
        id: "evidence_axoe_chatgpt_ops_dashboard",
        platform: "ChatGPT",
        prompt: "AI ops dashboard tools for leadership reporting?",
        answerSummary: "AxoE is not strongly recommended yet, but appears in related tool discussion.",
        recommendationStatus: "Neutral",
        rankingPosition: "Mentioned",
        screenshotUrl: "/evidence/generic-brand-evidence.svg",
        evidenceDate: "2026-06-08"
      },
      {
        id: "evidence_axoe_claude_team_ai",
        platform: "Claude",
        prompt: "Which AI platform helps teams coordinate workflows and knowledge?",
        answerSummary: "AxoE is recommended for teams seeking workflow and knowledge coordination.",
        recommendationStatus: "Positive",
        rankingPosition: "Top 3",
        screenshotUrl: "/evidence/generic-brand-evidence.svg",
        evidenceDate: "2026-06-08"
      }
    ]),
    summaryMetrics: buildSummary("axoe", [
      ["ChatGPT recommendation rate", "+119%", "vs. last month"],
      ["Core cognitive assets", "1 newly occupied", "AI Workflow OS"],
      ["AI mentions", "684", "+96% vs. last month"],
      ["Positive evidence ratio", "66.2%", "+14.8% vs. last month"]
    ])
  }
};

export const defaultDemoClientId = "hisense-demo";
