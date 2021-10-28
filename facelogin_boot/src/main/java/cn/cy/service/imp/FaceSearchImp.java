package cn.cy.service.imp;

import cn.cy.core.AiFaceObject;
import cn.cy.core.FaceDetection;
import cn.cy.core.FaceUser;
import cn.cy.domain.Image;
import cn.cy.domain.Result;
import cn.cy.service.FaceSearch;
import com.baidu.aip.face.AipFace;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FaceSearchImp implements FaceSearch {
    @Autowired
    AiFaceObject aiFaceObject;
    @Autowired
    FaceDetection faceDetection;
    @Autowired
    FaceUser faceUser;

    @Override
    public Result faceLogin(Image image) {
        Result detection = DetectionFace(image);
        if (detection.isStart()){
            Result search = search(image);
            if (search.isStart()){
                return search;
            }else {
                Result result = new Result();
                result.setStart(false);
                result.setErrorMsg("Face match failed");
                return result;
            }
        }else {
            Result result = new Result();
            result.setStart(false);
            result.setErrorMsg("Invalid Face");
            return result;
        }
    }

    //检测人脸
    private Result DetectionFace(Image image){
        Result message = new Result();
        AipFace client= aiFaceObject.getClient();
        String res=faceDetection.Facedetection(client, image);
        JSONObject result = new JSONObject(res);
        String errorMsg = result.getString("error_msg");
        if ("SUCCESS".equals(errorMsg)){//成功
            result = result.getJSONObject("result");
            int faceNum = result.getInt("face_num");
            JSONArray faceList = result.getJSONArray("face_list");
            JSONObject subObj = faceList.getJSONObject(0);
            double faceProbability = subObj.getDouble("face_probability");
            if (faceNum==1 && faceProbability > 0.8){//登录的人唯一，是人的准确率0.8以上
                message.setStart(true);
                message.setFaceNum(faceNum);
                message.setMsg("Success");
            }else {
                message.setStart(false);
                message.setFaceNum(faceNum);
                message.setErrorMsg("The face picture does not meet the login requirement");
            }
        }else {
            message.setStart(false);
            message.setFaceNum(0);
            message.setErrorMsg("Face library match failure");
        }
        return message;
    }

    //在人脸库搜索人脸
    private Result search(Image image){
        Result message = new Result();
        AipFace client= aiFaceObject.getClient();
        String res=faceUser.faceuser(client, image);
        JSONObject result = new JSONObject(res);
        String errorMsg = result.getString("error_msg");
        if ("SUCCESS".equals(errorMsg)){//成功
            JSONArray faceList = result.getJSONObject("result").getJSONArray("user_list");
            JSONObject user = faceList.getJSONObject(0);
            double score = user.getDouble("score");
            String userId = user.getString("user_id");
            if (score > 80){//匹配相似度80以上
                message.setStart(true);
                message.setMsg("Success");
                message.setUserId(userId);
            }else {
                message.setStart(false);
                message.setErrorMsg("Face similarity too low");
            }
        }else {
            message.setStart(false);
            message.setErrorMsg("Face library query failed");
        }
        return message;
    }
}
