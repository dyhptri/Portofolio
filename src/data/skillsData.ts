export interface SkillTickerItem {
  name: string;
  category: 'QA' | 'Design' | 'Backend/DB' | 'Analysis' | 'Tools';
  highlight?: boolean;
}

export const tickerRowOne: SkillTickerItem[] = [
  { name: 'Cypress E2E Testing', category: 'QA', highlight: true },
  { name: 'Manual Black-Box Testing', category: 'QA', highlight: true },
  { name: 'Figma Design Systems', category: 'Design', highlight: true },
  { name: 'Test Scenario Authoring', category: 'QA' },
  { name: 'Bug Reporting & Defect Triage', category: 'QA', highlight: true },
  { name: 'Integration Testing', category: 'QA' },
  { name: 'Boundary Value Analysis (BVA)', category: 'QA' },
  { name: 'Equivalence Partitioning', category: 'QA' },
  { name: 'Regression Test Suites', category: 'QA' },
  { name: 'System Usability Scale (SUS)', category: 'Design' }
];

export const tickerRowTwo: SkillTickerItem[] = [
  { name: 'UML Modeling (SRS/SKPL)', category: 'Analysis', highlight: true },
  { name: 'Laravel Framework', category: 'Backend/DB' },
  { name: 'Supabase Relational Cloud', category: 'Backend/DB', highlight: true },
  { name: 'MySQL & SQL Querying', category: 'Backend/DB' },
  { name: 'Midtrans Payment Gateway', category: 'Backend/DB' },
  { name: 'Tailwind CSS', category: 'Design' },
  { name: 'Git & GitHub Version Control', category: 'Tools', highlight: true },
  { name: 'User Acceptance Testing (UAT)', category: 'QA', highlight: true },
  { name: 'High-Fidelity Prototyping', category: 'Design' },
  { name: 'Mobile APK Testing', category: 'QA' },
  { name: 'Business Process Modeling', category: 'Analysis' }
];

export interface PyramidLevel {
  id: string;
  levelNumber: number;
  title: string;
  subtitle: string;
  sharePercentage: string;
  color: string;
  textColor: string;
  borderColor: string;
  bgColor: string;
  description: string;
  approach: string;
  toolsUsed: string[];
  exampleScenario: {
    target: string;
    description: string;
    assertion: string;
  };
}

export const testingPyramidLevels: PyramidLevel[] = [
  {
    id: 'e2e',
    levelNumber: 1,
    title: 'E2E Testing (Cypress Automation)',
    subtitle: 'End-to-End User Journeys & Critical Business Paths',
    sharePercentage: '15% of Suite',
    color: '#38bdf8',
    textColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/40',
    bgColor: 'bg-cyan-500/10',
    description: 'Automated validation of complete user journeys simulating real browser interactions from login through multi-step transactions to final state mutation.',
    approach: 'Focus strictly on high-impact revenue and contractual paths (e.g. SORAI B2B weight inspection -> price recalculation -> Midtrans escrow payout trigger) to ensure critical reliability without brittle test execution.',
    toolsUsed: ['Cypress 13+', 'JavaScript / TypeScript', 'Chai Assertions', 'CI/CD Headless Runs'],
    exampleScenario: {
      target: 'SORAI Contract Payout Flow',
      description: 'Simulates cooperative manager filling incoming commodity weight, asserts auto-calculated 1.75% moisture shrinkage, and verifies payout button activates.',
      assertion: "cy.get('[data-testid=\"payout-amount\"]').should('contain.text', 'Rp 24,562,500')"
    }
  },
  {
    id: 'integration',
    levelNumber: 2,
    title: 'Integration & API Testing',
    subtitle: 'Service Contracts, Webhooks & Supabase Data Flows',
    sharePercentage: '25% of Suite',
    color: '#06b6d4',
    textColor: 'text-cyan-300',
    borderColor: 'border-cyan-400/40',
    bgColor: 'bg-cyan-500/5',
    description: 'Validating boundary interfaces between frontend clients, relational database triggers, third-party payment gateways, and backend endpoints.',
    approach: 'Testing HTTP status codes, schema consistency, idempotency keys, race condition safety, and webhook payload integrity using Postman collections and automated API assertions.',
    toolsUsed: ['Postman', 'RESTful API Contracts', 'Supabase Client', 'JSON Schema Validation'],
    exampleScenario: {
      target: 'Midtrans Webhook Idempotency',
      description: 'Sends identical payment confirmation payload twice within 100ms to guarantee no duplicate ledger entry is created in Supabase.',
      assertion: 'assert.response.status === 200 && assert.db.transactions.count === 1'
    }
  },
  {
    id: 'unit',
    levelNumber: 3,
    title: 'Unit Testing Logic',
    subtitle: 'Deterministic Formulas & Business Rule Calculations',
    sharePercentage: '30% of Suite',
    color: '#10b981',
    textColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/40',
    bgColor: 'bg-emerald-500/10',
    description: 'Verifying pure algorithmic functions in isolation, such as weight shrinkage percentages, tier discount brackets, and date/time geofence window checks.',
    approach: 'Authoring deterministic test specs testing edge cases, zeroes, negative values, float precision quirks, and boundary values.',
    toolsUsed: ['Jest', 'Mocha / Chai', 'Pure Function Mocks'],
    exampleScenario: {
      target: 'Shrinkage Formula: calculateNetWeight(dispatchKg, arrivalKg, maxToleranceRate)',
      description: 'Tests 982.50kg arrival from 1000kg with 2.5% max tolerance. Asserts result flag is true with exact float precision.',
      assertion: 'expect(calculateNetWeight(1000, 982.5, 0.025).isWithinTolerance).toBe(true)'
    }
  },
  {
    id: 'manual',
    levelNumber: 4,
    title: 'Manual & Usability Testing (Base)',
    subtitle: 'Black-Box Exploratory, SUS Heuristics & RBAC Bounds',
    sharePercentage: '30% of Suite',
    color: '#059669',
    textColor: 'text-emerald-300',
    borderColor: 'border-emerald-600/40',
    bgColor: 'bg-emerald-600/10',
    description: 'Foundational human-centered testing: probing unexpected user behavior, cross-device quirks, accessibility contrast, and System Usability Scale (SUS) heuristics.',
    approach: 'Systematic exploratory testing using equivalence partitioning, boundary tests, network throttling (flaky 3G on Android APKs), and multi-role permission boundaries (RBAC).',
    toolsUsed: ['Black-Box Testing', 'System Usability Scale (SUS)', 'Real Android Devices', 'Screen Readers / DevTools'],
    exampleScenario: {
      target: 'BuildMatch Mobile APK Offline State',
      description: 'Simulates contractor on a remote building site losing cell coverage midway through photo proof upload; verifies app caches payload and auto-retries upon reconnection.',
      assertion: 'Offline queue persists 4 photos; uploads resume cleanly without UI crash or duplicate draft.'
    }
  }
];

