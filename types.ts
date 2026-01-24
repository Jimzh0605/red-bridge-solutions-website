export interface FaqItem {
  question: string;
  answer: string;
}

export interface Pillar {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TeamMember {
  name: string;
  role: string;
  description?: string;
}