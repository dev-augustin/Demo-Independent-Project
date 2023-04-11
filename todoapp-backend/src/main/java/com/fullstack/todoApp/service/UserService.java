package com.fullstack.todoApp.service;

import com.fullstack.todoApp.model.User;

import java.util.List;

public interface UserService {

   User saveUser(User user);

    User getUserById(Long id);

    List<User> findAllUsers();

//   User findUserByEmail(String email);
//
//    User findUserByUserName(String username);

    String deleteUser(Long id);

    User updateUser(User user, Long id);
}
