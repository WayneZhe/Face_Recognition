package cn.cy.mapper;

import cn.cy.domain.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface UserMapper {
    Integer insert(User user);
    List<User> findAll();
    User findByUserName(String username);
    User findByUserId(String userId);
}
