import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Save, X } from "lucide-react";

interface NoteDialogProps {
  problemId: string;
  problemTitle: string;
  existingNote?: string;
  onSave: (note: string) => void;
}

export const NoteDialog = ({ problemId, problemTitle, existingNote = "", onSave }: NoteDialogProps) => {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState(existingNote);

  const handleSave = () => {
    onSave(note);
    setOpen(false);
  };

  const handleCancel = () => {
    setNote(existingNote);
    setOpen(false);
  };

  return (
    <>
      <Button 
        variant="ghost" 
        size="sm" 
        className="hover:bg-muted"
        onClick={() => setOpen(true)}
      >
        <Plus className="w-4 h-4" />
      </Button>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Note for {problemTitle}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Textarea
              placeholder="Add your notes here..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="min-h-[100px]"
            />
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={handleCancel}>
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
              <Button onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                Save Note
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};