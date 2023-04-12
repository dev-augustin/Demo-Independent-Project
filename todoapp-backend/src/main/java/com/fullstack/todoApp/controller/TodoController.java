package com.fullstack.todoApp.controller;


import com.fullstack.todoApp.exception.UserNotFoundException;
import com.fullstack.todoApp.model.Todo;
import com.fullstack.todoApp.model.User;
import com.fullstack.todoApp.repository.TodoTaskRepository;
import com.fullstack.todoApp.repository.UserRepository;
import com.fullstack.todoApp.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.config.Task;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("v1/task")
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {
//    @Autowired
//    private TodoTaskRepository taskRepository;
//    private UserRepository userRepository;

    @Autowired
    private TodoService todoService;

    @PostMapping("/add-task")
    public ResponseEntity<Todo> addTask(@RequestBody Todo newTask) {
        return new ResponseEntity<>(todoService.addTask(newTask), HttpStatus.CREATED);
    }

    @GetMapping("/all-tasks")
    public ResponseEntity<List<Todo>> getAllTasks() {
        return new ResponseEntity<>(todoService.getAllTasks(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Todo> getTaskById(@PathVariable Long id) {
        return new ResponseEntity<>(todoService.getTaskById(id), HttpStatus.OK);
    }

    @GetMapping("/inComplete-tasks")
    public ResponseEntity<List<Todo>> findByTasksCompleted() {
        return new ResponseEntity<>(todoService.findByTasksCompleted(), HttpStatus.OK);
    }

    @GetMapping("/completed-tasks")
    public ResponseEntity<List<Todo>> findByTasksNotCompleted() {
        return new ResponseEntity<>(todoService.findByTasksNotCompleted(), HttpStatus.OK);
    }

    @PutMapping("/update-task/{id}")
    public ResponseEntity<Todo> updateTask(@RequestBody Todo newTask, @PathVariable Long id) {
        return new ResponseEntity<>(todoService.updateTask(newTask, id), HttpStatus.OK);
    }

    @DeleteMapping("/delete-task/{id}")
    public ResponseEntity<String> deleteTask(@PathVariable Long id) {
        String message = todoService.deleteTask(id);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

}
