# Architecture

## Boundary model

```text
Browser
  |
  v
React Client
  |
  | HTTP/JSON
  v
Express API
  |
  +--> Controllers
  |
  +--> Services
  |
  +--> Middleware
```

## Responsibilities

### Client

- UI rendering
- routing
- keyboard interaction
- accessible forms and controls
- API consumption

### Server

- HTTP API
- validation
- business rules
- service search
- error handling

### Docs

- audit evidence
- screenshots
- Lighthouse output
- architecture decisions

### Tests

- accessibility checks
- API tests
- integration tests

## First vertical feature

Public-service search.

1. User enters a query.
2. Client sends `/api/services?query=<query>`.
3. Server validates the query.
4. Service layer filters service data.
5. API returns JSON.
6. Client renders semantic result items.
