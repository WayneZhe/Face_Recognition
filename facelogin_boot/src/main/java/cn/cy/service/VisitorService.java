package cn.cy.service;

import cn.cy.domain.Visitor;
import cn.cy.mapper.VisitorMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VisitorService {
    @Autowired
    VisitorMapper visitorMapper;

    public String apply(Visitor visitor) {
        try {
            visitorMapper.save(visitor);
            System.out.println("save...");
            return "Application succeeded, waiting for approval.";
        } catch (Exception e) {
            e.printStackTrace();
            return e.getMessage();
        }
    }
}
