package cn.cy.core;

import java.util.HashMap;

import cn.cy.domain.Image;
import org.json.JSONObject;

import com.baidu.aip.face.AipFace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class FaceUser {
	@Autowired
	AiFaceObject aiFaceObject;
	public String faceuser(AipFace client, Image image){
	    HashMap<String, String> options = new HashMap<String, String>();
	    options.put("quality_control", "NORMAL");
	    options.put("liveness_control", "LOW");
	    options.put("max_user_num", "1");

	    String groupIdList = aiFaceObject.GROUP_LIST;	//人脸库组名称（需要自己修改）

	    JSONObject res = client.search(image.getImgStr(), image.getImgType(), groupIdList, options);
	    return res.toString(2);
	}
}
