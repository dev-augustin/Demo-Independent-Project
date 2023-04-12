package com.fullstack.todoApp.service;

import com.fullstack.todoApp.model.Todo;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface TodoService {

    Todo addTask(Todo newTask);

    Todo getTaskById(Long id);
    List<Todo> getAllTasks();

    List<Todo> findByTasksCompleted();
    List<Todo> findByTasksNotCompleted();

    Todo updateTask(Todo newTask,Long id);

    String deleteTask(Long id);
}
