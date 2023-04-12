package com.fullstack.todoApp.exception;


public class NoTaskFoundException extends RuntimeException{
    public NoTaskFoundException() {
        super("No tasks found");
    }


}