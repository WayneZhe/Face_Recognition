function Facelogin() {
    setTimeout(function () {
        img = getFace();
        $.ajax({
            type:"post",
            url:"http://localhost:8080/user/login", //后台接口
            data:{
                "imgStr":img,
                "imgType":"BASE64"
            },
            dataType:"json",
            success:function (data) {
                console.log(data);
                //{
                //     "start": true,
                //     "userId": "wzh4827",
                //     "msg": "Success",
                //     "faceNum": 0,
                //     "errorMsg": null
                // }
                var start = data["start"]
                if(start == true){  // login success
                	// alert("用户id:"+data["userId"]+"登录"+data["msg"])
                    window.location.href ="../facelogin_client/homepage.html?"+data['userId']
                }
                else{
                	console.log(data["errorMsg"])
                    Facelogin();
                }
            },
            error:function () {
                alert("连接服务器失败")
            },
            async:true
        })
    },500);
}

