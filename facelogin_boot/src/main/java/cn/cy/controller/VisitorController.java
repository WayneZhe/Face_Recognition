package cn.cy.controller;

import cn.cy.domain.Visitor;
import cn.cy.service.VisitorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@CrossOrigin
@Controller
@RequestMapping("/visitor")
public class VisitorController {
    @Autowired
    VisitorService visitorService;

    @RequestMapping("/application")
    @ResponseBody
    public String apply(Visitor visitor) {
        return visitorService.apply(visitor);
    }
}
