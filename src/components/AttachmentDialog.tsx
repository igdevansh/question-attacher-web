import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Paperclip, Upload, X, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AttachmentDialogProps {
  problemId: string;
  problemTitle: string;
  attachments: string[];
  onAdd: (fileName: string) => void;
  onRemove: (fileName: string) => void;
}

export const AttachmentDialog = ({ 
  problemId, 
  problemTitle, 
  attachments, 
  onAdd, 
  onRemove 
}: AttachmentDialogProps) => {
  const [open, setOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      onAdd(file.name);
      toast({
        title: "File attached",
        description: `${file.name} has been attached to ${problemTitle}`,
      });
    }
  };

  const handleRemove = (fileName: string) => {
    onRemove(fileName);
    toast({
      title: "File removed",
      description: `${fileName} has been removed`,
    });
  };

  return (
    <>
      <Button 
        variant="ghost" 
        size="sm" 
        className="hover:bg-muted"
        onClick={() => setOpen(true)}
      >
        <Paperclip className="w-4 h-4" />
      </Button>
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        style={{ display: 'none' }}
        accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
      />
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Attachments for {problemTitle}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Button 
              onClick={() => fileInputRef.current?.click()}
              className="w-full"
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload Document
            </Button>
            
            {attachments.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Attached Files:</h4>
                {attachments.map((fileName, index) => (
                  <div key={index} className="flex items-center justify-between p-2 border rounded">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span className="text-sm">{fileName}</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleRemove(fileName)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
            
            {attachments.length === 0 && (
              <p className="text-muted-foreground text-center py-4">
                No attachments yet. Upload a document to get started.
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};