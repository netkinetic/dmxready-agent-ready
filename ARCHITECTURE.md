# Agent Ready Platform Architecture

## The thesis

> **Websites are becoming interfaces for agents. DMXReady is the platform for building them.**

DMXReady Agent Ready is not a proposal for adding a chatbot to every website. It is a model where the website itself exposes bounded, structured capabilities to AI agents while people continue to use the same experience and retain authority over consequential actions.

The public challenge repository is intentionally small and inspectable. It demonstrates the browser-native WebMCP layer without exposing private platform source, credentials, or customer data.

## One truth, multiple consumers

```text
approved business / website truth
        ↓
Smart Website + Smart Apps
        ↓
governed capability projection
   ┌─────────────┼─────────────┐
   ↓             ↓             ↓
human UI       WebMCP       MCP / agents
        ↓
Activity + authority evidence
```

## Why the reference demo matters

The challenge page registers five WebMCP tools. Those tools call the same application functions that update the person-visible interface. The agent does not get a hidden state store or a separate implementation of the buying journey.

That is the smallest public-safe proof of the larger platform rule:

> **Agent capability should wrap existing governed product behavior, not create a second business authority.**

The normal human interface still works when WebMCP is unavailable.

## Multi-tenant platform shape

A production Smart Website platform must solve more than tool registration. Each website needs its own business truth, design, capabilities, authorization, and runtime identity without requiring a bespoke server for every customer.

DMXReady's platform direction is:

```text
one shared Smart Website platform
→ many exact website identities
→ one governed render/runtime model
→ website-scoped protected resources
→ site + user authorization
→ website-specific capability projection
```

Materially different Smart Websites can therefore share platform infrastructure without sharing tenant truth. A business/marketing site, an industry marketplace, and a highly customized editorial site can have different designs and different capabilities while using the same governed platform contracts.

## Smart Apps as dual-surface capabilities

A Smart App should not need one implementation for people and another for agents.

```text
one Smart App capability
        ├── human interface
        └── agent interface
```

Both surfaces should resolve to the same execution/data authority and preserve the same tenant and consequence boundaries.

This is especially important for domain-rich experiences such as marketplace search: the agent should use the same governed capability as the person rather than a duplicate agent-only database or search service.

## Authority is separate from capability

Discovering or invoking a tool does not automatically authorize every possible business action. Agent Ready separates **what an agent can ask to do** from **what the current user/site/state is allowed to do**.

The public reference demo makes this visible by stopping at `Prepared, not submitted`. It cannot create an order, charge money, provision a site, publish, change DNS, send outbound communication, or approve launch.

## Observable agent use

A useful agent platform should not be a black box. Agent actions can be represented as Activity/evidence so owners can see what capability was used, against which website, and what result was produced.

That creates a stronger operating model:

```text
agent discovers capability
→ exact authority is checked
→ governed action executes
→ person-visible state changes
→ Activity records the result
```

## What this challenge repo does and does not claim

This repository contains the public WebMCP reference implementation and tests. It does **not** contain private DMXReady platform source, production authentication configuration, customer data, payment logic, or production secrets.

The challenge demo proves the browser-native human + agent interaction pattern directly. The submission materials explain how that same pattern fits into the broader multi-tenant Smart Website architecture that DMXReady has been building and dogfooding.

The long-term product goal is straightforward:

> **Generate Smart Websites that are Agent Ready by design, so people and authorized agents can use the same governed business capabilities.**
