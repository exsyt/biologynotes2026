export interface KeyDefinition {
  term: string;
  definition: string;
  category?: string;
}

export interface Section {
  title: string;
  points: string[];
  chains?: string[];
  equations?: {
    word?: string;
    symbol?: string;
  }[];
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  callout?: string;
}

export interface Topic {
  id: number;
  title: string;
  category: 'Cell Biology' | 'Organisms & Diversity' | 'Plant Physiology' | 'Human Physiology' | 'Health & Disease' | 'Genetics & Evolution' | 'Ecology & Biotech';
  color: string;
  accent: string;
  summary: string;
  memorise: string;
  examTips: string[];
  sections: Section[];
  diagramType: string;
}

export type ViewMode = 'all' | 'cram' | 'quiz' | 'diagrams';
