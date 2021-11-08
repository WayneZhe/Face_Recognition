package cn.cy.service.imp;

import cn.cy.core.AiFaceObject;
import cn.cy.core.FaceRegistration;
import cn.cy.core.FaceUser;
import cn.cy.domain.Image;
import cn.cy.domain.Result;
import cn.cy.domain.User;
import cn.cy.mapper.UserMapper;
import cn.cy.service.FaceRegister;
import com.baidu.aip.face.AipFace;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FaceRegisterImp implements FaceRegister {
    @Autowired
    AiFaceObject aiFaceObject;
    @Autowired
    FaceRegistration faceRegistration;
    @Autowired
    FaceUser faceUser;
    @Autowired
    UserMapper userMapper;
    @Override
    public Result register(Image image, User user) {
        System.out.println("=================");
        System.out.println(user);
        System.out.println("=================");
        Result message = new Result();
        if(!search(image)) {
            JSONObject result = faceRegister(image,aiFaceObject.GROUP_LIST);
            int error_code = result.getInt("error_code");
            if (error_code == 0){ //注册成功
                //
                try {
                    Integer id = userMapper.insert(user);
                    if(id != 0) {
                        System.out.println("insert user");
                        message.setStart(true);
                        message.setMsg("Registration success");
                    }

                } catch (Exception e) {
                    e.printStackTrace();
                    System.out.println(e.getMessage());
                }
                //message.setStart(true);
                //message.setMsg("Registration success");
            }else if (error_code==222202){
                message.setStart(false);
                message.setErrorMsg("Please put your face in front of the camera");
            }else if (error_code == 223114) {
                message.setStart(false);
                message.setErrorMsg("face is fuzzy, please try again");
            }
            else {
                message.setStart(false);
                message.setErrorMsg("Error code "+result.getInt("error_code"));
            }
        }else {
            message.setStart(false);
            message.setErrorMsg("The face data has already registered");
        }
        return message;
    }

    private JSONObject faceRegister(Image image,String groudList){
        AipFace client= aiFaceObject.getClient();
        String res = faceRegistration.Faceregistrtion(client,groudList,image);
        JSONObject result = new JSONObject(res);
        return result;
    }
    //在人脸库搜索人脸
    private boolean search(Image image){
        AipFace client= aiFaceObject.getClient();
        String res=faceUser.faceuser(client, image);
        JSONObject result = new JSONObject(res);
        String errorMsg = result.getString("error_msg");
        if ("SUCCESS".equals(errorMsg)){//成功
            JSONArray faceList = result.getJSONObject("result").getJSONArray("user_list");
            JSONObject user = faceList.getJSONObject(0);
            double score = user.getDouble("score");
            if (score > 80){//匹配相似度80以上
                return true;
            }
        }
        return false;
    }
}
