export interface Problem {
  id: string;
  title: string;
  status: 'completed' | 'pending' | 'in-progress';
  hasSolution: boolean;
  hasResourcePlus: boolean;
  hasResourceFree: boolean;
  hasPractice: boolean;
  hasNote: boolean;
  hasRevision: boolean;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  solutionUrl?: string;
  practiceUrl?: string;
  attachedDocuments?: string[];
  notes?: string;
  isStarred?: boolean;
}

export interface CourseSection {
  id: string;
  title: string;
  progress: { completed: number; total: number };
  problems: Problem[];
}

export interface UserProgress {
  completedProblems: string[];
  starredProblems: string[];
  notes: Record<string, string>;
  attachedDocuments: Record<string, string[]>;
}