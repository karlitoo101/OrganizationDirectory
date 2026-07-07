/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Organization {
  id: string;
  name: string;
  acronym: string;
  category: 'Departmental Organizations' | 'University-Wide Organizations' | 'Community-Based (?)';
  type: 'Leadership' | 'Academic & Professional' | 'Recreational' | 'Socio-Civic' | 'Fraternity/Sorority';
  fields: ('Engineering & Technology' | 'Cultural & Humanities' | 'Journalism' | 'Arts & Creatives' | 'Varsity & Sports' | 'Public Service' | 'Commerce & Enterprise')[];
  openFor: string;
  campus: 'San Bartolome (Main)' | 'San Francisco' | 'Batasan Hills' | 'All Campuses';
  description: string;
  vision: string;
  mission: string;
  recruitmentStatus: 'Open' | 'Closed';
  recruitmentPeriod?: string;
  requirements: string[];
  membershipFee: string;
  contactEmail: string;
  facebookUrl?: string;
  instagramUrl?: string;
  officers: { role: string; name: string }[];
  featuredEvents: { title: string; description: string; date: string }[];
  logoBg: string; // Tailwind class
  logoImage?: string; // path to an official logo image, takes precedence over the acronym badge
  logoImageScale?: number; // CSS scale factor to compensate for padding baked into the source logo image
  accentColor: string; // hex or Tailwind color name
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: { [key: string]: number }; // Keys are categories (e.g. 'Technology', 'Socio-Civic')
  }[];
}
