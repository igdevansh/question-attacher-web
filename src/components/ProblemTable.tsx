import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Play, FileText, Youtube, Star } from "lucide-react";
import { Problem } from "@/types/course";
import { NoteDialog } from "./NoteDialog";
import { AttachmentDialog } from "./AttachmentDialog";
import { useToast } from "@/hooks/use-toast";

interface ProblemTableProps {
  problems: Problem[];
  onToggleStatus: (problemId: string) => void;
  onToggleStar: (problemId: string) => void;
  onUpdateNote: (problemId: string, note: string) => void;
  onAddAttachment: (problemId: string, fileName: string) => void;
  onRemoveAttachment: (problemId: string, fileName: string) => void;
}

export const ProblemTable = ({ 
  problems, 
  onToggleStatus, 
  onToggleStar, 
  onUpdateNote, 
  onAddAttachment, 
  onRemoveAttachment 
}: ProblemTableProps) => {
  const { toast } = useToast();
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-easy';
      case 'Medium': return 'text-medium';
      case 'Hard': return 'text-hard';
      default: return 'text-foreground';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
            <th className="text-left py-3 px-4 font-medium text-muted-foreground">Problem</th>
            <th className="text-center py-3 px-4 font-medium text-muted-foreground">
              <div className="flex items-center justify-center gap-1">
                <span>Resource</span>
                <span className="text-primary text-xs">(Plus)</span>
              </div>
            </th>
            <th className="text-center py-3 px-4 font-medium text-muted-foreground">
              <div className="flex items-center justify-center gap-1">
                <span>Resource</span>
                <span className="text-xs">(Free)</span>
              </div>
            </th>
            <th className="text-center py-3 px-4 font-medium text-muted-foreground">Practice</th>
            <th className="text-center py-3 px-4 font-medium text-muted-foreground">Note</th>
            <th className="text-center py-3 px-4 font-medium text-muted-foreground">Attach Document</th>
            <th className="text-center py-3 px-4 font-medium text-muted-foreground">Revision</th>
            <th className="text-center py-3 px-4 font-medium text-muted-foreground">Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => (
            <tr key={problem.id} className="border-b border-border hover:bg-muted/50 transition-colors">
              <td className="py-3 px-4">
                <button
                  onClick={() => onToggleStatus(problem.id)}
                  className="hover:scale-110 transition-transform"
                >
                  {problem.status === 'completed' ? (
                    <CheckCircle className="w-5 h-5 text-primary" />
                  ) : (
                    <div className="w-5 h-5 border-2 border-muted rounded-full hover:border-primary transition-colors" />
                  )}
                </button>
              </td>
              <td className="py-3 px-4 font-medium text-foreground">
                {problem.title}
              </td>
              <td className="py-3 px-4 text-center">
                {problem.hasResourcePlus ? (
                  <Play className="w-5 h-5 text-primary mx-auto" />
                ) : (
                  <span className="text-muted-foreground">-</span>
                )}
              </td>
              <td className="py-3 px-4 text-center">
                {problem.hasResourceFree ? (
                  <div className="flex items-center justify-center gap-2">
                    <FileText className="w-4 h-4 text-muted-foreground" />
                    <Youtube className="w-4 h-4 text-red-500" />
                  </div>
                ) : (
                  <span className="text-muted-foreground">-</span>
                )}
              </td>
              <td className="py-3 px-4 text-center">
                {problem.hasPractice ? (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => {
                      toast({
                        title: "Opening Practice",
                        description: `Starting practice for ${problem.title}`,
                      });
                      // In a real app, this would navigate to the practice page
                      window.open(`/practice/${problem.id}`, '_blank');
                    }}
                  >
                    Solve
                  </Button>
                ) : (
                  <span className="text-muted-foreground">-</span>
                )}
              </td>
              <td className="py-3 px-4 text-center">
                <NoteDialog
                  problemId={problem.id}
                  problemTitle={problem.title}
                  existingNote={problem.notes}
                  onSave={(note) => onUpdateNote(problem.id, note)}
                />
              </td>
              <td className="py-3 px-4 text-center">
                <AttachmentDialog
                  problemId={problem.id}
                  problemTitle={problem.title}
                  attachments={problem.attachedDocuments || []}
                  onAdd={(fileName) => onAddAttachment(problem.id, fileName)}
                  onRemove={(fileName) => onRemoveAttachment(problem.id, fileName)}
                />
              </td>
              <td className="py-3 px-4 text-center">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="hover:bg-muted"
                  onClick={() => onToggleStar(problem.id)}
                >
                  <Star className={`w-4 h-4 ${problem.isStarred ? 'fill-yellow-400 text-yellow-400' : ''}`} />
                </Button>
              </td>
              <td className="py-3 px-4 text-center">
                <Badge variant="outline" className={`${getDifficultyColor(problem.difficulty)} border-current`}>
                  {problem.difficulty}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};