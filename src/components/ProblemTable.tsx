import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Play, FileText, Youtube, Paperclip, Plus, Star } from "lucide-react";

interface Problem {
  id: string;
  title: string;
  status: 'completed' | 'pending';
  hasSolution: boolean;
  hasResourcePlus: boolean;
  hasResourceFree: boolean;
  hasPractice: boolean;
  hasNote: boolean;
  hasRevision: boolean;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

interface ProblemTableProps {
  problems: Problem[];
}

export const ProblemTable = ({ problems }: ProblemTableProps) => {
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
                {problem.status === 'completed' ? (
                  <CheckCircle className="w-5 h-5 text-primary" />
                ) : (
                  <div className="w-5 h-5 border-2 border-muted rounded-full" />
                )}
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
                  <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                    Solve
                  </Button>
                ) : (
                  <span className="text-muted-foreground">-</span>
                )}
              </td>
              <td className="py-3 px-4 text-center">
                <Button variant="ghost" size="sm" className="hover:bg-muted">
                  <Plus className="w-4 h-4" />
                </Button>
              </td>
              <td className="py-3 px-4 text-center">
                <Button variant="ghost" size="sm" className="hover:bg-muted">
                  <Paperclip className="w-4 h-4" />
                </Button>
              </td>
              <td className="py-3 px-4 text-center">
                <Button variant="ghost" size="sm" className="hover:bg-muted">
                  <Star className="w-4 h-4" />
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