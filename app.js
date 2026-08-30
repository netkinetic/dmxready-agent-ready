import {
  GOAL_LABELS,
  getOptions,
  normalizeIntent,
  prepareIntake,
  recommendPlan
} from './src/agent-ready.js';

const $ = (selector) => document.querySelector(selector);
const els = {
  form: $('#intentForm'),
  businessName: $('#businessName'),
  businessType: $('#businessType'),
  goal: $('#goal'),
  monthlyBudget: $('#monthlyBudget'),
  requestedApps: $('#requestedApps'),
  management: $('#management'),
  recommendedPlan: $('#recommendedPlan'),
  recommendedPrice: $('#recommendedPrice'),
  recommendationReason: $('#recommendationReason'),
  budgetFit: $('#budgetFit'),
  suggestedApps: $('#suggestedApps'),
  planGrid: $('#planGrid'),
  prepareIntake: $('#prepareIntake'),
  preparedSection: $('#preparedSection'),
  preparedTitle: $('#preparedTitle'),
  preparedSummary: $('#preparedSummary'),
  activityLog: $('#activityLog'),
  protocolStatus: $('#protocolStatus'),
  protocolStatusText: $('#protocolStatusText')
};

let state = {
  intent: normalizeIntent({ goal: 'leads', requestedApps: 2, monthlyBudget: 300, management: 'done_for_me' }),
  recommendation: null,
  prepared: null
};

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  })[character]);
}

function logActivity(actor, message) {
  const item = document.createElement('li');
  item.innerHTML = `<span class="actor">${escapeHtml(actor)}</span><span>${escapeHtml(message)}</span>`;
  els.activityLog.prepend(item);
  while (els.activityLog.children.length > 7) els.activityLog.lastElementChild.remove();
}

function renderPlanCards() {
  els.planGrid.innerHTML = getOptions().map((plan) => `
    <article class="plan-card" data-plan="${plan.id}" data-active="false">
      <div class="mini-label">Smart Website</div>
      <h3>${plan.name}</h3>
      <div class="price">$${plan.monthlyUsd} USD / month</div>
      <p>${plan.description}</p>
      <strong>Up to ${plan.smartApps} Smart Apps</strong>
    </article>
  `).join('');
}

function syncForm(intent) {
  els.businessName.value = intent.businessName;
  els.businessType.value = intent.businessType;
  els.goal.value = intent.goal;
  els.monthlyBudget.value = intent.monthlyBudget;
  els.requestedApps.value = String(intent.requestedApps);
  els.management.value = intent.management;
}

function renderRecommendation({ announce = false, actor = 'system' } = {}) {
  state.recommendation = recommendPlan(state.intent);
  const { plan, withinBudget, suggestedApps, reasons } = state.recommendation;
  els.recommendedPlan.textContent = plan.name;
  els.recommendedPrice.innerHTML = `$${plan.monthlyUsd} <span>USD / month</span>`;
  els.recommendationReason.textContent = reasons.join(' ');
  els.budgetFit.textContent = withinBudget ? 'Within budget' : 'Needs budget review';
  els.budgetFit.dataset.fit = String(withinBudget);
  els.suggestedApps.innerHTML = suggestedApps.map((app) => `<span>${escapeHtml(app)}</span>`).join('');
  document.querySelectorAll('.plan-card').forEach((card) => {
    card.dataset.active = String(card.dataset.plan === plan.id);
  });
  if (announce) logActivity(actor, `Updated the visible recommendation to ${plan.name} for “${GOAL_LABELS[state.intent.goal]}”.`);
  return state.recommendation;
}

function intentFromForm() {
  return normalizeIntent({
    businessName: els.businessName.value,
    businessType: els.businessType.value,
    goal: els.goal.value,
    monthlyBudget: Number(els.monthlyBudget.value),
    requestedApps: Number(els.requestedApps.value),
    management: els.management.value
  });
}

function setVisitorIntent(input, actor = 'agent') {
  state.intent = normalizeIntent({ ...state.intent, ...input });
  state.prepared = null;
  els.preparedSection.hidden = true;
  syncForm(state.intent);
  const recommendation = renderRecommendation({ announce: true, actor });
  return {
    ok: true,
    visibleStateUpdated: true,
    intent: recommendation.intent,
    recommendation: recommendation.plan,
    withinBudget: recommendation.withinBudget,
    suggestedApps: recommendation.suggestedApps,
    consequentialActionTaken: false
  };
}

function showRecommendedPath(actor = 'agent') {
  $('#workspace').scrollIntoView({ behavior: 'smooth', block: 'start' });
  logActivity(actor, `Brought the ${state.recommendation.plan.name} recommendation into view.`);
  return {
    ok: true,
    visibleStateUpdated: true,
    recommendation: state.recommendation.plan,
    consequentialActionTaken: false
  };
}

