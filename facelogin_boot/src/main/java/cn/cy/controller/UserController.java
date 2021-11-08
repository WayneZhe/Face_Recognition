package cn.cy.controller;

import cn.cy.domain.Image;
import cn.cy.domain.Result;
import cn.cy.domain.User;
import cn.cy.mapper.UserMapper;
import cn.cy.service.FaceRegister;
import cn.cy.service.FaceSearch;
import cn.cy.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@CrossOrigin(allowCredentials = "true")
@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    FaceSearch faceSearch;
    @Autowired
    FaceRegister faceRegister;
    @Autowired
    UserService userService;

    @RequestMapping("/login")
    @ResponseBody
    public Result login(Image image){
        User user = new User();
        Result result = faceSearch.faceLogin(image);
        user.setUserId(result.getUserId());

        return result;
    }

    @RequestMapping("/register")
    @ResponseBody
    public Result register(Image image, User user){
        Result result = faceRegister.register(image, user);
        return result;
    }

    @RequestMapping("/showinfo")
    @ResponseBody
    public User show(String userId) {
        User user = userService.show(userId);
        return user;
    }
}
