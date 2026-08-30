export const SMART_WEBSITE_PLANS = Object.freeze([
  Object.freeze({
    id: 'core',
    name: 'Core',
    monthlyUsd: 295,
    smartApps: 2,
    description: 'A complete Smart Website with up to two Smart Apps selected and configured for the business.'
  }),
  Object.freeze({
    id: 'plus',
    name: 'Plus',
    monthlyUsd: 395,
    smartApps: 4,
    description: 'A more capable Smart Website with added visitor guidance, qualification, or owner workflows.'
  }),
  Object.freeze({
    id: 'advanced',
    name: 'Advanced',
    monthlyUsd: 495,
    smartApps: 6,
    description: 'An advanced Smart Website with several Smart Apps working across more involved journeys and workflows.'
  })
]);

export const GOAL_LABELS = Object.freeze({
  leads: 'Generate qualified inquiries',
  bookings: 'Turn visitors into bookings',
  sales: 'Help visitors choose and buy',
  guidance: 'Help visitors find the right next step',
  owner_efficiency: 'Make the website easier to operate'
});

const APP_SUGGESTIONS = Object.freeze({
  leads: ['Visitor Guide', 'ContactAI'],
  bookings: ['Visitor Guide', 'ContactAI'],
  sales: ['Visitor Guide', 'ContactAI', 'Promotion Agent', 'Content Forge'],
  guidance: ['Visitor Guide', 'ContactAI'],
  owner_efficiency: ['Content Forge', 'Promotion Agent']
});

export function normalizeIntent(input = {}) {
  const requestedApps = Number.isFinite(Number(input.requestedApps))
    ? Math.min(6, Math.max(1, Math.round(Number(input.requestedApps))))
    : 2;
  const monthlyBudget = Number.isFinite(Number(input.monthlyBudget))
    ? Math.max(0, Math.round(Number(input.monthlyBudget)))
    : 300;

  const goal = Object.hasOwn(GOAL_LABELS, input.goal) ? input.goal : 'leads';
  const management = ['done_for_me', 'collaborative', 'self_directed'].includes(input.management)
    ? input.management
    : 'done_for_me';

  return {
    businessName: String(input.businessName ?? '').trim().slice(0, 80),
    businessType: String(input.businessType ?? '').trim().slice(0, 100),
    goal,
    requestedApps,
    monthlyBudget,
    management
  };
}

export function recommendPlan(intentInput = {}) {
  const intent = normalizeIntent(intentInput);
  const plan = SMART_WEBSITE_PLANS.find((candidate) => candidate.smartApps >= intent.requestedApps)
    ?? SMART_WEBSITE_PLANS.at(-1);
  const withinBudget = intent.monthlyBudget >= plan.monthlyUsd;
  const suggestedApps = (APP_SUGGESTIONS[intent.goal] ?? APP_SUGGESTIONS.leads).slice(0, plan.smartApps);

  const reasons = [
    `${plan.name} is the smallest standard band that supports ${intent.requestedApps} Smart App${intent.requestedApps === 1 ? '' : 's'}.`,
    `Your primary goal is “${GOAL_LABELS[intent.goal]}”.`
  ];
  if (withinBudget) {
    reasons.push(`Its $${plan.monthlyUsd} USD monthly price is within the $${intent.monthlyBudget} budget you provided.`);
  } else {
    reasons.push(`Its $${plan.monthlyUsd} USD monthly price is above the $${intent.monthlyBudget} budget you provided, so a human should review scope before ordering.`);
  }

  return {
    intent,
    plan,
    withinBudget,
    suggestedApps,
    reasons,
    nextStep: 'Prepare a private Smart Website direction for human review before any order or public launch.'
  };
}

export function getOptions() {
  return SMART_WEBSITE_PLANS.map((plan) => ({ ...plan }));
}

export function prepareIntake(intentInput = {}) {
  const recommendation = recommendPlan(intentInput);
  return {
    status: 'prepared_not_submitted',
    recommendation,
    humanReviewRequired: true,
    paymentCreated: false,
    publicationAllowed: false,
    message: 'The page prepared a reviewable direction only. Nothing was submitted, purchased, provisioned, or published.'
  };
}
