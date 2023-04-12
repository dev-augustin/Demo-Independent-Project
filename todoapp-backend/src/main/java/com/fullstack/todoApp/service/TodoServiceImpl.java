package com.fullstack.todoApp.service;

import com.fullstack.todoApp.exception.TaskNotFoundException;
import com.fullstack.todoApp.exception.UserNotFoundException;
import com.fullstack.todoApp.model.Todo;
import com.fullstack.todoApp.repository.TodoTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TodoServiceImpl implements TodoService{

    @Autowired
    private TodoTaskRepository taskRepository;
    @Override
    public Todo addTask(Todo newTask) {
        return taskRepository.save(newTask);
    }

    @Override
    public Todo getTaskById(Long id) {
        return taskRepository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException(id));
    }

    @Override
    public List<Todo> getAllTasks() {
        return taskRepository.findAll();
    }

    @Override
    public List<Todo> findByTasksCompleted() {
        return taskRepository.findByIsTaskCompleted();
    }

    @Override
    public List<Todo> findByTasksNotCompleted() {
        return taskRepository.findByTaskNotCompleted();
    }

    @Override
    public Todo updateTask(Todo newTask, Long id) {
        return taskRepository.findById(id)
                .map(task -> {
                    task.setTaskName(newTask.getTaskName());
                    task.setTaskCompleted(newTask.isTaskCompleted());
                    return taskRepository.save(task);
                }).orElseThrow(()-> new TaskNotFoundException(id));
    }

    @Override
    public String deleteTask(Long id) {
        if (!taskRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        taskRepository.deleteById(id);
        return "Task with id " + id + " has been deleted successfully.";


    }
}
