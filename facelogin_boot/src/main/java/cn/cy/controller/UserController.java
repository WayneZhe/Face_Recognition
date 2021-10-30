package cn.cy.controller;

import cn.cy.domain.Image;
import cn.cy.domain.Result;
import cn.cy.domain.User;
import cn.cy.service.FaceRegister;
import cn.cy.service.FaceSearch;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

@CrossOrigin
@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    FaceSearch faceSearch;
    @Autowired
    FaceRegister faceRegister;

    @RequestMapping("/login")
    @ResponseBody
    public Result login(Image image, HttpSession session){
        User user = new User();
        Result result = faceSearch.faceLogin(image);
        user.setUserId(result.getUserId());
        session.setAttribute("user",user);
        return result;
    }

    @RequestMapping("/register")
    @ResponseBody
    public Result register(Image image){
        Result result = faceRegister.register(image);
        return result;
    }

    public void SignIn() {

        //location people += 1
    }

    public void SignOut() {
        //location people -= 1
        //display sign-out page(current time, name of user, location name)
    }
}
