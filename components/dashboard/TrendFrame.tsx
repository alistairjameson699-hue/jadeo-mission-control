"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import type { Platform, RecommendationTrendPoint } from "@/types/dashboard";

const platformOrder: Platform[] = ["ChatGPT", "Claude", "Gemini", "Perplexity"];

const lineColors: Record<Platform, string> = {
  ChatGPT: "#36F48B",
  Claude: "#F5B84B",
  Gemini: "#2E9BFF",
  Perplexity: "#48D6FF"
};

type ChartPoint = {
  date: string;
} & Record<Platform, number | string>;

function buildChartData(points: RecommendationTrendPoint[]) {
  const dates = Array.from(new Set(points.map((point) => point.date)));

  return dates.map((date) => {
    const row: ChartPoint = { date } as ChartPoint;
    platformOrder.forEach((platform) => {
      const value = points.find((point) => point.date === date && point.platform === platform);
      row[platform] = value?.recommendationRate ?? 0;
    });
    return row;
  });
}

export function TrendFrame({ points }: { points: RecommendationTrendPoint[] }) {
  const chartData = buildChartData(points);

  return (
    <div className="h-[260px]">
      <div className="mb-4 flex flex-wrap gap-5">
        {platformOrder.map((platform) => (
          <div key={platform} className="flex items-center gap-2 text-sm text-white/78">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: lineColors[platform] }}
            />
            {platform}
          </div>
        ))}
      </div>
      <ResponsiveContainer width="100%" height="86%">
        <LineChart data={chartData} margin={{ left: -18, right: 10, top: 10, bottom: 0 }}>
          <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
          <XAxis
            dataKey="date"
            tickFormatter={(value: string) => value.slice(5)}
            tick={{ fill: "#8A9992", fontSize: 12 }}
            axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
            tickLine={false}
          />
          <YAxis
            domain={[0, 100]}
            tickFormatter={(value: number) => `${value}%`}
            tick={{ fill: "#8A9992", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ stroke: "rgba(54,244,139,0.22)", strokeWidth: 1 }}
            contentStyle={{
              background: "#0E1714",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 8,
              color: "#fff"
            }}
            formatter={(value: number, name: string) => [`${value}%`, name]}
            labelFormatter={(label) => `Date: ${label}`}
          />
          {platformOrder.map((platform) => (
            <Line
              key={platform}
              type="monotone"
              dataKey={platform}
              stroke={lineColors[platform]}
              strokeWidth={2.4}
              dot={{ r: 3, strokeWidth: 1.5 }}
              activeDot={{ r: 5 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
