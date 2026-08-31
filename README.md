# DMXReady Agent Ready

> **Smart Websites are websites built for people and AI agents to use together.**

DMXReady Agent Ready is a small public WebMCP reference implementation created for the **OpenAI WebMCP Challenge (August–September 2026)**. It demonstrates a Smart Website exposing explicit browser tools to an AI agent while the person remains on the same page, sees the same state change, and keeps authority over consequential actions.

## Why this repo exists

DMXReady and its Smart Website platform existed before the challenge. The challenge extension in this repository was created after **August 25, 2026** specifically to explore a new first-class DMXReady platform principle: **Agent Ready**.

This is intentionally **not** the private DMXReady platform repository. It is a safe, standalone reference implementation containing only the code required to inspect and run the WebMCP proof.

The public challenge repository demonstrates Agent Ready; it does not become a second DMXReady platform authority.

## The idea

Normal AI website tooling often stops at “AI built this page” or adds a chatbot on top of it.

Agent Ready takes a different position:

```text
one governed website state
        │
        ├── human interface
        │
        └── Agent Ready capability projection
                    │
                    └── WebMCP browser tools
```

The browser tools call the same application logic that updates the person-visible page. The agent is not given a hidden bypass around the website.

## Demo journey

Ask an agent using the WebMCP-enabled page something like:

> I run a plumbing company. I mainly want more qualified leads, I want the website handled for me, I need about two Smart Apps, and I want to stay around $300 per month. Help me choose the right path and prepare it for review.

The page exposes five bounded tools:

- `dmxready.get_smart_website_options` — read the current plan options.
- `dmxready.set_visitor_intent` — update the same intent fields the human can edit.
- `dmxready.compare_relevant_plans` — highlight and explain the smallest fitting band.
- `dmxready.show_recommended_path` — bring the shared recommendation into view.
- `dmxready.prepare_smart_website_intake` — prepare a visible review state only.

The final tool is intentionally non-consequential. It does **not** submit an intake, create an order, charge money, provision a website, or approve a public launch.

## Current pricing reference

The demo mirrors the current public DMXReady Smart Website bands as of August 30, 2026:

| Plan | USD / month | Smart Apps |
| --- | ---: | ---: |
| Core | $295 | up to 2 |
| Plus | $395 | up to 4 |
| Advanced | $495 | up to 6 |

The live commercial authority remains <https://dmxready.com/pricing>.

## WebMCP implementation

The implementation uses the current experimental browser API:

```js
await document.modelContext.registerTool({
  name: 'dmxready.set_visitor_intent',
  description: 'Update the visitor intent shown on this page.',
  inputSchema: { /* JSON Schema */ },
  async execute(input) {
    return setVisitorIntent(input, 'agent');
  }
}, { signal });
```

Registrations use an `AbortSignal`, explicit JSON input schemas, bounded inputs, and fail-closed registration behavior. If the browser does not expose WebMCP, the normal human interface still works.

WebMCP draft/spec: <https://webmachinelearning.github.io/webmcp/>

## Run locally

No build step or dependencies are required.

```bash
python3 -m http.server 8080
```

Then open <http://localhost:8080> in a WebMCP-enabled browser.

For the native API, use ChatGPT's in-app browser (which supports WebMCP for the challenge) or a compatible experimental Chrome setup described by the challenge/spec.

## Verify

```bash
npm test
npm run check
```

The tests cover the current public plan reference, deterministic plan recommendation, truthful budget mismatch behavior, bounded inputs, and the non-consequential intake boundary.

## Challenge delta

**Before August 25, 2026:** DMXReady already had its Smart Website product, business/site intelligence, Smart Apps, managed runtime, owner approval and publication governance.

**Added for the WebMCP Challenge:** this public Agent Ready reference implementation, WebMCP capability projection, five browser tools, shared human/agent page state, visible agent activity evidence, and the explicit safe handoff before consequential actions.

The longer-term DMXReady direction is to generate an Agent Ready capability projection from the same canonical Smart Website/business authority used by the human website—rather than hand-authoring separate agent logic for each site.

## Security / authority boundary

This reference demo contains no production credentials or customer data and performs no server writes. It deliberately demonstrates the architectural boundary we want in production:

- agent capability != unrestricted authority;
- page state != owner-approved business truth;
- preparation != submission;
- preparation != ordering;
- preparation != payment;
- preparation != provisioning;
- preparation != publication;
- an agent action does not replace human approval for consequential operations.

## License

MIT. See [LICENSE](./LICENSE).

## Challenge submission package

- [Judge quick test](./TESTING.md)
- [Devpost submission copy](./SUBMISSION.md)
- [Demo video script](./DEMO_SCRIPT.md)

The required public YouTube video is the only submission artifact not stored here yet.
