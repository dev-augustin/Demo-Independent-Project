package com.fullstack.todoApp.service;

import com.fullstack.todoApp.exception.UserNotFoundException;
import com.fullstack.todoApp.model.User;
import com.fullstack.todoApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
//    private BCryptPasswordEncoder passwordEncoder;
//
//    public UserServiceImplementation(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
//        this.userRepository = userRepository;
//        this.passwordEncoder = passwordEncoder;
//    }
//
//    @Override
//    public User saveUser(User user) {
//        User newUser = new User();
//        newUser.setName(user.getName());
//        newUser.setUserName(user.getUserName());
//        newUser.setEmail(user.getEmail());
//        newUser.setPassword(passwordEncoder.encode(user.getPassword()));
//        return userRepository.save(user);
//    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @Override
    public List<User> findAllUsers() {
        return userRepository.findAll();
    }


//////////////////


//    @Override
//    public User findUserByEmail(String email) {
//        return userRepository.findByEmail(email);
//    }
//
//    @Override
//    public User findUserByUserName(String username) {
//        return userRepository.findByUserName(username);
//    }

    @Override
    public String deleteUser(Long id) {

        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id " + id + " has been deleted successfully.";
    }

    @Override
    public User updateUser(User userInfo, Long id) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setName(userInfo.getName());
                    user.setUserName(userInfo.getUserName());
                    user.setEmail(userInfo.getEmail());
                    user.setPassword(userInfo.getPassword());
                    return userRepository.save(user);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }
}
