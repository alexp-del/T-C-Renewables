import { ReactNode } from 'react';

export interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export interface StatProps {
  label: string;
  value: string;
  subtext?: string;
  trend?: 'up' | 'down' | 'neutral';
  delay?: number;
}

export interface NavItem {
  id: string;
  label: string;
  icon: ReactNode;
}