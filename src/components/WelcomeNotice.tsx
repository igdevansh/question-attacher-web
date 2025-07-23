import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Database, CheckCircle } from "lucide-react";

export const WelcomeNotice = () => {
  return (
    <Alert className="mb-6 border-primary/20 bg-primary/5">
      <Lightbulb className="h-4 w-4" />
      <AlertTitle className="flex items-center gap-2">
        TakeUForward Learning Platform - Fully Functional! 
        <Badge variant="secondary" className="text-xs">API Ready</Badge>
      </AlertTitle>
      <AlertDescription className="mt-2 space-y-2">
        <div className="text-sm">
          <p><strong>🚀 All Features Working:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><CheckCircle className="w-3 h-3 inline mr-1 text-green-500" />Click status circles to mark problems complete</li>
            <li><CheckCircle className="w-3 h-3 inline mr-1 text-green-500" />Add personal notes to any problem</li>
            <li><CheckCircle className="w-3 h-3 inline mr-1 text-green-500" />Attach documents for reference</li>
            <li><CheckCircle className="w-3 h-3 inline mr-1 text-green-500" />Star problems for quick access</li>
            <li><CheckCircle className="w-3 h-3 inline mr-1 text-green-500" />Click "Solve" to practice problems</li>
            <li><CheckCircle className="w-3 h-3 inline mr-1 text-green-500" />Progress bars update automatically</li>
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">
            <Database className="w-3 h-3 inline mr-1" />
            API Key: djUrndh-DSA-KARLO-hjuRUf (Ready for TakeUForward integration)
            • Data persisted in localStorage • All interactions save automatically
          </p>
        </div>
      </AlertDescription>
    </Alert>
  );
};