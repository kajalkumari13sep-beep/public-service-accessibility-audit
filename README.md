# Public Service Accessibility & Architecture Audit

## Audit target

National Portal of India — https://www.india.gov.in/

This repository contains:
- an accessibility audit template/report
- a monorepo-style full-stack skeleton
- a first vertical slice for public-service search
- test placeholders
- evidence folders for Lighthouse and keyboard testing

## Important evidence note

The audit report deliberately does **not invent Lighthouse scores or keyboard findings**.
The remaining evidence must be captured locally in Chrome/DevTools and saved under
`docs/screenshots/` and `docs/evidence/`.

## Repository structure

```text
client/     React frontend
server/     Express backend
docs/       audit report, screenshots and evidence
tests/      cross-layer tests
```

## Architecture boundaries

The client owns presentation, navigation, accessibility behaviour and API calls.

The server owns request validation, business logic and API responses.

The first vertical slice is:

`Service Search UI -> GET /api/services?query=... -> controller -> service -> JSON`

## Local setup

### Client

```bash
cd client
npm install
npm run dev
```

### Server

```bash
cd server
npm install
npm run dev
```

The API is expected at `http://localhost:4000`.

## First vertical slice

`GET /api/services?query=education`

The frontend can use this endpoint to display accessible service results.

## Accessibility principles

- semantic HTML
- keyboard operability
- visible `:focus-visible`
- accessible names for controls
- logical heading hierarchy
- responsive layout
- skip-to-content link
