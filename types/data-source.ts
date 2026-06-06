export type DataSource = "Profound" | "Export" | "Manual" | "Mock";

export type AccessMethod =
  | "api"
  | "csv_upload"
  | "json_upload"
  | "manual_input"
  | "demo_seed";

export type ReviewStatus = "pending" | "approved" | "rejected";

export type ConfidenceLevel = "high" | "medium" | "low";

export type FreshnessStatus = "fresh" | "stale" | "demo";

export type DataMeta = {
  dataSource: DataSource;
  accessMethod: AccessMethod;
  sourceMetric?: string;
  sourceRecordId: string;
  syncedAt: string;
  updatedAt: string;
  reviewStatus: ReviewStatus;
  reviewer?: string;
  confidenceLevel: ConfidenceLevel;
  freshnessStatus: FreshnessStatus;
};
