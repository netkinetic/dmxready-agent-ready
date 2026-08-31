# Demo Video Script — target 2:15–2:30

## Exact recording start

1. Use the latest ChatGPT desktop app and its in-app browser at <https://netkinetic.github.io/dmxready-agent-ready/>.
2. Record a desktop viewport at 1280×720 or larger with the browser page and the ChatGPT conversation both legible. Use 100% browser zoom.
3. Reload the live page immediately before recording and stay at the hero. Do not reuse a page with an old prepared state or activity trail.
4. Confirm the header says `5 WebMCP tools available`. The initial visible recommendation must be Core, `$295 USD / month`, `Within budget`; business name and type are blank; goal is qualified inquiries; budget is `$300`; Smart Apps is `2`; management is handled for me; and the prepared section is not visible.
5. Stop and reset the take if tool discovery is missing, any old state remains, a tool fails, or the visible result differs from the sequence below.

## 0:00–0:20 — The problem
**Voiceover:** "Most websites are built for people, while AI agents have to guess their way through buttons and forms. DMXReady Agent Ready gives both the person and the agent one governed website state to work with together."

Show the live page hero and the WebMCP availability indicator.

## 0:20–0:40 — The WebMCP layer
Scroll to the five-tool capability section.

**Voiceover:** "This page registers five explicit WebMCP tools. They can read plan options, capture visitor intent, compare plans, show the recommendation, and prepare a Smart Website direction for review."

## 0:40–1:25 — Human + agent collaboration
Use the WebMCP-enabled agent with this exact prompt:

> I run a plumbing company. I mainly want more qualified leads, I want the website handled for me, I need about two Smart Apps, and I want to stay around $300 per month. Use this page's WebMCP tools to read the options, set my intent, compare the relevant plans, show the recommended path, and prepare it for review only, in that order.

Show the agent using the tools while the visible page fields and recommendation update to Core.

**Voiceover:** "The agent is not scraping the UI or using separate hidden business logic. Its tools call the same application functions that drive the human interface, so both sides see the same state."

Expected tool and visible-state sequence:

1. `dmxready.get_smart_website_options` reads Core, Plus, and Advanced; the activity trail records that the agent read the page options.
2. `dmxready.set_visitor_intent` sets business type to `plumbing company`, goal to qualified inquiries, monthly budget to `300`, Smart Apps to `2`, and management to handled for me. Those exact fields update visibly.
3. `dmxready.compare_relevant_plans` keeps Core highlighted at `$295 USD / month`, marks it `Within budget`, and explains that Core is the smallest band supporting two Smart Apps.
4. `dmxready.show_recommended_path` brings the same Core recommendation panel into view.
5. `dmxready.prepare_smart_website_intake` reveals the green `Prepared, not submitted` review section and adds the preparation event to the shared activity trail.

## 1:25–1:55 — Safe handoff
Show the prepared review state and activity evidence.

**Voiceover:** "The last tool deliberately stops before anything consequential. It prepares the direction, but it cannot create an order, charge a card, provision a website, or approve a public launch. The human keeps that authority."

Hold long enough to show the final review state: `Prepared, not submitted`, Core at `$295 USD/month`, and `Human authority preserved` with `No order created`, `No payment`, `No provisioning`, and `No public launch`. Do not navigate into, submit, order, pay for, provision, or publish anything.

## 1:55–2:20 — Why it matters
Show the live pricing cards and shared-state evidence.

**Voiceover:** "For DMXReady, Agent Ready is a new Smart Website principle: one website truth, a human interface, and a bounded capability projection for agents. Instead of adding another chatbot, the website itself becomes directly usable by AI."

## 2:20–2:30 — Close
Return to the hero.

**Voiceover:** "Websites built for people and AI agents to use together. That's DMXReady Agent Ready."

## Recording notes
Keep the final export below 3:00, use spoken audio, no background music, and frame the recording tightly around the app and tool interaction. Do not expose private tabs, credentials, customer data, or private DMXReady source. Verify the public live URL immediately before recording. Upload the finished video as public on YouTube, then replace only the placeholder in `SUBMISSION.md` with the real URL.
