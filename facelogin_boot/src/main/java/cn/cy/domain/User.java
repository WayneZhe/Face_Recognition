package cn.cy.domain;

import lombok.Data;

@Data
public class User {
    private String userId;
    private String username;
    private String identity;
    private String phone;
    private String address;
    private int vaccination;
}
