# Zeelin Project

A demo of a financial intelligence workspace for browsing companies, their relationships, industry news, and deal flow. Built with Next.js, React, and TypeScript.

Company profiles, the relationship graph, and the news items are sample data included in this repo. They are not live market data.

## Features

- **上市公司列表** — browse listed companies and open a company detail view
- **关系图谱** — search companies and explore a relationship graph, with related news alongside it
- **路演大厅与行业快讯** — roadshow updates and industry news
- **上市后备企业专区** — companies preparing to list
- **投融并购促进专区** — business-cooperation projects and matchmaking requests

## Run locally

Node.js 18 or newer is required.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To run the production server on port 8080:

```bash
npm run build
npm start
```

## Stack

- Next.js 13
- React 18
- TypeScript
- [react-force-graph-2d](https://github.com/vasturiano/react-force-graph) for the relationship graph

## Project layout

- `pages/` — home screen, company detail route, and the search API
- `components/` — company lists, graph details, news, and deal screens
- `data/` — sample companies, relationships, and news
