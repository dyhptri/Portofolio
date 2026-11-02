import type { QAArtifactItem } from '../types';

export const qaMethodologyPhases = [
  {
    step: '01',
    phase: 'Requirements Analysis',
    tagline: 'Deconstructing SRS into Testable Edge Cases',
    description: 'Thorough walkthrough of software requirement specifications (SKPL/SRS), acceptance criteria, boundary limits, and user stories. Identifying ambiguities before development starts.',
    deliverables: ['Equivalence Partitioning Matrix', 'Boundary Value Analysis (BVA)', 'Acceptance Criteria Checklists'],
    icon: 'Search'
  },
  {
    step: '02',
    phase: 'Test Plan & Matrix Design',
    tagline: 'Structuring Comprehensive Verification Matrices',
    description: 'Drafting structured Test Scenarios with explicit preconditions, deterministic input data, expected system behaviors, and positive/negative test coverage.',
    deliverables: ['Test Case Matrices (Excel/Jira)', 'Role-Based Access Grids (RBAC)', 'Traceability Matrix'],
    icon: 'FileSpreadsheet'
  },
  {
    step: '03',
    phase: 'Execution & Automation',
    tagline: 'Dual-Track Cypress Scripts & Exploratory Passes',
    description: 'Writing maintainable Cypress E2E scripts for repetitive critical paths while conducting rigorous exploratory and black-box manual passes for UX edge cases.',
    deliverables: ['Cypress Automation Suites', 'Regression Test Runs', 'Cross-Browser/Device Audits'],
    icon: 'PlayCircle'
  },
  {
    step: '04',
    phase: 'Defect Logging & Retesting',
    tagline: 'Deterministic Root-Cause Triage & Regression',
    description: 'Logging clean bug tickets with exact steps to reproduce, environment configs, network payloads, severity/priority triage, and conducting re-tests upon patch deployment.',
    deliverables: ['Sanitized Bug Reports', 'Defect Severity Triage', 'Regression Sign-Off Reports'],
    icon: 'Bug'
  }
];

