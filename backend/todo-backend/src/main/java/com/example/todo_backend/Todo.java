package com.example.todo_backend;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String task;

    // 無參建構函數（JPA要求）
    public Todo() {}

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