package cn.cy.domain;

import lombok.Data;
@Data
public class User {
    private String userId;
    private String pwd;
    private UserInfo info;
    private String GPS;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public boolean isVaccination() {
        if (info == null) return false;
        return this.getInfo().isVaccination();
    }


    public void ViewFlowDistribution(){

    }

    public void ViewBuildingCapacity(){

    }


}
