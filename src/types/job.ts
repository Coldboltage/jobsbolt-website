import { ICoverLetter } from "./coverLetter";

export interface Job {
  id: string; // UUID
  indeedId: string;
  applied: boolean;
  link: string; // Indeed job URL
  name: string; // Job title
  companyName: string;
  date: string; // ISO date string, e.g., "2024-11-15T09:30:00Z"
  description: string;
  pay: string; // Salary range or compensation details
  location: string; // Job location or "Remote"
  summary?: string; // Optional brief overview
  conciseDescription?: string; // Optional short description
  conciseSuited?: string; // Optional suitability notes
  coverLetter?: ICoverLetter; // Placeholder for CoverLetter, set to null in mock data
  suited: boolean; // Indicates if the job is deemed suitable
  suitabilityScore?: number; // Optional numerical suitability score
  jobType: string[]; // Array of job types, e.g., ["full-time", "remote"]
  scannedLast?: string; // Optional ISO date string of the last scan
  notification: boolean; // Indicates if notifications are enabled
  interested: boolean; // Indicates if the user is interested
}