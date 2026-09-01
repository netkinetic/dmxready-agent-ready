# Challenge Judging Map

This file explains what judges should look for in DMXReady Agent Ready and how the public reference implementation supports the broader product thesis.

## 1. WebMCP leverage

The demo uses WebMCP for something structurally important: the website explicitly declares bounded capabilities to the agent instead of making the agent infer intent from buttons and forms.

Key proof:

- five registered WebMCP tools;
- explicit JSON input schemas;
- shared application functions for human and agent behavior;
- visible page state changes after agent actions;
- fail-closed registration when WebMCP is unavailable;
- no hidden agent-only business state.

The most important idea is that WebMCP is not a separate chatbot channel. It makes the website itself directly usable by the agent.

## 2. Execution

The public challenge artifact is deliberately small, inspectable, licensed, tested, and live.

Execution evidence includes:

- working public GitHub Pages URL;
- public source repository with MIT license;
- deterministic tests and static checks;
- visible activity trail;
- explicit safe handoff before consequential actions;
- clear challenge-period delta from the pre-existing DMXReady product.

The broader architecture has also been dogfooded across distinct Smart Website cases, demonstrating that Agent Ready is being treated as a reusable platform contract rather than a one-off demo.

## 3. Potential impact

The product implication is larger than the reference buying flow.

A platform that creates and operates business websites can also create their governed agent affordances. That can remove the need to bolt a separate chatbot, bespoke agent API, or duplicated business logic onto every customer website.

Potential model:

```text
business creates one Smart Website
→ people use the human experience
→ agents discover explicit capabilities
→ Smart Apps expose governed dual surfaces
→ owners retain authority and Activity evidence
```

That model is relevant to agencies, SaaS platforms, marketplaces, publishers, service businesses, and any website whose workflows should become agent-accessible without giving the agent unrestricted authority.

## 4. Creativity and ambition

The ambitious part is not the number of tools. It is the platform thesis:

> **A website can be both a human interface and an agent interface from one governed source of truth.**

DMXReady extends that idea to multi-tenant Smart Websites with unique designs, unique Smart Apps, exact site/resource identity, and human-governed consequence boundaries.

The challenge reference shows the smallest browser-native version of that idea. The broader product direction is to make Agent Ready part of the normal website creation and operating lifecycle.

## What to notice in the video

1. The person starts with a normal usable website.
2. ChatGPT discovers explicit WebMCP tools.
3. Agent tool calls visibly change the same page.
4. The Activity trail makes those calls inspectable.
5. The workflow stops before consequential submission.
6. A short platform proof shows that the same Agent Ready architecture is intended for materially different Smart Website tenants, not one hard-coded demo page.

## Closing idea

**Build once. Let people and authorized agents use the same governed business capabilities.**
