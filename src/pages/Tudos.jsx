import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Pencil, Trash2, Plus } from "lucide-react";
import TodoDialog from "@/components/TodoDia";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);

  // Load from localStorage once
  useEffect(() => {
    const storedTodos = localStorage.getItem("todoData");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const saveToLocalStorage = (updatedTodos) => {
    setTodos(updatedTodos);
    localStorage.setItem("todoData", JSON.stringify(updatedTodos));
  };

  const handleAddOrEditTodo = (todo) => {
    if (editingTodo) {
      // Edit existing
      const updated = todos.map((t) =>
        t.id === editingTodo.id ? todo : t
      );
      saveToLocalStorage(updated);
    } else {
      // Add new
      const updated = [...todos, todo];
      saveToLocalStorage(updated);
    }
    setEditingTodo(null);
    setOpen(false);
  };

  const handleDelete = (id) => {
    saveToLocalStorage(todos.filter((t) => t.id !== id));
  };

  const toggleCompleted = (id) => {
    const updated = todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    saveToLocalStorage(updated);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Todo List</h1>
        <Button onClick={() => setOpen(true)} className=" text-white">
          <Plus className="mr-2 h-4 w-4" /> Add Todo
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {todos.map((todo) => (
          <Card key={todo.id} className="shadow-md">
            <CardHeader>
              <CardTitle
                className={todo.completed ? "line-through text-gray-500" : ""}
              >
                {todo.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-600">{todo.description}</p>

              <div className="flex items-center gap-2">
                <Checkbox
                  checked={todo.completed}
                  onCheckedChange={() => toggleCompleted(todo.id)}
                  className=" bg-white"
                />
                <span className="text-sm">
                  {todo.completed ? "Completed" : "Not Completed"}
                </span>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setEditingTodo(todo);
                    setOpen(true);
                  }}
                  className=" text-white"
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(todo.id)}
                  className=" text-white"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <TodoDialog
        open={open}
        setOpen={setOpen}
        onSave={handleAddOrEditTodo}
        editingTodo={editingTodo}
      />
    </div>
  );
};

export default Todos;