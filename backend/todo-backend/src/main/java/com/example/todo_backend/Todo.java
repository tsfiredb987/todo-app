package com.example.todo_backend;

public class Todo {
    private Long id;
    private String task;

    public Todo(Long id, String task) {
        this.id = id;
        this.task = task;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTask() { return task; }
    public void setTask(String task) { this.task = task; }
}