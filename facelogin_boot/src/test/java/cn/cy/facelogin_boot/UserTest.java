package cn.cy.facelogin_boot;

import cn.cy.domain.*;
import cn.cy.service.FaceRegister;
import cn.cy.service.FaceSearch;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

class UserTest {
    UserInfo info = new UserInfo();
    @Test
    void test1() {

        info.setName("a name");
        System.out.println("test1: " + info.getName());

    }
    User u = new User();
    @Test
    void test2() {

        System.out.println("test2: " + u.getUserId());
    }
    @Test
    void test3() {
        info.setName("a name");
        u.setInfo(info);
        info.setGender("Male");
        u.getInfo().setVaccination(true);
        System.out.println("test3: " + u.getInfo());
        System.out.println("test3: " + u.toString());
    }
    @Test
    void test4() {
        info.setName("a name");
        System.out.println("test4: " + u.isVaccination());
        u.setInfo(info);
        System.out.println("test4: " + u.isVaccination());
        u.getInfo().setVaccination(true);
        System.out.println("test4: " + u.isVaccination());
        System.out.println("test4: " + u.toString());
    }
    @Test
    void test5() {
        Student s = new Student();
        System.out.println("test5: " + s.toString());
        System.out.println("test5: " + s.getGPS());
        s.setGPS("1:1:1:1");
        System.out.println("test5: " + s.toString());
        System.out.println("test5: " + s.getGPS());
    }
    @Test
    void test6() {
        Teacher t = new Teacher();
        System.out.println("test6: " + t.toString());
    }
    @Test
    void test7() {
        Visitor v = new Visitor();
        System.out.println("test7: " + v.toString());
    }
    @Test
    void test8() {
        SystemAdmin admin = new SystemAdmin();
        System.out.println("test8: " + admin.toString());
    }
    @Test
    void test9() {
        Cleaner c = new Cleaner();
        System.out.println("test9: " + c.toString());
    }
    @Test
    void test10() {}
}