function prepareVisibleIntake(actor = 'human') {
  state.prepared = prepareIntake(state.intent);
  const { plan } = state.prepared.recommendation;
  const name = state.intent.businessName || 'this business';
  els.preparedTitle.textContent = `${plan.name} direction prepared for ${name}.`;
  els.preparedSummary.textContent = `${GOAL_LABELS[state.intent.goal]}. ${plan.name} supports up to ${plan.smartApps} Smart Apps at $${plan.monthlyUsd} USD/month. This is a local review state only.`;
  els.preparedSection.hidden = false;
  els.preparedSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  logActivity(actor, 'Prepared a reviewable Smart Website direction. Nothing was submitted or purchased.');
  return state.prepared;
}

els.form.addEventListener('submit', (event) => {
  event.preventDefault();
  setVisitorIntent(intentFromForm(), 'human');
});
els.prepareIntake.addEventListener('click', () => prepareVisibleIntake('human'));

async function registerWebMCP() {
  const modelContext = document.modelContext;
  if (!modelContext?.registerTool) {
    els.protocolStatus.dataset.state = 'unsupported';
    els.protocolStatusText.textContent = 'WebMCP-ready page · unsupported browser';
    logActivity('system', 'WebMCP is not exposed by this browser. The human interface still works normally.');
    return;
  }

  const registration = new AbortController();
  const commonMutationAnnotation = { readOnlyHint: false, untrustedContentHint: false };
  const tools = [
    {
      name: 'dmxready.get_smart_website_options',
      description: 'Read the current DMXReady Smart Website plan options shown by this page. This does not change the page or create an order.',
      annotations: { readOnlyHint: true, untrustedContentHint: false },
      inputSchema: { type: 'object', properties: {}, additionalProperties: false },
      async execute() {
        logActivity('agent', 'Read the Smart Website options exposed by this page.');
        return { plans: getOptions(), source: 'current page reference data', consequentialActionTaken: false };
      }
    },
    {
      name: 'dmxready.set_visitor_intent',
      description: 'Set the visitor’s business context on this page and visibly update the shared recommendation. This is local page state only and does not submit data, purchase anything, or publish a website.',
      annotations: commonMutationAnnotation,
      inputSchema: {
        type: 'object',
        properties: {
          businessName: { type: 'string', maxLength: 80, description: 'Business name, if known.' },
          businessType: { type: 'string', maxLength: 100, description: 'Plain-language type of business.' },
          goal: { type: 'string', enum: ['leads','bookings','sales','guidance','owner_efficiency'], description: 'Primary website goal.' },
          monthlyBudget: { type: 'number', minimum: 0, maximum: 5000, description: 'Approximate monthly website budget in USD.' },
          requestedApps: { type: 'integer', minimum: 1, maximum: 6, description: 'Approximate number of Smart Apps needed.' },
          management: { type: 'string', enum: ['done_for_me','collaborative','self_directed'], description: 'How hands-on the owner wants to be.' }
        },
        additionalProperties: false
      },
      async execute(input) { return setVisitorIntent(input, 'agent'); }
    },
    {
      name: 'dmxready.compare_relevant_plans',
      description: 'Compare the current visitor intent with DMXReady Core, Plus, and Advanced, visibly highlight the smallest standard band that fits, and explain any budget mismatch. No order is created.',
      annotations: commonMutationAnnotation,
      inputSchema: {
        type: 'object',
        properties: {
          monthlyBudget: { type: 'number', minimum: 0, maximum: 5000 },
          requestedApps: { type: 'integer', minimum: 1, maximum: 6 },
          goal: { type: 'string', enum: ['leads','bookings','sales','guidance','owner_efficiency'] }
        },
        additionalProperties: false
      },
      async execute(input) {
        const result = setVisitorIntent(input, 'agent');
        return { ...result, reasons: state.recommendation.reasons, nextStep: state.recommendation.nextStep };
      }
    },
    {
      name: 'dmxready.show_recommended_path',
      description: 'Bring the current recommendation panel into view so the human and agent can review the same website state together.',
      annotations: commonMutationAnnotation,
      inputSchema: { type: 'object', properties: {}, additionalProperties: false },
      async execute() { return showRecommendedPath('agent'); }
    },
    {
      name: 'dmxready.prepare_smart_website_intake',
      description: 'Prepare a visible, reviewable Smart Website direction on this page from the current intent. It deliberately does not submit an intake, create an account or order, charge money, provision a site, or authorize public launch.',
      annotations: commonMutationAnnotation,
      inputSchema: { type: 'object', properties: {}, additionalProperties: false },
      async execute() { return prepareVisibleIntake('agent'); }
    }
  ];

  try {
    for (const tool of tools) await modelContext.registerTool(tool, { signal: registration.signal });
    els.protocolStatus.dataset.state = 'ready';
    els.protocolStatusText.textContent = `${tools.length} WebMCP tools available`;
    logActivity('system', `Registered ${tools.length} governed WebMCP tools for this page.`);
    window.addEventListener('pagehide', () => registration.abort(), { once: true });
  } catch (error) {
    registration.abort();
    els.protocolStatus.dataset.state = 'unsupported';
    els.protocolStatusText.textContent = 'WebMCP registration blocked';
    logActivity('system', `WebMCP registration failed closed: ${error?.name || 'unknown error'}.`);
  }
}

renderPlanCards();
syncForm(state.intent);
renderRecommendation();
logActivity('human', 'Opened the Agent Ready Smart Website.');
registerWebMCP();
