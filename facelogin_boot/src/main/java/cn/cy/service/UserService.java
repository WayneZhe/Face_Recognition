package cn.cy.service;

import cn.cy.domain.User;
import cn.cy.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserMapper userMapper;

    public User show (String userId) {
        try {
            User user = userMapper.findByUserId(userId);
            //System.out.println(user);
            return user;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
