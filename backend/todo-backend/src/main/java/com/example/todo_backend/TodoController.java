package com.example.todo_backend;

import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/todos")
public class TodoController {
    private List<Todo> todos = new ArrayList<>();
    private Long idCounter = 1L;

    @GetMapping
    public List<Todo> getAllTodos() {
        return todos;
    }

    @PostMapping
    public Todo addTodo(@RequestBody Todo todo) {
        todo.setId(idCounter++);
        todos.add(todo);
        return todo;
    }

    @PutMapping("/{id}")
    public Todo updateTodo(@PathVariable Long id, @RequestBody Todo updatedTodo) {
        for (Todo todo : todos) {
            if (todo.getId().equals(id)) {
                todo.setTask(updatedTodo.getTask());
                return todo;
            }
        }
        return null; // 或拋出異常
    }

    @DeleteMapping("/{id}")
    public void deleteTodo(@PathVariable Long id) {
        todos.removeIf(todo -> todo.getId().equals(id));
    }
}