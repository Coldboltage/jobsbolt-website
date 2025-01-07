import { Job } from "./job";

export interface JobType {
  id: string; // UUID for the JobType
  name: string; // Name of the job type
  location?: string; // Location (optional)
  jobs: Job[]; // Related jobs
  date: Date; // Date when the JobType was created or assigned
  active: boolean; // Indicates if the JobType is currently active

  // Management metadata
  updatedLast?: Date; // Last updated timestamp (optional)
}