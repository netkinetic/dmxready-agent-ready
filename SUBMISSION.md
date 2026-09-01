# DMXReady Agent Ready

**Websites are becoming interfaces for agents. DMXReady is the platform for building them.**

## Inspiration

Most AI website work still follows one of two patterns: AI builds the page, or a chatbot is added on top of it. We wanted to explore a different question:

> What if the website itself could declare useful, structured capabilities to an AI agent while the person stayed on the same page, looking at the same state, and remained in control of consequential actions?

That is the idea behind **DMXReady Agent Ready**.

## What it does

The public challenge app is a working Smart Website planning experience with five browser-native WebMCP tools. An agent can:

1. read the Smart Website options shown by the page;
2. set the visitor's business intent;
3. compare the relevant plans;
4. bring the recommendation into view; and
5. prepare a Smart Website direction for human review.

The important part is not the five tools by themselves. Every tool calls the same application behavior that updates the person-visible website. The recommendation, plan highlight, prepared state, and Activity trail all change on the same page the person is using.

## Why WebMCP matters

Without WebMCP, an agent has to infer intent from buttons, labels, forms, and page structure. WebMCP lets the website explicitly say what the agent can do and describe those capabilities with structured JSON schemas.

That changes the interaction model:

- the website exposes bounded capabilities instead of forcing the agent to scrape UI;
- the agent invokes the same business logic the human experience uses;
- the person can immediately see what changed;
- the page can keep normal human behavior when WebMCP is unavailable; and
- the website's existing authority rules still decide what is allowed.

The live challenge page registers its tools with `document.modelContext.registerTool()`, uses explicit schemas, bounded inputs, an `AbortSignal`, and fail-closed registration behavior.

## Human authority is part of the product

The final WebMCP tool deliberately stops at **Prepared, not submitted**.

It does **not** create an order, charge money, provision a website, publish, change DNS, send outbound communication, or approve launch. The result requires human review.

That boundary is intentional. Agent capability should not silently become agent authority.

## From one demo to a multi-tenant platform

The public app is deliberately small and inspectable, but it represents a larger DMXReady product direction.

A Smart Website can have its own business understanding, design, Smart Apps, identity, permissions, and agent capabilities while sharing a managed platform runtime. We have exercised that architecture across materially different Smart Website cases, including DMXReady itself, Licensed Producers Canada, and Soccer360 Magazine.

The point is not that those websites look alike. They do not. The point is that an Agent Ready platform can keep each site's truth and authority isolated while reusing the same underlying lifecycle and capability model.

A Smart App can also become **dual-surface**: one governed capability can power a human interface and an agent interface without creating a second business-logic or data authority.

The public challenge repository contains only the challenge-safe reference implementation, tests, documentation, and visual architecture proof. It does not contain private platform source, production credentials, or customer-private data.

## How we built it

We kept the reference implementation intentionally transparent: HTML, CSS, JavaScript, Node's test runner, and GitHub Pages.

The WebMCP layer is thin. The page already has application functions for normalizing visitor intent, recommending a plan, updating visible state, and preparing a non-consequential review state. The registered WebMCP tools call those same functions rather than creating a parallel agent backend.

## Challenges we ran into

The hardest problem was not registering tools. It was deciding what a trustworthy human-agent website should mean.

We had to avoid hidden agent-only state, make tool calls visibly change the same page, preserve a useful experience in browsers without WebMCP, and draw a clear line between preparing something and authorizing a consequential business action.

We also had to keep the challenge-period work explicit because DMXReady existed before this challenge. The WebMCP reference app, browser capability projection, shared human/agent state, Activity evidence, tests, judge instructions, and public proof package are the challenge-period extension; the pre-existing private Smart Website platform is not part of that claim.

## What we learned

WebMCP is most interesting when it is not treated as another API surface bolted onto a website.

The stronger pattern is to expose the website's existing application capabilities directly, scoped to the page, business, Smart App, current state, and authorization. That keeps human and agent experiences consistent and makes agent activity easier to understand and govern.

Our live Chrome 152 acceptance exercised all five registered tools against the deployed page. The flow resolved a plumbing-company use case to the Core plan at $295/month, updated the shared visible state and Activity trail, and ended with `prepared_not_submitted`, `paymentCreated=false`, and `publicationAllowed=false`.

## Why it matters

Today this is a focused reference journey. The larger opportunity is for platforms that create websites to create their governed agent affordances at the same time.

**Build the business website once. Let people and authorized agents use the same governed capabilities.**
