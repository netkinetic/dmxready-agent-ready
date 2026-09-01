# DMXReady Agent Ready

> **Websites are becoming interfaces for agents. DMXReady is the platform for building them.**
>
> Smart Websites are websites built for people and AI agents to use together.

DMXReady Agent Ready is a small public WebMCP reference implementation created for the **OpenAI WebMCP Challenge (August–September 2026)**. It demonstrates a normal website exposing explicit browser tools to an AI agent while the person stays on the same page, sees the resulting changes, and keeps control of consequential actions.

## Why this repo exists

DMXReady existed before the challenge. This repository contains only the challenge-period WebMCP reference app and the material needed to run and judge it. It is not the private DMXReady product repository.

## The idea

```text
normal website
    ├── human controls
    └── WebMCP tools for an agent
              ↓
      same visible page state
```

The WebMCP tools call the same page-level application functions used by the human experience. The agent does not operate against a hidden second version of the page.

## Demo journey

Ask an agent using the WebMCP-enabled page:

> I run a plumbing company. I mainly want more qualified leads, I want the website handled for me, I need about two Smart Apps, and I want to stay around $300 per month. Help me choose the right path and prepare it for review.

The page exposes five bounded tools:

- `dmxready.get_smart_website_options`
- `dmxready.set_visitor_intent`
- `dmxready.compare_relevant_plans`
- `dmxready.show_recommended_path`
- `dmxready.prepare_smart_website_intake`

The final tool prepares a visible review state only. It does **not** submit an intake, create an order, charge money, provision a website, or approve a public launch.

## Current pricing reference

| Plan | USD / month | Smart Apps |
| --- | ---: | ---: |
| Core | $295 | up to 2 |
| Plus | $395 | up to 4 |
| Advanced | $495 | up to 6 |

The live commercial reference is <https://dmxready.com/pricing>.

## WebMCP implementation

The implementation uses the experimental browser API:

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

Registrations use explicit JSON input schemas, bounded inputs, an `AbortSignal`, and fail-closed behavior. If WebMCP is unavailable, the normal human interface still works.

WebMCP draft/spec: <https://webmachinelearning.github.io/webmcp/>

## Run locally

No build step or dependencies are required.

```bash
python3 -m http.server 8080
```

Then open <http://localhost:8080> in a WebMCP-enabled browser.

## Verify

```bash
npm test
npm run check
```

The tests cover the public plan reference, deterministic recommendation behavior, bounded inputs, budget handling, and the prepared-not-submitted boundary.

## Challenge delta

**Before August 25, 2026:** DMXReady and its Smart Website product already existed.

**Added during the challenge:** this public Agent Ready WebMCP reference app, the five browser tools, shared visible human/agent page state, Activity evidence, tests, browser acceptance, and the public challenge submission package.

The pre-existing private DMXReady product is not being submitted as challenge-period work and is not required to run this reference app.

## Safety boundary

This demo contains no production credentials or customer-private data and performs no server writes. Preparation is not submission, payment, provisioning, publication, or launch approval.

## License

MIT. See [LICENSE](./LICENSE).

## Challenge submission package

- [Public WebMCP reference design](./ARCHITECTURE.md)
- [Challenge judging map](./JUDGING.md)
- [Final challenge checklist](./FINAL_CHECKLIST.md)
- [Exact Devpost form values](./DEVPOST_FORM.md)
- [Devpost draft receipt](./DEVPOST_DRAFT.md)
- [Judge quick test](./TESTING.md)
- [Devpost submission copy](./SUBMISSION.md)
- [Demo video script](./DEMO_SCRIPT.md)
- [WebMCP browser acceptance](./ACCEPTANCE.md)
- [Public challenge concept](./platform.html)

The required public YouTube video is the remaining submission artifact.
