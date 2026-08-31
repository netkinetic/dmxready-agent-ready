# Judge Quick Test

## Live URL
https://netkinetic.github.io/dmxready-agent-ready/

## Browser setup
Use ChatGPT's in-app browser with WebMCP support, or Chrome 149+ with `chrome://flags/#enable-webmcp-testing` enabled and the browser restarted.

## Suggested prompt
> I run a plumbing company. I mainly want more qualified leads, I want the website handled for me, I need about two Smart Apps, and I want to stay around $300 per month. Help me choose the right path and prepare it for review.

## Expected WebMCP tool sequence
1. `dmxready.get_smart_website_options`
2. `dmxready.set_visitor_intent`
3. `dmxready.compare_relevant_plans`
4. `dmxready.show_recommended_path`
5. `dmxready.prepare_smart_website_intake`

## Expected visible result
The shared page state should resolve to Core at $295/month with up to two Smart Apps. The recommendation card, visible activity trail, and prepared review state should update on the same page.

The final prepared state must say it is prepared, not submitted. No order, payment, provisioning, customer communication, or public launch should occur.

## Browser without WebMCP
The status indicator should say `WebMCP-ready page · unsupported browser`, and the activity trail should explain that WebMCP is not exposed. The normal form, recommendation, plan comparison, and local preparation button must continue to work for the person.
