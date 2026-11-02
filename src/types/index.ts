export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tag: string;
  period: string;
  role: string[];
  tools: string[];
  summary: string;
  challenge: string;
  solution: string;
  impactMetrics: { label: string; value: string }[];
  qaArtifacts: {
    title: string;
    description: string;
    codeSnippet?: string;
    testCases: {
      id: string;
      title: string;
      type: 'E2E' | 'Integration' | 'Unit' | 'Manual';
      precondition: string;
      steps: string[];
      expected: string;
      status: 'PASSED' | 'FAILED' | 'BLOCKED';
    }[];
  };
  uiDesign: {
    figmaStats: { screens: number; components: number; designSystem: string };
    keyFeatures: string[];
    colorPalette: { name: string; hex: string }[];
    designNotes: string;
    screenMockups: { title: string; subtitle: string; aspect: string; previewBadge: string }[];
  };
  systemAnalysis: {
    srsArtifacts: string[];
    diagrams: { name: string; description: string; type: string }[];
  };
  links: {
    github?: string;
    figma?: string;
    liveDemo?: string;
    testReport?: string;
  };
}

export interface QAArtifactItem {
  id: string;
  title: string;
  category: 'Cypress E2E' | 'Manual Test Matrix' | 'Bug Report' | 'SRS/UML Spec';
  project: string;
  date: string;
  severity?: 'Critical' | 'High' | 'Medium' | 'Low';
  status: 'Resolved' | 'Verified' | 'Automated' | 'Active';
  summary: string;
  details: {
    preconditions?: string;
    stepsToReproduce?: string[];
    expectedResult?: string;
    actualResult?: string;
    testScriptSnippet?: string;
    architectureNotes?: string;
  };
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  department?: string;
  period: string;
  type: 'Leadership' | 'Academic' | 'Committee';
  badge: string;
  responsibilities: string[];
  keyAchievements: string[];
  skillsApplied: string[];
}

