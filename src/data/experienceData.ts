import type { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-hmti-sekretariat',
    organization: 'Himpunan Mahasiswa Teknologi Informasi (HMTI) Polinema',
    role: 'Ketua Koordinator Kesekretariatan',
    department: 'Departemen Kesekretariatan & Tata Kelola Organisasi',
    period: '2024 – 2025',
    type: 'Leadership',
    badge: 'Executive Leadership',
    responsibilities: [
      'Led and centralized the administrative and governance pipeline across 8 internal departments, managing over 120+ official incoming/outgoing administrative documents.',
      'Authored standardized legal correspondence templates, event permit proposals, and collaboration memos for institutional and external corporate partners.',
      'Maintained institutional physical and cloud document archives with strict version control, reducing missing records to zero.'
    ],
    keyAchievements: [
      '100% on-time institutional proposal approval rate across all major departmental programs.',
      'Introduced digital document tracking, streamlining review cycles from 5 days down to 24 hours.'
    ],
    skillsApplied: ['Governance', 'Document Engineering', 'Team Leadership', 'Stakeholder Communication', 'SOP Authoring']
  },
  {
    id: 'exp-hmti-bendahara',
    organization: 'Dies Natalis HMTI Polinema 2025',
    role: 'Bendahara Pelaksana (Head of Finance & Treasury)',
    department: 'Organizing Committee Dies Natalis',
    period: '2025',
    type: 'Committee',
    badge: 'Financial Governance',
    responsibilities: [
      'Directed end-to-end financial budgeting (Rencana Anggaran Biaya / RAB), cash flow monitoring, and multi-channel revenue allocation for the largest departmental festival.',
      'Audited receipt documentation and vendor payment settlements across 6 event sub-committees (Logistics, Multimedia, Public Relations, Stage, Consumption, Competitions).',
      'Synthesized the comprehensive Financial Accountability Report (Laporan Pertanggungjawaban / LPJ) submitted to the academic faculty board.'
    ],
    keyAchievements: [
      'Achieved a verified Zero-Deficit financial balance sheet with 100% receipt audit compliance.',
      'Optimized procurement expenditure, creating a 12% contingency emergency reserve.'
    ],
    skillsApplied: ['Financial Auditing', 'Budget Reconciliation', 'Risk Management', 'Zero-Deficit Accounting', 'Analytical Rigor']
  },
  {
    id: 'exp-prastudi-mentor',
    organization: 'Prastudi Mahasiswa Baru JTI Polinema 2025',
    role: 'Student Mentor & Academic Facilitator',
    department: 'Jurusan Teknologi Informasi Politeknik Negeri Malang',
    period: 'Agu 2025',
    type: 'Academic',
    badge: 'Mentorship',
    responsibilities: [
      'Mentored incoming freshman students transitioning into the Information Technology Department curriculum.',
      'Facilitated introductory workshops on campus academic portals, developer tooling basics (Git, IDEs), and study collaboration norms.',
      'Served as primary liaison between faculty orientation leadership and freshman student cohorts to resolve academic queries.'
    ],
    keyAchievements: [
      'Facilitated smooth onboarding for 30+ assigned freshman mentees with zero orientation dropouts.',
      'Received 96% positive feedback rating for approachable technical guidance and clear communication.'
    ],
    skillsApplied: ['Mentorship', 'Technical Facilitation', 'Public Speaking', 'Empathy & Coaching']
  },
  {
    id: 'exp-hmti-internal',
    organization: 'Himpunan Mahasiswa Teknologi Informasi (HMTI) Polinema',
    role: 'Anggota Departemen Internal',
    department: 'Departemen Hubungan Internal',
    period: '2023 – 2024',
    type: 'Leadership',
    badge: 'Team Alignment',
    responsibilities: [
      'Facilitated cross-divisional alignment meetings and conflict resolution initiatives among active student committee members.',
      'Organized internal team bonding programs, capability development sessions, and institutional evaluations.'
    ],
    keyAchievements: [
      'Maintained organizational retention rate above 94% throughout the academic service tenure.',
      'Co-organized institutional welcoming symposium for over 400+ department attendees.'
    ],
    skillsApplied: ['Cross-functional Alignment', 'Event Planning', 'Conflict Resolution', 'Active Listening']
  }
];

export const impactMetricsData = [
  {
    value: '3.78',
    subvalue: '/ 4.00',
    label: 'Academic GPA',
    description: 'Politeknik Negeri Malang (D4 Business Information Systems)',
    icon: 'GraduationCap',
    accent: 'cyan'
  },
  {
    value: '50+',
    subvalue: 'Screens',
    label: 'High-Fi UI Designed',
    description: 'Figma design system components, auto-layouts & interactive prototypes',
    icon: 'Layers',
    accent: 'emerald'
  },
  {
    value: '100%',
    subvalue: 'Pass Rate',
    label: 'E2E Critical Flows',
    description: 'Automated Cypress test execution coverage on key business logic',
    icon: 'CheckCircle2',
    accent: 'cyan'
  },
  {
    value: '0',
    subvalue: 'Deficit',
    label: 'Financial Accuracy',
    description: 'Audited financial accountability report (LPJ) for Dies Natalis 2025',
    icon: 'ShieldCheck',
    accent: 'emerald'
  }
];
