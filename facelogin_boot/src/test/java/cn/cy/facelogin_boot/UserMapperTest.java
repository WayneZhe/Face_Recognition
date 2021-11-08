package cn.cy.facelogin_boot;

import cn.cy.domain.User;
import cn.cy.mapper.UserMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.servlet.http.HttpServletRequest;

@SpringBootTest
public class UserMapperTest {
    @Autowired
    private UserMapper userMapper;

    @Autowired
    HttpServletRequest request;

    @Test
    public void sessionTest() {
        String userId = (String) request.getSession().getAttribute("userId");
        System.out.println(userId);
    }

    @Test
    public void insert() {
        User user = new User();
        String userId = "zwei123";
        String username = "way";
        String password = "123456";
        String phone = "15606918713";
        String address = "Sydney";
        int vaccination = 1;
        int role = 0;
        user.setUserId(userId);
        user.setUsername(username);
        user.setPassword(password);
        user.setPhone(phone);
        user.setAddress(address);
        user.setVaccination(vaccination);
        user.setRole(role);
        Integer id = userMapper.insert(user);
        System.out.println(id);
    }
}
