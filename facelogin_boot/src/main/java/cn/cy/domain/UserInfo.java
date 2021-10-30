package cn.cy.domain;

import lombok.Data;

@Data
public class UserInfo {
    private String Name;
    private String Gender;
    private String Phone;
    private String Role;
    private String Region;
    private boolean Vaccination;
    //public UserInfo(String jsonFormat){ //Info in Jason}
    public void setInfo(String name, String gender, String phone,
                        String role, String region, boolean vac)
    {
        this.Name = name;
        this.Gender = gender;
        this.Phone = phone;
        this.Role = role;
        this.Region = region;
        this.Vaccination = vac;
    }


}
