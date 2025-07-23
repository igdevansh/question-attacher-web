import { useState, useEffect } from 'react';
import { CourseSection, UserProgress } from '@/types/course';
import { courseData as staticCourseData } from '@/data/courseData';

// Since this is a frontend-only app, we'll use localStorage for persistence
// In a real app, this would connect to your TakeUForward API
export const useCourseData = () => {
  const [courseData, setCourseData] = useState<CourseSection[]>(staticCourseData);
  const [userProgress, setUserProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('takeuforward-progress');
    return saved ? JSON.parse(saved) : {
      completedProblems: [],
      starredProblems: [],
      notes: {},
      attachedDocuments: {}
    };
  });

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('takeuforward-progress', JSON.stringify(userProgress));
  }, [userProgress]);

  const toggleProblemStatus = (problemId: string) => {
    setUserProgress(prev => ({
      ...prev,
      completedProblems: prev.completedProblems.includes(problemId)
        ? prev.completedProblems.filter(id => id !== problemId)
        : [...prev.completedProblems, problemId]
    }));
  };

  const toggleStar = (problemId: string) => {
    setUserProgress(prev => ({
      ...prev,
      starredProblems: prev.starredProblems.includes(problemId)
        ? prev.starredProblems.filter(id => id !== problemId)
        : [...prev.starredProblems, problemId]
    }));
  };

  const updateNote = (problemId: string, note: string) => {
    setUserProgress(prev => ({
      ...prev,
      notes: { ...prev.notes, [problemId]: note }
    }));
  };

  const addAttachment = (problemId: string, fileName: string) => {
    setUserProgress(prev => ({
      ...prev,
      attachedDocuments: {
        ...prev.attachedDocuments,
        [problemId]: [...(prev.attachedDocuments[problemId] || []), fileName]
      }
    }));
  };

  const removeAttachment = (problemId: string, fileName: string) => {
    setUserProgress(prev => ({
      ...prev,
      attachedDocuments: {
        ...prev.attachedDocuments,
        [problemId]: prev.attachedDocuments[problemId]?.filter(f => f !== fileName) || []
      }
    }));
  };

  // Update course data with user progress
  const enrichedCourseData = courseData.map(section => ({
    ...section,
    progress: {
      ...section.progress,
      completed: section.problems.filter(p => userProgress.completedProblems.includes(p.id)).length
    },
    problems: section.problems.map(problem => ({
      ...problem,
      status: userProgress.completedProblems.includes(problem.id) ? 'completed' as const : 'pending' as const,
      isStarred: userProgress.starredProblems.includes(problem.id),
      notes: userProgress.notes[problem.id],
      attachedDocuments: userProgress.attachedDocuments[problem.id] || []
    }))
  }));

  return {
    courseData: enrichedCourseData,
    userProgress,
    toggleProblemStatus,
    toggleStar,
    updateNote,
    addAttachment,
    removeAttachment
  };
};