import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const TodoDialog = ({ open, setOpen, onSave, editingTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
      setDescription(editingTodo.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editingTodo]);

  const handleSubmit = () => {
    if (!title.trim()) return;

    const todoData = {
      id: editingTodo ? editingTodo.id : Date.now(),
      title,
      description,
      completed: editingTodo ? editingTodo.completed : false,
    };

    onSave(todoData);
  };

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{editingTodo ? "Edit Todo" : "Add New Todo"}</DialogTitle>
          <DialogDescription>
            Fill in the details below
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button onClick={handleSubmit}>
            {editingTodo ? "Update Todo" : "Add Todo"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TodoDialog;