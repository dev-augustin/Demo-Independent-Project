package com.fullstack.todoApp.controller;

import com.fullstack.todoApp.model.User;

import com.fullstack.todoApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("v1/user")
@CrossOrigin("http://localhost:3000/")
public class UserController {

    @Autowired
    private UserService userService;

//       @Autowired
//  BCryptPasswordEncoder passwordEncoder;

//    @PostMapping("/add")
//    public String add(@RequestBody User user) {
//        userService.saveUser(user);
//        return "New User is added";
//    }

    @PostMapping("/add-user")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        ;
        return new ResponseEntity<>(userService.addUser(user), HttpStatus.CREATED);
//        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("/all-users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return new ResponseEntity<>(userService.getUserById(id), HttpStatus.OK);
    }

    @DeleteMapping("/delete-User/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        String message = userService.deleteUser(id);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

        @PutMapping("/update-user/{id}")
    public ResponseEntity<User> updateUser(@RequestBody User userInfo, @PathVariable Long id){
    User user=userService.updateUser(userInfo, id);
    return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping("/save-user")
    public ResponseEntity<String> saveUser(@RequestBody User user){
        String response = userService.saveUser(user);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }


//    @PutMapping("/updateUser/{id}")
//    User updateUser(@RequestBody User newUser, @PathVariable Long id){
//        return userRepository.findById(id)
//                .map(user -> {
//                    user.setName(newUser.getName());
//                    user.setUserName(newUser.getUserName());
//                    user.setEmail(newUser.getEmail());
//                    user.setPassword(newUser.getPassword());
//                    return userRepository.save(user);
//                }).orElseThrow(()-> new UserNotFoundException(id));
//    }
//
//    @DeleteMapping("/delete-User/{id}")
//    String deleteUser(@PathVariable Long id){
//        if(!userRepository.existsById(id)){
//            throw new UserNotFoundException(id);
//        }
//        userRepository.deleteById(id);
//        return "User with id "+id+" has been deleted successfully.";
//
//    }

//
//    @PostMapping("/addUser")
//    String newUser(@Valid @RequestBody User newUser){
//
////        String encodedPwd = passwordEncoder.encode(newUser.getPassword());
////        newUser.setPassword(encodedPwd);
//
//        List<User> users = userRepository.findAll();
//
//        for (User user : users) {
//            System.out.println("Registered user: " + newUser.toString());
//
//            if (user.getUserName().equals(newUser.getUserName())) {
//                System.out.println("User Already exists!");
//                return "USER_ALREADY_EXISTS";
//            }
//        }
////        userRepository.save(newUser);
////        return new ResponseEntity<>(HttpStatus.CREATED);
//        userRepository.save(newUser);
//        return "SUCCESS";
//    }
////    private SecurityContextRepository securityContextRepository =
////            new HttpSessionSecurityContextRepository();
//
////    @PostMapping("/login")
////    public void login(@RequestBody User user, HttpServletRequest request, HttpServletResponse response) {
////        UsernamePasswordAuthenticationToken token = UsernamePasswordAuthenticationToken.unauthenticated(
////               user.getUserName(), user.getPassword());
////        Authentication authentication = this.authenticationManager.authenticate(token);
////        // ...
////        SecurityContext context = this.securityContextHolderStrategy.createEmptyContext();
////        context.setAuthentication(authentication);
////        this.securityContextHolderStrategy.setContext((SecurityContext) authentication);
////    }
//
////    @PostMapping("/login")
////    String userLogin(@Valid @RequestBody User userInfo, HttpSession session){
////        List<User> users = userRepository.findAll();
////        String test;
////        for (User other : users) {
////            test = passwordEncoder.encode(other.getPassword());
////            if ((other.getUserName().equals(userInfo.getUserName()) &&
//////                    (test.equals(userInfo.getPassword())))
//////                    (other.getPassword()).equals(userInfo.getPassword())))
////                    passwordEncoder.matches(userInfo.getPassword(), other.getPassword())))
//////                    )
////            {
//////                userInfo.setLoggedIn(true);
//////                userRepository.save(userInfo);
////
////                return "SUCCESS" + " "+ session.getId();
////            }
////        }
////
////        return "FAILURE";
////
////    }
////    @GetMapping("/logout")
////    String userLogout(HttpSession session){
////        return "SUCCESS" + " "+ session.getId() ;
////    }
//
//    @GetMapping("/user/{id}")
//    User getUserById(@PathVariable Long id){
//        return userRepository.findById(id)
//                .orElseThrow(()-> new UserNotFoundException(id));
//    }
//
//    @GetMapping("/username")
//    public String user(Principal principal) {
//        return principal.getName();
//    }
//

//
//



}
