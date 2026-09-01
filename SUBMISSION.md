# Devpost Submission Copy

## Project name
DMXReady Agent Ready

## One-line pitch
**Websites are becoming interfaces for agents. DMXReady is the platform for building them.**

## Description
DMXReady Agent Ready demonstrates a Smart Website that people and AI agents can use together from the same governed state. WebMCP gives the page explicit browser-native capabilities; DMXReady keeps business truth, permissions, consequential actions, and human-visible state under the same authority.

The public challenge app is the safe, inspectable reference implementation. It also represents a larger product direction: one multi-tenant Smart Website platform can serve materially different businesses while each website keeps its own design, Smart Apps, protected identity, permissions, and agent capabilities.

Most AI website demos stop at “AI built this page” or add a chatbot on top. Agent Ready takes a different position:

> **The website itself should become a governed interface for both people and AI agents.**

## What the live WebMCP demo proves

The page exposes five bounded WebMCP tools. An agent can read plans, capture visitor intent, compare relevant options, bring the recommendation into view, and prepare a Smart Website direction for human review.

Every agent action calls the same application behavior that updates the person-visible page. There is no hidden agent-only state and no unrestricted automation back door.

The final tool deliberately stops at **Prepared, not submitted**. It cannot create an order, charge money, provision a website, publish, change DNS, send outbound communication, or approve launch.

That boundary is intentional: WebMCP gives the agent useful capability without silently replacing business authority.

## The platform idea

```text
one governed business / website truth
        ↓
Smart Website + Smart Apps
        ↓
governed capability projection
   ┌─────────────┼─────────────┐
   ↓             ↓             ↓
human UI       WebMCP       MCP / agents
        ↓
exact authority + Activity evidence
```

A Smart Website can have a unique design and business model while still using shared platform runtime and Agent Ready contracts. Capabilities can be scoped by website, Smart App, current state, and authorization rather than exposed as one unrestricted static API.

A Smart App can also be dual-surface: the same governed capability that powers a human experience can be exposed to an agent without creating a second business-logic or data authority.

## Multi-tenant proof

The broader DMXReady North Star has been exercised across materially different Smart Website cases:

- **DMXReady** — the platform's own business/marketing Smart Website;
- **Licensed Producers Canada** — a domain-rich Smart Marketplace / industry-intelligence experience with a governed agent-readable Marketplace capability;
- **Soccer360 Magazine** — a highly customized editorial experience using the ordinary Smart Website platform model.

The point is not that these websites look alike. They do not. The point is that they can share the same governed Smart Website and Agent Ready architecture without sharing tenant truth, permissions, design, or business capabilities.

The challenge repository contains only the public-safe WebMCP reference implementation and no private platform source, production credentials, or customer data.

## Why WebMCP is the right fit

Without WebMCP, an agent has to infer intent from layout, buttons, labels, and forms. WebMCP lets the website declare structured capabilities directly.

That creates a stronger human-agent model:

1. the page says what the agent may safely do;
2. the agent invokes explicit JSON-schema tools;
3. the same application functions update the same page state;
4. the human can see what changed;
5. consequential actions remain behind the existing authority boundary.

The normal human interface continues to work when WebMCP is unavailable.

## Reference implementation

The page registers five tools with `document.modelContext.registerTool()`:

- `dmxready.get_smart_website_options`
- `dmxready.set_visitor_intent`
- `dmxready.compare_relevant_plans`
- `dmxready.show_recommended_path`
- `dmxready.prepare_smart_website_intake`

Registrations use explicit JSON input schemas, bounded inputs, shared application functions, an `AbortSignal`, and fail-closed registration behavior.

## Challenge-period work

DMXReady existed before the challenge. The public Agent Ready reference implementation was created after August 25, 2026.

Challenge-period work includes the public reference app, WebMCP capability projection, five browser tools, shared human/agent page state, visible Activity evidence, a safe preparation-before-consequence boundary, tests, judge instructions, public licensed source, and the live demo.

The challenge did not create DMXReady's pre-existing Smart Website, Smart App, business-intelligence, publication, or managed-runtime platform.

## Why it matters

The longer-term implication is larger than this buying-flow demo. A platform that creates Smart Websites can also create their governed agent affordances. Instead of manually adding a separate chatbot or bespoke agent API to every customer site, Agent Ready makes agent access part of the website architecture itself.

> **Build once. Let people and authorized agents use the same governed business capabilities.**

## Links
- Live app: https://netkinetic.github.io/dmxready-agent-ready/
- Public source: https://github.com/netkinetic/dmxready-agent-ready
- Architecture: `ARCHITECTURE.md`
- Judging map: `JUDGING.md`
- Demo video: **add public YouTube URL on Thursday before submission**

## Thursday rule
Everything except the final public video URL should be complete before Thursday. Thursday is reserved for exact-release sanity checking, recording, YouTube upload, inserting the video URL, and final submission verification—not new product development.
