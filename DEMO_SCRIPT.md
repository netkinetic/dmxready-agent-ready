# Demo Video Script — target 2:05–2:25

## Recording rule

Record only after the public challenge artifact is stable. Do not expose private source, customer data, credentials, OAuth details, internal admin screens, or production architecture.

## 0:00–0:18 — The thesis

**Voiceover:** “Websites are becoming interfaces for agents. DMXReady is a platform for building Smart Websites that people and AI agents can use together.”

Show the normal live website first and the WebMCP availability indicator.

## 0:18–0:38 — Explicit capabilities

Show the capability section.

**Voiceover:** “Instead of making an agent guess its way through buttons and forms, this page declares five explicit WebMCP tools with structured inputs. The normal website still works for the person.”

Do not show architecture diagrams or private platform material.

## 0:38–1:28 — Human + agent, same visible experience

Use this exact prompt:

> I run a plumbing company. I mainly want more qualified leads, I want the website handled for me, I need about two Smart Apps, and I want to stay around $300 per month. Use this page's WebMCP tools to read the options, set my intent, compare the relevant plans, show the recommended path, and prepare it for review only, in that order.

Expected tool sequence:

1. `dmxready.get_smart_website_options`
2. `dmxready.set_visitor_intent`
3. `dmxready.compare_relevant_plans`
4. `dmxready.show_recommended_path`
5. `dmxready.prepare_smart_website_intake`

Show the page changing while the tools run. The visible result should remain Core at `$295 USD / month`, `Within budget`, with the prepared review section revealed and Activity showing the interactions.

**Voiceover:** “The important part is what happens on the website. The agent's actions change the same visible state the person is using, so the person can see the result and continue from it.”

## 1:28–1:52 — Human authority

Show `Prepared, not submitted` and the consequence boundary.

**Voiceover:** “Useful capability does not mean unrestricted authority. This reference can prepare the direction, but it cannot create an order, charge money, provision a site, publish, change DNS, or approve launch.”

## 1:52–2:15 — Why it matters

Return to the hero and Activity/result state.

**Voiceover:** “This is the shift we wanted to demonstrate: not AI building a website, and not another chatbot layered on top. The website itself becomes an explicit interface for people and agents. Build the website once. Let people and authorized agents use it together.”

## Final capture checklist

- live URL passes immediately before recording;
- five tools discover from a clean state;
- full scripted interaction succeeds;
- spoken audio only; no third-party music;
- no architecture/B-roll page in the final video;
- no private tenant, Workspace, OAuth, admin, or source screenshots;
- final video remains below three minutes;
- upload publicly to YouTube;
- add the URL to Devpost and `SUBMISSION.md`;
- freeze the submitted repo/live site after the deadline through judging.
