package cn.cy.controller;

import cn.cy.domain.Location;

public class LocationController {
    private Location location;
    public void PeopleIn() {
        location.setNum_Of_People(location.getNum_Of_People() + 1);
    }

    public void PeopleOut() {
        int Curent_Num = location.getNum_Of_People();
        location.setNum_Of_People(Curent_Num  > 0 ? Curent_Num - 1 : 0);
    }

    public void BuildingAnalysis() {
        //current num vs. capacity
        //degree of heat
        //building name

    }
}
