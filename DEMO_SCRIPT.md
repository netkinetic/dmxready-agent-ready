# Demo Video Script — target 2:40–2:50

## Recording rule

Record on Thursday only, after every non-video submission artifact is final.

Use the latest stable certified public challenge release. Do not introduce product changes during recording day unless the public demo is genuinely broken.

Do not expose private source, credentials, customer-private data, OAuth codes, or internal admin details.

## Exact recording start

1. Open the live public WebMCP reference at <https://netkinetic.github.io/dmxready-agent-ready/> in the supported WebMCP environment.
2. Use a desktop viewport at 1280×720 or larger with both the page and ChatGPT interaction legible.
3. Reload immediately before the take and begin from a clean state.
4. Confirm `5 WebMCP tools available` and the expected default Core recommendation.
5. Stop and reset if tool discovery is missing, stale state remains, or any tool produces an unexpected result.

## 0:00–0:18 — The thesis

**Voiceover:** “Websites are becoming interfaces for agents. DMXReady is a platform for building Smart Websites that people and AI agents can use together.”

Show the normal usable website first. Briefly point to the WebMCP availability indicator.

## 0:18–0:38 — The WebMCP layer

Scroll to the capability section.

**Voiceover:** “Instead of making an agent guess its way through buttons and forms, this page declares five explicit WebMCP tools. They use the same application behavior as the human interface.”

Do not dwell on code. The visual proof is the website and the available capabilities.

## 0:38–1:25 — Human + agent, same state

Use this exact prompt:

> I run a plumbing company. I mainly want more qualified leads, I want the website handled for me, I need about two Smart Apps, and I want to stay around $300 per month. Use this page's WebMCP tools to read the options, set my intent, compare the relevant plans, show the recommended path, and prepare it for review only, in that order.

Show the agent executing the tools while the person-visible page updates.

Expected sequence:

1. `dmxready.get_smart_website_options`
2. `dmxready.set_visitor_intent`
3. `dmxready.compare_relevant_plans`
4. `dmxready.show_recommended_path`
5. `dmxready.prepare_smart_website_intake`

The visible result should remain Core at `$295 USD / month`, `Within budget`, with the prepared review section revealed and Activity showing the agent interactions.

**Voiceover:** “The agent is not using a second hidden website model. Its tool calls update the same page state the person can see and continue using.”

## 1:25–1:48 — Human authority

Show `Prepared, not submitted` and the consequence boundary.

**Voiceover:** “Useful capability does not mean unrestricted authority. The agent can prepare the direction, but it cannot create an order, charge money, provision a website, publish, change DNS, or approve launch. The human keeps that authority.”

Hold long enough for the safety boundary and Activity evidence to be readable.

## 1:48–2:18 — From demo to platform

Use a prepared public-safe architecture frame and quick visual cuts of materially different Smart Website experiences where stable and safe to show: DMXReady, Licensed Producers Canada, and Soccer360 Magazine.

**Voiceover:** “The bigger idea is multi-tenant. These sites can have completely different designs, business models, and Smart Apps while sharing one governed Smart Website and Agent Ready architecture. Each site keeps its own identity, permissions, and capabilities.”

Do not imply that the public reference repo contains the private production platform. Label this clearly as **DMXReady platform proof / challenge architecture**.

## 2:18–2:38 — Smart Apps, two surfaces

Show the architecture frame:

```text
one Smart App capability
        ├── human interface
        └── agent interface
```

**Voiceover:** “A Smart App does not need separate human and agent business logic. The same governed capability can power the website experience and an agent surface, with the same data and authority boundaries.”

If a current public-safe LPC Marketplace proof is included, keep it to a very short visual confirmation rather than a second long tool sequence.

## 2:38–2:48 — Close

Return to the Agent Ready hero or final architecture frame.

**Voiceover:** “Build the business website once. Let people and authorized agents use the same governed capabilities. That is DMXReady Agent Ready.”

## Thursday capture checklist

- exact live URL passes before recording;
- five WebMCP tools discover correctly;
- clean initial state;
- full agent sequence succeeds once before the recorded take;
- architecture/B-roll assets already prepared;
- export remains below 3:00 with spoken audio;
- upload public on YouTube;
- replace only the video placeholder in `SUBMISSION.md`;
- verify live URL, public repo, license, testing instructions, and video after upload;
- submit and freeze the challenge artifact.
