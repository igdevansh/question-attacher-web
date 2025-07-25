import { ChevronDown, ChevronRight } from "lucide-react";
import { ProblemTable } from "./ProblemTable";
import { useState } from "react";
import { Problem } from "@/types/course";

interface LectureSectionProps {
  title: string;
  progress: { completed: number; total: number };
  problems: Problem[];
  isExpanded?: boolean;
  onToggleStatus: (problemId: string) => void;
  onToggleStar: (problemId: string) => void;
  onUpdateNote: (problemId: string, note: string) => void;
  onAddAttachment: (problemId: string, fileName: string) => void;
  onRemoveAttachment: (problemId: string, fileName: string) => void;
}

export const LectureSection = ({ 
  title, 
  progress, 
  problems, 
  isExpanded = false,
  onToggleStatus,
  onToggleStar,
  onUpdateNote,
  onAddAttachment,
  onRemoveAttachment
}: LectureSectionProps) => {
  const [expanded, setExpanded] = useState(isExpanded);
  const progressPercentage = (progress.completed / progress.total) * 100;

  return (
    <div className="mb-4">
      <div 
        className={`flex items-center justify-between p-4 bg-card border border-border rounded-lg cursor-pointer hover:bg-muted/30 transition-colors ${
          expanded ? 'border-primary' : ''
        }`}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-3">
          {expanded ? (
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          ) : (
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          )}
          <h3 className="text-lg font-medium text-foreground">{title}</h3>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-48 h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span className="text-sm font-medium text-foreground min-w-[2rem]">
              {progress.completed} / {progress.total}
            </span>
          </div>
        </div>
      </div>
      
      {expanded && (
        <div className="mt-2 bg-card border border-border rounded-lg overflow-hidden">
          <ProblemTable 
            problems={problems}
            onToggleStatus={onToggleStatus}
            onToggleStar={onToggleStar}
            onUpdateNote={onUpdateNote}
            onAddAttachment={onAddAttachment}
            onRemoveAttachment={onRemoveAttachment}
          />
        </div>
      )}
    </div>
  );
};