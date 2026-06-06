# Jadeo Mission Control MVP

First-stage MVP for the Jadeo Mission Control V1 demo.

## Scope

- Login page
- Protected Situation Room page
- Left navigation
- Top status bar
- AI Mindshare Score frame
- AI Recommendation Trend frame
- Industry Ranking frame
- Core Cognitive Assets frame
- Live AI Evidence Feed frame
- Mock / Manual standardized data layer
- Reserved Profound adapter structure

## Demo Login

- Email: `client@hisense.com`
- Password: `jadeo2026`

## Local Run

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000/login
```

## Data Layer

The current MVP reads from `data/demo-dashboard.ts` through `adapters/mockAdapter.ts`.

Hisense is only the first demo seed client, selected with:

```ts
getDashboardData("hisense-demo")
```

Future clients should be added as additional dashboard records keyed by `clientId`.

The Situation Room can select a client with:

```text
/situation-room?clientId=hisense-demo
```

All business records include:

- `dataSource`
- `accessMethod`
- `syncedAt`
- `updatedAt`
- `reviewStatus`
- `sourceRecordId`
- `confidenceLevel`
- `freshnessStatus`

`adapters/profoundAdapter.ts` is intentionally reserved and does not make real API requests.
