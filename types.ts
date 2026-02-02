import React from 'react';

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
  image?: string;
}

export interface Metric {
  percentage: number;
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  challenge: string;
  solution: string[];
  engineering: string[];
  metrics: [Metric, Metric, Metric];
}
