# Challenge Judging Map

DMXReady Agent Ready is designed to make the four judging criteria easy to verify from the live app and public source.

## 1. WebMCP leverage

Look for:

- five registered WebMCP tools;
- explicit JSON input schemas;
- bounded inputs;
- shared application functions for human and agent actions;
- visible page updates after tool calls; and
- graceful fallback when WebMCP is unavailable.

The core WebMCP idea is simple: the website explicitly tells the agent what it can do instead of forcing the agent to infer actions from the UI.

## 2. Execution

The submission is a complete, runnable product experience rather than a code-only proof:

- public live URL;
- public source repository and MIT license;
- normal human interface;
- agent-discoverable tools;
- visible Activity trail;
- deterministic recommendation behavior;
- safe prepared-for-review endpoint; and
- tests plus browser acceptance evidence.

## 3. Potential impact

The reference journey represents a common web problem: a person knows their goal but does not necessarily know which buttons, forms, or product choices will get them there.

WebMCP lets the agent help directly through the website's declared capabilities while keeping the result visible to the person.

The broader opportunity is for websites to become usable by people and agents together without requiring a separate chatbot experience for every workflow.

## 4. Creativity and ambition

The concept goes beyond "AI built this page" and beyond "put a chatbot on the page."

> **The website itself becomes an explicit interface for both people and agents.**

The five-tool reference journey is intentionally focused so judges can see that idea working end to end.

## What to notice in the demo

1. The page works as a normal website before the agent acts.
2. ChatGPT discovers five explicit WebMCP tools.
3. Tool calls visibly change the same page.
4. The recommendation and Activity trail remain inspectable by the person.
5. The final state is prepared for review, not submitted.

## Closing idea

**Build once. Let people and authorized agents use the same website together.**
