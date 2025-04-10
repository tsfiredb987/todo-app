package com.example.todo_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

// 1. JPA  DB 存取
@RestController
@RequestMapping("/api/todos")
public class TodoController {
    @Autowired
    private TodoRepository todoRepository;

    @GetMapping
    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    @PostMapping
    public Todo addTodo(@RequestBody Todo todo) {
        return todoRepository.save(todo);
    }

    @PutMapping("/{id}")
    public Todo updateTodo(@PathVariable Long id, @RequestBody Todo updatedTodo) {
        Todo todo = todoRepository.findById(id).orElse(null);
        if (todo != null) {
            todo.setTask(updatedTodo.getTask());
            return todoRepository.save(todo);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteTodo(@PathVariable Long id) {
        todoRepository.deleteById(id);
    }
}


// 2. 暫存記憶體方法

//@RestController
//@RequestMapping("/api/todos")
//public class TodoController {
//    private List<Todo> todos = new ArrayList<>();
//    private Long idCounter = 1L;
//
//    @GetMapping
//    public List<Todo> getAllTodos() {
//        return todos;
//    }
//
//    @PostMapping
//    public Todo addTodo(@RequestBody Todo todo) {
//        todo.setId(idCounter++);
//        todos.add(todo);
//        return todo;
//    }
//
//    @PutMapping("/{id}")
//    public Todo updateTodo(@PathVariable Long id, @RequestBody Todo updatedTodo) {
//        for (Todo todo : todos) {
//            if (todo.getId().equals(id)) {
//                todo.setTask(updatedTodo.getTask());
//                return todo;
//            }
//        }
//        return null; // 或拋出異常
//    }
//
//    @DeleteMapping("/{id}")
//    public void deleteTodo(@PathVariable Long id) {
//        todos.removeIf(todo -> todo.getId().equals(id));
//    }
//}