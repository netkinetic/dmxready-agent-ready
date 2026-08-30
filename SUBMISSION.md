# Devpost Submission Copy

## Project name
DMXReady Agent Ready

## One-line pitch
Smart Websites built for people and AI agents to use together, with one visible state and explicit human authority over consequential actions.

## Description
DMXReady Agent Ready explores a simple idea: an AI agent should not have to guess its way through a website UI, and it should not need a hidden back door either. The website should explicitly declare what the agent can safely do, while the person stays on the same page, sees the same state change, and keeps control of the next consequential step.

The demo turns a Smart Website buying journey into five bounded WebMCP tools. An agent can read the available plans, set the visitor's business intent, compare the relevant plans, bring the recommendation into view, and prepare a Smart Website direction for review. Every agent action uses the same application logic and visible state as the human interface.

The final tool deliberately stops before submission. It prepares a review state but cannot create an order, charge money, provision a website, or approve a public launch. That boundary is the point: Agent Ready should mean useful capability without hidden authority.

## Why WebMCP is the right fit
WebMCP lets the page expose explicit, structured capabilities instead of forcing an agent to infer intent from buttons, labels, and layout. It also lets the human and agent collaborate against the same live page and session. For DMXReady, that creates a path from "AI-built websites" to websites that are themselves usable by AI agents.

## What people and agents can do together
A person can edit the business requirements directly, or ask an agent to translate a natural-language goal into the same bounded intent model. The agent can explain and select the smallest plan that actually fits, while the person immediately sees the recommendation and activity trail update. The person can then review the prepared direction before any consequential workflow begins.

## Implementation
The page registers five tools with `document.modelContext.registerTool()`. Each tool has a narrow JSON input schema and calls shared application functions rather than separate agent-only business logic. Registration is fail-closed when WebMCP is unavailable. The human UI continues to work normally in non-WebMCP browsers.

The public challenge implementation is intentionally standalone and contains no production credentials, customer data, payment calls, provisioning calls, or publication authority.

## Challenge-period work
DMXReady existed before the challenge. This Agent Ready reference implementation was created after August 25, 2026. The public repository's first commit is dated August 30, 2026 and contains the WebMCP capability projection, five tools, shared human/agent state, activity evidence, tests, and safe preparation boundary.

## Links
- Live app: https://netkinetic.github.io/dmxready-agent-ready/
- Public source: https://github.com/netkinetic/dmxready-agent-ready
- Demo video: add public YouTube URL before submission

## Testing note
Use ChatGPT's WebMCP-enabled in-app browser or Chrome 149+ with WebMCP testing enabled. See `TESTING.md` for the exact judge path.
