package cn.cy.mapper;

import cn.cy.domain.Visitor;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface VisitorMapper {
    List<Visitor> findAll();
    Visitor findById(int id);
    Visitor findByName(String name);
    void save(Visitor visitor);
}
