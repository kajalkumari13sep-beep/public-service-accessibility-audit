# Accessibility Baseline & Repository Architecture Audit

## Target

National Portal of India  
https://www.india.gov.in/

## Audit date

2026-09-14

## Scope

- homepage
- services page
- search controls
- navigation
- keyboard-only navigation
- semantic/accessibility checks
- responsive behaviour

## Public evidence reviewed

The current India Portal homepage exposes a global search control, service links,
government schemes, directories and multiple image-based content areas.

The Services page exposes service search/category controls.

GIGW 3.0 requires keyboard-operable functionality, visible keyboard focus,
logical focus order, accessible names for controls/non-text content and more than
one way to locate content.

## Lighthouse

**Must be captured locally before submission.**

Run Chrome DevTools -> Lighthouse -> Accessibility and save:
- screenshot: `docs/screenshots/lighthouse.png`
- report: `docs/evidence/lighthouse-report.json`

Do not enter invented scores.

## Keyboard-only pass

**Must be performed locally before submission.**

Use:
- Tab
- Shift+Tab
- Enter
- Space
- Escape where applicable

Record whether focus is visible, logical, escapable and whether all controls work.

Save screenshots in `docs/screenshots/`.

## Five findings to verify and document

### WEB-001 — Keyboard navigation

- WCAG: 2.1.1 Keyboard
- Priority: Critical
- Evidence: local keyboard-only screenshot required
- Impact: users who cannot operate a mouse may be blocked from functionality
- Fix: ensure every interactive function is reachable and operable by keyboard

### WEB-002 — Focus visibility

- WCAG: 2.4.7 Focus Visible / WCAG 2.2 equivalent focus requirements as applicable
- Priority: High
- Evidence: local keyboard-focus screenshot required
- Impact: keyboard users may lose track of their current position
- Fix: provide a clear visible focus indicator

### WEB-003 — Accessible names for controls

- WCAG: 4.1.2 Name, Role, Value
- Priority: High
- Evidence: inspect search/form controls locally and capture screenshot
- Impact: screen-reader users may not understand the purpose of controls
- Fix: use explicit labels or appropriate accessible names

### WEB-004 — Heading and landmark structure

- WCAG: 1.3.1 Info and Relationships
- Priority: High
- Evidence: inspect the accessibility tree/headings locally and capture screenshot
- Impact: assistive-technology users rely on structure to navigate efficiently
- Fix: use semantic landmarks and a logical heading hierarchy

### WEB-005 — Non-text content alternatives

- WCAG: 1.1.1 Non-text Content
- Priority: Medium
- Evidence: inspect meaningful images locally and capture screenshot
- Impact: users who cannot see images may miss equivalent information
- Fix: provide meaningful alternative text; mark decorative images appropriately

## Remediation order

1. Keyboard blockers
2. Focus visibility
3. Accessible names
4. Semantic structure
5. Non-text alternatives

## Submission checklist

- [ ] Lighthouse screenshot
- [ ] Lighthouse JSON/report
- [ ] keyboard-only screenshots
- [ ] five evidence screenshots
- [ ] final audit CSV
- [ ] README
- [ ] architecture tree
- [ ] setup-ready client/server skeleton
