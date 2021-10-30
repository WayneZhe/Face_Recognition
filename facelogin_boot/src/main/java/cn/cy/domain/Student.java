package cn.cy.domain;
import lombok.Data;

@Data
public class Student extends User {
    private Location Lab;

    String getLabID() {
        return Lab.getLocation_ID();
    }

    String getLabName() {
        return Lab.getName();
    }

}
