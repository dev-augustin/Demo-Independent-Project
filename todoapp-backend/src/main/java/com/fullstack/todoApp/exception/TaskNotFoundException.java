package com.fullstack.todoApp.exception;

public class TaskNotFoundException extends RuntimeException{
    public TaskNotFoundException(Long id) {
        super("Could not find the task with id "+id);
    }


}
