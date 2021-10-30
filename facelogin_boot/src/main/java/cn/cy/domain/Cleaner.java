package cn.cy.domain;
import lombok.Data;


@Data
public class Cleaner {
    Location WorkPlace;

    String getPlaceID() {
        return WorkPlace.getLocation_ID();
    }

    String getPlaceName() {
        return WorkPlace.getName();
    }
}
