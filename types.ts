// Fix: Added React import to resolve missing namespace errors
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  // Fix: Accessing ReactNode via the React namespace requires an import in .ts files
  icon: React.ReactNode;
}

export interface IndustryIconProps {
  name: string;
  // Fix: Accessing ReactNode via the React namespace requires an import in .ts files
  icon: React.ReactNode;
}

export interface TimelineStep {
  title: string;
  description: string;
}
