import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'sorai',
    title: 'SORAI',
    subtitle: 'B2B Agricultural Supply Chain & MSME Partnership Ecosystem',
    category: 'Web Platform • QA Automation & UI/UX',
    tag: 'Featured Project',
    period: '2024 – 2025',
    role: ['Lead QA Automation (Cypress)', 'UI/UX Designer', 'Requirements Analyst'],
    tools: ['Cypress', 'Laravel', 'Supabase', 'Figma', 'Midtrans API', 'Tailwind CSS'],
    summary: 'A web-based enterprise platform streamlining raw commodity procurement, Collaborative Supply Planning (CSP), quality grading, and contract fulfillment between MSME food producers and rural agricultural cooperatives.',
    challenge: 'Agricultural commodities suffer non-linear weight shrinkage during transit (moisture loss) and erratic delivery times. Manual calculation often led to financial disputes, payment settlement mismatch on Midtrans, and slow contract closure.',
    solution: 'Designed and validated a dynamic weight shrinkage tolerance matrix with automated Cypress regression test suites, combined with a high-fidelity supplier quotation portal in Figma to give real-time contract visibility.',
    impactMetrics: [
      { label: 'E2E Test Coverage', value: '100% Critical Flows' },
      { label: 'Regression Speed', value: '4.2x Faster' },
      { label: 'Figma UI Views', value: '35+ High-Fi Screens' },
      { label: 'Payment Gateway Validation', value: 'Zero Settlement Drift' },
    ],
    qaArtifacts: {
      title: 'Cypress E2E Automation Suite & Verification Specs',
      description: 'Fully automated end-to-end regression testing suites validating the Collaborative Supply Planning (CSP) pipeline, tiered weight shrinkage thresholds, and Midtrans webhook token reconciliation.',
      codeSnippet: `// Cypress E2E Spec: sorai_contract_settlement.cy.ts
describe('SORAI - B2B Contract Settlement with Weight Shrinkage', () => {
  beforeEach(() => {
    cy.loginAsSupplier('supplier_koperasi_malang@sorai.id');
    cy.visit('/dashboard/contracts/CT-2025-089');
  });

  it('TC-01: Correctly auto-calculates net payout within 2.5% shrinkage tolerance', () => {
    cy.get('[data-testid="shipped-weight-kg"]').should('have.text', '1,000.00');
    cy.get('[data-testid="received-weight-input"]').clear().type('982.50');
    cy.get('[data-testid="qc-moisture-rate"]').type('12.4');
    
    // Trigger automated tolerance audit
    cy.get('[data-testid="btn-verify-shrinkage"]').click();

    // Assertions
    cy.get('[data-testid="shrinkage-status"]')
      .should('be.visible')
      .and('contain.text', 'Within Acceptable Tolerance (1.75%)')
      .and('have.class', 'text-emerald-400');

    cy.get('[data-testid="payout-amount"]').should('contain.text', 'Rp 24,562,500');
    cy.get('[data-testid="btn-generate-midtrans-invoice"]').should('be.enabled');
  });

  it('TC-02: Flags discrepancy and freezes escrow if shrinkage exceeds 3.0%', () => {
    cy.get('[data-testid="received-weight-input"]').clear().type('960.00'); // 4.0% loss
    cy.get('[data-testid="btn-verify-shrinkage"]').click();

    cy.get('[data-testid="modal-audit-warning"]')
      .should('be.visible')
      .and('contain.text', 'Critical Shrinkage Breach: 4.00%');
    cy.get('[data-testid="btn-generate-midtrans-invoice"]').should('be.disabled');
  });
});`,
      testCases: [
        {
          id: 'TC-SORAI-001',
          title: 'Automated Weight Shrinkage Tolerance Algorithm Validation',
          type: 'E2E',
          precondition: 'Supplier contract active with 2.5% maximum allowable shrinkage limit.',
          steps: [
            'Log into supplier dashboard using test fixtures',
            'Input incoming consignment weight: 982.50 kg against 1,000.00 kg dispatch weight',
            'Submit inspection metrics and assert tolerance validation flag'
          ],
          expected: 'System computes 1.75% shrinkage, marks as acceptable, and activates payment disbursement CTA.',
          status: 'PASSED'
        },
        {
          id: 'TC-SORAI-002',
          title: 'Midtrans Snap Token Generation & Signature Hash Integrity',
          type: 'Integration',
          precondition: 'Inspection approved and final net settlement calculated.',
          steps: [
            'Trigger POST /api/v1/payments/generate-token with idempotency key',
            'Verify SHA-512 order signature hash matches Midtrans server key',
            'Mock 200 OK Snap redirect URL response'
          ],
          expected: 'Midtrans token returned with valid merchant ID and matching gross transaction amount.',
          status: 'PASSED'
        },
        {
          id: 'TC-SORAI-003',
          title: 'Supabase Real-time Stock Sync across Cooperative Nodes',
          type: 'Integration',
          precondition: 'Commodity inventory state registered in Supabase relational store.',
          steps: [
            'Dispatch 500 kg raw robusta coffee batch from Node A',
            'Observe WebSocket subscription event on Central Admin monitoring board'
          ],
          expected: 'Central inventory updates latency < 250ms with zero record collision.',
          status: 'PASSED'
        }
      ]
    },
    uiDesign: {
      figmaStats: { screens: 35, components: 84, designSystem: 'SORAI Design Tokens v1.2' },
      keyFeatures: [
        'Supplier Quotation & Bidding Matrix with dynamic margin indicators',
        'Inspection & QC grading dashboard with high-contrast data visualization',
        'Contract milestones and real-time status tracker (Draft -> Active -> Settled)',
        'Accessible color-coded alert system compliant with WCAG AA guidelines'
      ],
      colorPalette: [
        { name: 'Emerald Precision', hex: '#10b981' },
        { name: 'Cyan Technical', hex: '#38bdf8' },
        { name: 'Slate Canvas', hex: '#0f172a' },
        { name: 'Amber Notice', hex: '#f59e0b' }
      ],
      designNotes: 'Built adhering to atomic design methodology in Figma. Components include interactive data tables with column sortability, responsive modals, status badges with micro-interactions, and financial summary cards.',
      screenMockups: [
        { title: 'B2B Supplier Dashboard', subtitle: 'Real-time order intake and contract fulfillment status', aspect: '16/9', previewBadge: 'Figma Auto-Layout' },
        { title: 'Shrinkage & QC Inspection View', subtitle: 'Grading metrics, moisture sensor input & dispute logger', aspect: '16/9', previewBadge: 'Interactive State' },
        { title: 'Escrow & Midtrans Settlement', subtitle: 'Split disbursement calculation & invoice generator', aspect: '16/9', previewBadge: 'Design Token System' }
      ]
    },
    systemAnalysis: {
      srsArtifacts: [
        'SKPL-SORAI-01: Functional Specification for Commodity Weight Reconciliation',
        'SKPL-SORAI-02: Payment Escrow State Machine & Midtrans Webhook Dispatch',
        'SKPL-SORAI-03: Multi-tenant Role Access Hierarchy (Admin, Supplier, Buyer)'
      ],
      diagrams: [
        { name: 'Use Case Diagram', description: 'Defined 14 core use cases spanning 3 external actors and payment gateway.', type: 'UML' },
        { name: 'Activity Diagram: Settlement Flow', description: 'Models fallback conditions when commodity inspection reveals out-of-spec shrinkage.', type: 'Activity Flow' },
        { name: 'Relational ERD', description: 'Normalized database schema connecting cooperatives, contracts, batches, and transactions.', type: 'Database ERD' }
      ]
    },
    links: {
      github: 'https://github.com/dyhptri',
      figma: 'https://figma.com/@dyhptri',
      liveDemo: 'https://github.com/dyhptri/sorai-qa-artifacts'
    }
  },
  {
    id: 'buildmatch',
    title: 'BuildMatch',
    subtitle: 'Mobile Marketplace for Architects, Contractors & Property Owners',
    category: 'Mobile APK • Manual QA & Mobile UI',
    tag: 'Mobile Engineering',
    period: '2024',
    role: ['Lead Manual QA Engineer', 'Figma Mobile UI/UX Designer', 'RBAC Matrix Architect'],
    tools: ['Figma', 'Manual Black-Box Testing', 'Flutter APK', 'UML', 'Jira / Trello'],
    summary: 'A cross-platform mobile marketplace connecting prospective homeowners with certified architects and vetted building contractors through transparent stage-gate bidding and escrow payments.',
    challenge: 'Coordination between 3 distinct stakeholder roles (Client, Architect, Contractor) requires complex role-based permissions (RBAC). A contractor must not view unselected competitor bids, while clients must not unlock milestone funds until verified by the architect.',
    solution: 'Designed 30+ interactive high-fidelity mobile screens in Figma and conducted comprehensive manual black-box test matrices across 45 edge cases, catching critical race conditions in milestone fund releases prior to APK staging release.',
    impactMetrics: [
      { label: 'Mobile Screens', value: '30+ High-Fi Views' },
      { label: 'Edge Cases Tested', value: '45+ Scenarios' },
      { label: 'Critical Defects Caught', value: '8 Showstoppers' },
      { label: 'Persona Roles Covered', value: '3 Complete Flows' },
    ],
    qaArtifacts: {
      title: 'Multi-Actor Black-Box Test Matrix & Defect Registry',
      description: 'Systematic manual test suites executed across real Android devices and emulators, focusing on boundary values in project budgeting, dual-factor role verification, and milestone escrow security.',
      codeSnippet: `// Manual QA Log Excerpt: TC-BM-012 Milestone Fund Release
Test Case ID: TC-BM-012
Role Actor   : Client & Contractor (Simultaneous Session)
Module       : Milestone Escrow Disbursement
Device       : Samsung Galaxy A54 (Android 14) & Pixel 7 Emulator

[Preconditions]
1. Project PRJ-2024-042 at Milestone 2: 'Foundation & Framing'
2. Contractor has uploaded 4 photographic site proofs + PDF structural sign-off.
3. Client balance is funded in escrow pool.

[Execution Steps]
1. Contractor taps 'Request Milestone Review' -> Status becomes 'UNDER_REVIEW'.
2. Log into Architect account -> Verify drawings and approve site compliance.
3. Log into Client account -> Tap 'Authorize Milestone 2 Release'.
4. Simulate immediate mobile network disconnect during authorization POST request.
5. Reconnect network and examine escrow ledger balance.

[Observed Result]
Idempotency key successfully prevented duplicate debit! Balance decremented once,
contractor wallet credited with Rp 45,000,000, and notification push received.

[Verdict]: PASSED (Verified Robust Under Flaky Mobile 4G Connection)`,
      testCases: [
        {
          id: 'TC-BM-001',
          title: 'RBAC Access Boundary: Architect Viewing Competitor Blind Bids',
          type: 'Manual',
          precondition: 'Project tender in Open Bidding stage with multiple architect submissions.',
          steps: [
            'Log into Architect Account B',
            'Directly invoke API endpoint /api/tenders/{id}/bids via URL tampering',
            'Assert response code and payload leakage'
          ],
          expected: 'HTTP 403 Forbidden returned; zero competitor quotation details exposed.',
          status: 'PASSED'
        },
        {
          id: 'TC-BM-002',
          title: 'Milestone Escrow Release with Insufficient Client Escrow Balance',
          type: 'Manual',
          precondition: 'Client escrow holding contains partial funding due to split bank transfer.',
          steps: [
            'Attempt to trigger full milestone completion release',
            'Observe error handling on mobile UI viewport'
          ],
          expected: 'System halts transaction with clear toast: "Top up escrow buffer before release".',
          status: 'PASSED'
        },
        {
          id: 'TC-BM-003',
          title: 'Photo Proof Upload Compression & Low-Bandwidth Resilience',
          type: 'Manual',
          precondition: 'User on throttled 3G cellular network (256 kbps).',
          steps: [
            'Attach 4 high-resolution RAW camera photos (8MB each)',
            'Trigger upload and observe progress bar feedback'
          ],
          expected: 'Client-side compression optimizes files to <400KB before upload with retry resiliency.',
          status: 'PASSED'
        }
      ]
    },
    uiDesign: {
      figmaStats: { screens: 32, components: 72, designSystem: 'BuildMatch Mobile UI Kit' },
      keyFeatures: [
        'Dedicated mode switcher for Client, Architect, and Contractor profiles',
        'Interactive stage-gate project timeline with visual completion donuts',
        'Blueprint viewer with pan/zoom gestures and client mark-up pins',
        'Bottom sheet quotation builder with material and labor breakdown'
      ],
      colorPalette: [
        { name: 'Blueprint Navy', hex: '#0f172a' },
        { name: 'Safety Amber', hex: '#f59e0b' },
        { name: 'Sky Technical', hex: '#0284c7' },
        { name: 'Foundation Slate', hex: '#334155' }
      ],
      designNotes: 'Designed with 8pt grid system for standard 390px mobile viewport. Strict focus on touch target sizes (minimum 48x48px for outdoor on-site usage by contractors wearing gloves).',
      screenMockups: [
        { title: 'Project Tender Feed', subtitle: 'Filtered by budget, square meters & structural category', aspect: '9/16', previewBadge: 'Mobile High-Fi' },
        { title: 'Milestone Escrow Tracker', subtitle: 'Visual progress bar with photo sign-off submission', aspect: '9/16', previewBadge: 'Mobile High-Fi' },
        { title: 'Blueprint Inspection Pinning', subtitle: 'Client comment annotations on architectural CAD preview', aspect: '9/16', previewBadge: 'Interactive State' }
      ]
    },
    systemAnalysis: {
      srsArtifacts: [
        'SKPL-BM-01: Multi-actor Role-Based Access Control (RBAC) Specification',
        'SKPL-BM-02: Staged Escrow Financial Life Cycle & Dispute Arbitration Flow',
        'SKPL-BM-03: Construction Milestone Verification Sequence'
      ],
      diagrams: [
        { name: 'RBAC Permission Matrix', description: 'Comprehensive grid mapping 28 actions against 3 user roles.', type: 'Security Grid' },
        { name: 'State Machine Diagram', description: 'Lifecycle of a project from Tender Draft -> Bidding -> In Construction -> Completed.', type: 'State Machine' },
        { name: 'Sequence Diagram: Escrow Payout', description: 'Interaction between Client App, Backend API, and Escrow Vault.', type: 'Sequence' }
      ]
    },
    links: {
      github: 'https://github.com/dyhptri',
      figma: 'https://figma.com/@dyhptri'
    }
  },
  {
    id: 'inlet',
    title: 'InLET Polinema Research Lab',
    subtitle: 'Academic Research Portal & Real-time Digital Attendance System',
    category: 'Web Platform • System Analysis & UAT',
    tag: 'Institutional System',
    period: '2024',
    role: ['Lead System Analyst', 'UAT Coordinator', 'Database Architect'],
    tools: ['User Acceptance Testing (UAT)', 'Web CMS', 'MySQL', 'UML Modeling', 'Figma', 'Draw.io'],
    summary: 'Institutional portal and automated lab asset management system for the Intelligent Learning and Educational Technology (InLET) Research Group at State Polytechnic of Malang (Polinema).',
    challenge: 'Prior to the system, lab student attendance, equipment borrowing (GPUs, VR headsets, microcontrollers), and publication logs were recorded manually in paper logbooks, causing lost hardware records and disputed student research hours.',
    solution: 'Conducted rigorous requirements elicitation with lab directors, formulated the full SRS/SKPL documentation with UML models, and executed structured User Acceptance Testing (UAT) with 40+ research students and faculty.',
    impactMetrics: [
      { label: 'UAT Acceptance Rate', value: '98.5% Satisfaction' },
      { label: 'Hardware Tracking Error', value: 'Reduced to 0%' },
      { label: 'SRS Use Cases Defined', value: '18 Documented Flows' },
      { label: 'Active Lab Users', value: '120+ Researchers' },
    ],
    qaArtifacts: {
      title: 'User Acceptance Testing (UAT) Protocol & Validation Sign-Off',
      description: 'Structured UAT test cases distributed to faculty researchers and undergraduate thesis students to validate real-time digital attendance logging, asset checkout, and thesis publication metadata.',
      codeSnippet: `// UAT Protocol Excerpt: UAT-INLET-ATTEND-03
Form Ref      : UAT-INLET-2024-V2
Tester Persona: Lab Research Assistant (Student)
Supervisor    : Dr. Eng. Lab Coordinator

[Objective]
Verify that dynamic QR-code student attendance check-in is bounded by lab geofence
and active session validity window (< 45 seconds).

[Scenario Execution Log]
- Step 1: Researcher approaches lab entrance terminal displaying rotating QR code.
- Step 2: Opens mobile browser, logs in with Polinema SSO credentials.
- Step 3: Scans QR code. Browser captures geolocation coordinates.
- Expected : Timestamp registered, research project log tagged, status: 'PRESENT'.
- Actual   : Checked in at 14:02:18 WIB. Latency 180ms. Geofence radius: 12m (Valid).

[Sign-Off Verdict]: ACCEPTED WITHOUT REVISION
Comments: "Interface is straightforward and eliminates the physical attendance binder."`,
      testCases: [
        {
          id: 'UAT-INLET-001',
          title: 'Real-time Digital Attendance Verification with Session Timeout',
          type: 'Manual',
          precondition: 'Active lab session opened by lab supervisor with dynamic QR code.',
          steps: [
            'Student scans QR code after 46 seconds of generation',
            'Observe rejection of expired token',
            'Refresh and rescan immediate active code'
          ],
          expected: 'First attempt rejected with "QR Code Expired"; second attempt registers attendance successfully.',
          status: 'PASSED'
        },
        {
          id: 'UAT-INLET-002',
          title: 'High-Value Lab Hardware Loan & Return Conflict Check',
          type: 'Manual',
          precondition: 'NVIDIA RTX 4090 GPU Workstation currently checked out by Team A.',
          steps: [
            'Team B attempts to request checkout for the same device during overlapping dates',
            'Verify conflict detection alert'
          ],
          expected: 'System disables checkout CTA and shows calendar reservation conflict.',
          status: 'PASSED'
        },
        {
          id: 'UAT-INLET-003',
          title: 'Publication Metadata Indexing & Author Attribution',
          type: 'Manual',
          precondition: 'Paper accepted at IEEE or Scopus-indexed conference.',
          steps: [
            'Submit DOI and citation text into research repository',
            'Assert automated author affiliation linking with Polinema database'
          ],
          expected: 'DOI metadata parsed accurately, author profiles linked, and PDF preview rendered.',
          status: 'PASSED'
        }
      ]
    },
    uiDesign: {
      figmaStats: { screens: 22, components: 48, designSystem: 'Polinema InLET Academic UI' },
      keyFeatures: [
        'Researcher profile and Scopus citation timeline visualization',
        'Hardware laboratory reservation and inventory availability heatmaps',
        'Student digital logbook with time-stamped activity verification',
        'Administrative audit reporting dashboard with CSV/PDF export'
      ],
      colorPalette: [
        { name: 'Polinema Royal Blue', hex: '#1e3a8a' },
        { name: 'Electric Cyan', hex: '#0284c7' },
        { name: 'Clean Snow', hex: '#f8fafc' },
        { name: 'Slate Foundation', hex: '#1e293b' }
      ],
      designNotes: 'Clean, professional academic layout focusing on data density, clean typography, fast accessibility for high-volume daily attendance scans, and zero cognitive load.',
      screenMockups: [
        { title: 'Lab Attendance Terminal', subtitle: 'Dynamic QR display and real-time student check-in ticker', aspect: '16/9', previewBadge: 'Academic Portal' },
        { title: 'Hardware Reservation Hub', subtitle: 'GPU and sensor inventory checkout schedule', aspect: '16/9', previewBadge: 'Inventory System' },
        { title: 'Research Publications Archive', subtitle: 'Citation metrics and Scopus/SINTA publication cards', aspect: '16/9', previewBadge: 'Repository' }
      ]
    },
    systemAnalysis: {
      srsArtifacts: [
        'SKPL-INLET-01: Requirements Specification for Lab Hardware Custody & Returns',
        'SKPL-INLET-02: Attendance Authentication & Geofence Boundary Rules',
        'SKPL-INLET-03: Research Publication Data Modeling & Ingestion'
      ],
      diagrams: [
        { name: 'Complete Use Case Model', description: 'Diagrammed interactions across Student Researchers, Lab Admins, and Faculty.', type: 'Use Case' },
        { name: 'Activity Flow: Equipment Loan', description: 'Tracks reservation -> approval -> handover -> inspection -> return flow.', type: 'Activity Diagram' },
        { name: 'Conceptual Database ERD', description: 'Third normal form (3NF) relational model with 16 entity tables.', type: 'Relational ERD' }
      ]
    },
    links: {
      github: 'https://github.com/dyhptri',
      liveDemo: 'https://github.com/dyhptri/inlet-polinema-analysis'
    }
  }
];
