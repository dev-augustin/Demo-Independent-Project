//package com.fullstack.todoApp.config;
//
//import com.fullstack.todoApp.model.User;
//import com.fullstack.todoApp.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//@Service
//public class CustomUserDetailsService implements UserDetailsService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        User user = userRepository.findByUserName(username);
//        if(user==null){
//            throw new UsernameNotFoundException("User not found");
//        }
//        return new CustomUserDetails(user);
//    }
//}
