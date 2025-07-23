// TakeUForward API Integration
// API Key: djUrndh-DSA-KARLO-hjuRUf
// Note: In production, this would fetch from the TakeUForward API
// For demo purposes, using static data with the same structure

import { CourseSection } from '@/types/course';

export const courseData: CourseSection[] = [
  {
    id: "lec4",
    title: "Lec 4: Know Basic Maths",
    progress: { completed: 0, total: 2 },
    problems: [
      {
        id: "math1",
        title: "Count Digits",
        status: 'pending' as const,
        hasSolution: false,
        hasResourcePlus: true,
        hasResourceFree: true,
        hasPractice: true,
        hasNote: false,
        hasRevision: false,
        difficulty: 'Easy' as const
      },
      {
        id: "math2", 
        title: "Reverse Number",
        status: 'pending' as const,
        hasSolution: false,
        hasResourcePlus: true,
        hasResourceFree: true,
        hasPractice: true,
        hasNote: false,
        hasRevision: false,
        difficulty: 'Easy' as const
      }
    ]
  },
  {
    id: "lec5",
    title: "Lec 5: Learn Basic Recursion",
    progress: { completed: 0, total: 2 },
    problems: [
      {
        id: "rec1",
        title: "Print 1 to N using Recursion",
        status: 'pending' as const,
        hasSolution: false,
        hasResourcePlus: true,
        hasResourceFree: true,
        hasPractice: true,
        hasNote: false,
        hasRevision: false,
        difficulty: 'Easy' as const
      },
      {
        id: "rec2",
        title: "Print N to 1 using Recursion", 
        status: 'pending' as const,
        hasSolution: false,
        hasResourcePlus: true,
        hasResourceFree: true,
        hasPractice: true,
        hasNote: false,
        hasRevision: false,
        difficulty: 'Easy' as const
      }
    ]
  },
  {
    id: "lec6",
    title: "Lec 6: Learn Basic Hashing",
    progress: { completed: 0, total: 3 },
    problems: [
      {
        id: "hash1",
        title: "Hashing Theory",
        status: 'pending' as const,
        hasSolution: false,
        hasResourcePlus: true,
        hasResourceFree: true,
        hasPractice: false,
        hasNote: false,
        hasRevision: false,
        difficulty: 'Medium' as const
      },
      {
        id: "hash2",
        title: "Counting frequencies of array elements",
        status: 'pending' as const,
        hasSolution: true,
        hasResourcePlus: true,
        hasResourceFree: false,
        hasPractice: true,
        hasNote: false,
        hasRevision: false,
        difficulty: 'Easy' as const
      },
      {
        id: "hash3",
        title: "Find the highest/lowest frequency element",
        status: 'pending' as const,
        hasSolution: true,
        hasResourcePlus: true,
        hasResourceFree: false,
        hasPractice: true,
        hasNote: false,
        hasRevision: true,
        difficulty: 'Easy' as const
      }
    ]
  },
  {
    id: "step2",
    title: "Step 2 : Learn Important Sorting Techniques",
    progress: { completed: 0, total: 2 },
    problems: [
      {
        id: "sort1",
        title: "Selection Sort",
        status: 'pending' as const,
        hasSolution: true,
        hasResourcePlus: true,
        hasResourceFree: true,
        hasPractice: true,
        hasNote: false,
        hasRevision: false,
        difficulty: 'Easy' as const
      },
      {
        id: "sort2",
        title: "Bubble Sort",
        status: 'pending' as const,
        hasSolution: true,
        hasResourcePlus: true,
        hasResourceFree: true,
        hasPractice: true,
        hasNote: false,
        hasRevision: false,
        difficulty: 'Easy' as const
      }
    ]
  },
  {
    id: "step3",
    title: "Step 3 : Solve Problems on Arrays [Easy -> Medium -> Hard]",
    progress: { completed: 0, total: 2 },
    problems: [
      {
        id: "array1",
        title: "Largest Element in Array",
        status: 'pending' as const,
        hasSolution: true,
        hasResourcePlus: true,
        hasResourceFree: true,
        hasPractice: true,
        hasNote: false,
        hasRevision: false,
        difficulty: 'Easy' as const
      },
      {
        id: "array2",
        title: "Second Largest Element in Array",
        status: 'pending' as const,
        hasSolution: true,
        hasResourcePlus: true,
        hasResourceFree: true,
        hasPractice: true,
        hasNote: false,
        hasRevision: false,
        difficulty: 'Easy' as const
      }
    ]
  }
];