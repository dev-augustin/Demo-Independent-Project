//package com.fullstack.todoApp.controller;
//
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpSession;
//import org.springframework.context.annotation.Scope;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//
//@Controller
//public class LogoutController {
//
//    @RequestMapping(value="/logout",method = RequestMethod.GET)
//    public String logout(HttpServletRequest request){
//        HttpSession httpSession = request.getSession();
//        httpSession.invalidate();
//        return String.valueOf(request.getSession());
//    }
//
//}
//
//
