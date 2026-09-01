# Public WebMCP Reference Design

## The idea

> **Websites are becoming interfaces for agents. DMXReady is the platform for building them.**

DMXReady Agent Ready demonstrates a simple product principle: a useful website can serve people normally while also exposing explicit, bounded capabilities to an AI agent through WebMCP.

The challenge implementation is intentionally small and inspectable. It proves the interaction pattern required for this submission; it is not a publication of DMXReady's private product internals.

## One experience, two ways to use it

```text
person uses the website
        │
        ├── normal page controls
        │
        └── WebMCP tools for an agent
                    │
                    └── same visible page state
```

The five WebMCP tools call the same page-level application functions used by the human interface. Agent actions therefore change the same visible experience instead of operating against a hidden agent-only state.

## What WebMCP adds

The page registers tools with `document.modelContext.registerTool(...)`, explicit JSON input schemas, bounded inputs, and an `AbortSignal` for cleanup. If WebMCP is unavailable, the normal website remains usable.

The reference journey lets an agent:

1. read the website plan options;
2. set visitor intent;
3. compare relevant plans;
4. bring the recommendation into view; and
5. prepare the selected direction for human review.

## Human authority

The final action deliberately ends at **Prepared, not submitted**.

The reference app cannot create an order, charge money, provision a site, publish a website, change DNS, or approve launch. This keeps the challenge focused on useful human-agent collaboration without treating tool access as unrestricted authority.

## Challenge boundary

DMXReady existed before the challenge. The public repository contains the challenge-period WebMCP reference implementation, tests, judging instructions, and submission materials required to evaluate that new work.

It does not contain private DMXReady production source, credentials, customer data, or internal implementation details that are unnecessary to run and judge this reference project.

## Product direction

The product opportunity is straightforward: websites should be built so people and authorized agents can use them together.

**Build the website once. Let people and agents use the same visible experience.**
