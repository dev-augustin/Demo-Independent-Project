package com.fullstack.todoApp.service;

import com.fullstack.todoApp.model.User;

import java.util.List;

public interface UserService {

   User addUser(User user);

    User getUserById(Long id);

    List<User> getAllUsers();

//   User findUserByEmail(String email);
//
//    User findUserByUserName(String username);
    String saveUser(User user);

    String deleteUser(Long id);

    User updateUser(User user, Long id);
}
