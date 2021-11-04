package cn.cy.mapper;

import cn.cy.domain.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface UserMapper {
    List<User> findAll();
    User findById(int id);
    User findByName(String name);
    void save(User user);
}
