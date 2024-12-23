// Cover Letter Interface
interface CoverLetter {
  id: string
  userPitch: string
  generatedCoverLetter: string
}

// Slim Job with Full Cover Letter Interface
interface SlimJobFullCover {
  applied: boolean
  link: string
  coverLetter: CoverLetter
}

// Array of Slim Jobs with Full Cover Letters
export type SlimJobFullCoverList = SlimJobFullCover[]
