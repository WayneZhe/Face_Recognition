package cn.cy.core;

import com.baidu.aip.face.AipFace;
import org.springframework.stereotype.Component;

@Component
public class AiFaceObject {
	public String APP_ID = "25065258";
	public String API_KEY = "9uUN7V9FOGocUXKKnzmMihwF";
	public String SECRET_KEY = "KT5wOF9WeKs87rR8EwXUsy7YMucNzf5N";
	public String GROUP_LIST = "USYD";
	    
	private AipFace client = new AipFace(APP_ID, API_KEY, SECRET_KEY);

	public AipFace getClient(){
		client.setConnectionTimeoutInMillis(2000);
		client.setSocketTimeoutInMillis(60000);
		return client;
	}
	    
}