export const artifactsVaultData: QAArtifactItem[] = [
  {
    id: 'ART-CYP-001',
    title: 'Cypress E2E Test Suite: B2B Weight Shrinkage Reconciliation',
    category: 'Cypress E2E',
    project: 'SORAI B2B Platform',
    date: '2024-11',
    status: 'Automated',
    severity: 'High',
    summary: 'Automated end-to-end regression script asserting commodity shrinkage formulas, dynamic tolerance flags (1.5% - 3.0%), and escrow disbursement triggers.',
    tags: ['Cypress', 'JavaScript', 'Regression', 'E2E', 'Automated Test'],
    details: {
      preconditions: 'Supplier contract active with 2.5% allowable weight shrinkage clause. Mock authentication session token injected.',
      testScriptSnippet: `describe('SORAI Shrinkage Tolerance Algorithm [E2E]', () => {
  it('Verifies acceptable shrinkage computes net payout without error', () => {
    cy.intercept('POST', '/api/v1/inspections/validate').as('postValidate');
    cy.get('[data-testid="contract-weight"]').should('contain', '1000');
    cy.get('#input-received-weight').type('982.5');
    cy.get('#btn-run-calculation').click();
    cy.wait('@postValidate').its('response.statusCode').should('eq', 200);
    cy.get('.status-badge')
      .should('have.text', 'APPROVED: Within 2.5% Tolerance')
      .and('have.class', 'bg-emerald-500/20');
  });
});`,
      expectedResult: 'System marks transaction valid, displays exact payout of Rp 24,562,500, and enables payment gateway dispatch.'
    }
  },
  {
    id: 'ART-BUG-002',
    title: 'DEFECT-BM-042: Race Condition in Milestone Escrow Concurrent Disbursal',
    category: 'Bug Report',
    project: 'BuildMatch Mobile APK',
    date: '2024-10',
    status: 'Resolved',
    severity: 'Critical',
    summary: 'Double-tapping the mobile escrow release button under high network packet jitter triggered duplicate debit transactions from client wallet.',
    tags: ['Defect Log', 'Security/Integrity', 'Critical Severity', 'Idempotency', 'Mobile APK'],
    details: {
      preconditions: 'Mobile device connected to simulated 3G high-latency network (800ms RTT). Client balance > Rp 50,000,000.',
      stepsToReproduce: [
        '1. Open BuildMatch APK -> Project #402 Milestone 2 Release screen.',
        '2. Tap "Approve & Release Funds" rapidly twice within 250 milliseconds.',
        '3. Inspect backend ledger transaction logs and client escrow holding.'
      ],
      expectedResult: 'First tap issues idempotent transaction; second tap is debounced and ignored with UI feedback "Processing...".',
      actualResult: 'Two separate debit rows created in PostgreSQL transaction table; duplicate payment issued to contractor account.',
      architectureNotes: 'Root Cause: Mobile UI lacked button disabling during pending promise, and backend lacked unique idempotent key per milestone ID.'
    }
  },
  {
    id: 'ART-MAT-003',
    title: 'Manual Black-Box Test Matrix: Multi-Role RBAC Security Bounds',
    category: 'Manual Test Matrix',
    project: 'BuildMatch Mobile Platform',
    date: '2024-09',
    status: 'Verified',
    severity: 'High',
    summary: '28-point authorization and permission matrix ensuring strict role segregation among Property Clients, Architects, and General Contractors.',
    tags: ['Manual QA', 'RBAC', 'Black-Box', 'Security Boundaries', 'Mobile'],
    details: {
      preconditions: 'Three authenticated sessions established: User A (Client), User B (Architect), User C (Contractor).',
      stepsToReproduce: [
        'Attempt to view unselected architect submissions from Contractor C profile.',
        'Attempt to approve architectural blueprint revision as Contractor.',
        'Verify client cannot directly edit structural engineering calculations.'
      ],
      expectedResult: 'All unauthorized boundary transitions must return 403 Forbidden with zero data leaks in response headers.',
      actualResult: 'Passed 28/28 checks after patch deployment.'
    }
  },
  {
    id: 'ART-SRS-004',
    title: 'SKPL-INLET-02: Digital Attendance Geofence & Dynamic QR State Machine',
    category: 'SRS/UML Spec',
    project: 'InLET Polinema Research Lab',
    date: '2024-08',
    status: 'Verified',
    severity: 'Medium',
    summary: 'Formal requirements specification and state-machine diagram documenting student digital check-in timeout boundaries and geofence verification logic.',
    tags: ['System Analysis', 'SRS / SKPL', 'UML', 'State Machine', 'Requirements'],
    details: {
      architectureNotes: `[Dynamic QR State Flow]
Generated (TTL: 45s) --> Scanned by Mobile --> Geolocation Hash Checked (Radius <= 15m)
  |-- If Valid: Timestamp Logged -> Researcher Status = PRESENT -> QR Rotates
  |-- If Expired: Return Error 410 Gone -> Prompt User to Rescan Current Code
  |-- If Outside Geofence: Reject Attendance -> Flag Warning to Lab Admin Log`,
      expectedResult: 'Complete functional specification adopted by development team; zero disputed attendance claims recorded.'
    }
  },
  {
    id: 'ART-UAT-005',
    title: 'User Acceptance Testing (UAT) Sign-Off Matrix: Lab Hardware Checkout',
    category: 'Manual Test Matrix',
    project: 'InLET Polinema Research Lab',
    date: '2024-08',
    status: 'Verified',
    severity: 'Medium',
    summary: 'Formal UAT protocol executed with 40+ student researchers and 4 faculty mentors testing hardware borrowing, scheduling conflicts, and condition logs.',
    tags: ['UAT', 'Hardware Custody', 'User Acceptance', 'Sign-Off'],
    details: {
      preconditions: 'High-value equipment (NVIDIA Workstation, VR Headsets) cataloged in MySQL repository.',
      expectedResult: '100% of testers successfully completed borrowing and return workflows without staff assistance. 98.5% approval rating achieved.'
    }
  }
];
