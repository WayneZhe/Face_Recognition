package cn.cy.service;

import cn.cy.domain.Image;
import cn.cy.domain.Result;
import cn.cy.domain.User;
import org.springframework.stereotype.Service;

@Service
public interface FaceRegister {
    Result register(Image image, User user);
}
