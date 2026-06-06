import type { DataMeta } from "@/types/data-source";

export type Client = {
  id: string;
  clientName: string;
  brandName: string;
  brandDisplayName: string;
  industry: string;
  logoLabel: string;
  createdAt: string;
};

export type Project = {
  id: string;
  clientId: string;
  projectName: string;
  terminalName: string;
  subtitle: string;
  dateRangeLabel: string;
};

export type MindshareScore = DataMeta & {
  currentScore: number;
  lastMonthScore: number;
  growth: number;
  status: "Growing" | "Stable" | "Declining";
  date: string;
};

export type Platform = "ChatGPT" | "Claude" | "Gemini" | "Perplexity";

export type RecommendationTrendPoint = DataMeta & {
  date: string;
  platform: Platform;
  recommendationRate: number;
};

export type IndustryRanking = DataMeta & {
  brandName: string;
  rank: number;
  recommendationRate: number;
  change: number;
  isClientBrand: boolean;
};

export type CognitiveAssetStatus =
  | "Occupied"
  | "Contested"
  | "Deploying"
  | "Pending";

export type CognitiveAsset = DataMeta & {
  assetName: string;
  concept: string;
  status: CognitiveAssetStatus;
  recommendationRate: number;
  platforms: Platform[];
  lastUpdated: string;
};

export type EvidenceStatus = "Positive" | "Neutral" | "Negative" | "Missing";

export type AiEvidence = DataMeta & {
  id: string;
  platform: Platform;
  prompt: string;
  answerSummary: string;
  recommendationStatus: EvidenceStatus;
  rankingPosition: string;
  screenshotUrl: string;
  evidenceDate: string;
};

export type DashboardData = {
  client: Client;
  project: Project;
  mindshareScore: MindshareScore;
  recommendationTrends: RecommendationTrendPoint[];
  industryRankings: IndustryRanking[];
  cognitiveAssets: CognitiveAsset[];
  evidenceFeed: AiEvidence[];
};
