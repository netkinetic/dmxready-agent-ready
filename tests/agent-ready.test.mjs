import test from 'node:test';
import assert from 'node:assert/strict';
import { getOptions, normalizeIntent, prepareIntake, recommendPlan } from '../src/agent-ready.js';

test('public plan reference matches the current three Smart Website bands', () => {
  assert.deepEqual(getOptions().map(({ name, monthlyUsd, smartApps }) => ({ name, monthlyUsd, smartApps })), [
    { name: 'Core', monthlyUsd: 295, smartApps: 2 },
    { name: 'Plus', monthlyUsd: 395, smartApps: 4 },
    { name: 'Advanced', monthlyUsd: 495, smartApps: 6 }
  ]);
});

test('recommendation selects the smallest band that fits requested app capacity', () => {
  assert.equal(recommendPlan({ requestedApps: 2, monthlyBudget: 300 }).plan.id, 'core');
  assert.equal(recommendPlan({ requestedApps: 3, monthlyBudget: 500 }).plan.id, 'plus');
  assert.equal(recommendPlan({ requestedApps: 6, monthlyBudget: 600 }).plan.id, 'advanced');
});

test('budget mismatch is truthful rather than silently changing the requirement', () => {
  const result = recommendPlan({ requestedApps: 4, monthlyBudget: 300 });
  assert.equal(result.plan.id, 'plus');
  assert.equal(result.withinBudget, false);
  assert.match(result.reasons.join(' '), /above the \$300 budget/);
});

test('intent inputs are bounded and normalized', () => {
  const intent = normalizeIntent({ requestedApps: 99, monthlyBudget: -20, goal: 'invented' });
  assert.equal(intent.requestedApps, 6);
  assert.equal(intent.monthlyBudget, 0);
  assert.equal(intent.goal, 'leads');
});

test('prepare intake remains non-consequential and requires human review', () => {
  const prepared = prepareIntake({ businessName: 'Northside Plumbing', requestedApps: 2, monthlyBudget: 300 });
  assert.equal(prepared.status, 'prepared_not_submitted');
  assert.equal(prepared.humanReviewRequired, true);
  assert.equal(prepared.paymentCreated, false);
  assert.equal(prepared.publicationAllowed, false);
});
