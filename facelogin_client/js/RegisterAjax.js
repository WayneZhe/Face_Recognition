function FaceRegister() {
    const userId = $('#imgId').val();
    const username = $('#username').val();
    const psw = $('#psw').val();
    const phone = $('#phone').val();
    const address = $('#address').val();
    const vac = $('input:radio[name="vaccination"]:checked').val();
    const role = $('input:radio[name="role"]:checked').val();

    setTimeout(function () {
        img = getFace();
        $.ajax({
            type:"post",
            url:"http://localhost:8080/user/register",//后台接口
            data:{
            	// "imgId":$("#imgId").val(),
                "imgId": userId,
                "imgStr":img,
                "imgType":"BASE64",
                userId: userId,
                username: username,
                phone: phone,
                password: psw,
                address: address,
                vaccination: vac,
                role: role
            },
            dataType:"json",
            success:function (data) {
                console.log(data);
                var start = data["start"]
                if(start == true){
                	alert(data["msg"])
                    window.location.href ="../facelogin_client/index.html"
                }
                else{
                	alert(data["errorMsg"])
                    // Facelogin();
                }
            },
            error:function () {
                alert("连接服务器失败")
            },
            async:true
        })
    },500);
}

