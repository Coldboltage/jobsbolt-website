import { Job } from "./job";

export interface ICoverLetter {
  id: string;
  userPitch: string;
  generatedCoverLetter?: string | null; // Optional because of nullable: true
  batch: boolean;
  job: Job;
}