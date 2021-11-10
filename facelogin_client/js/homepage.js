// navigation
$('#global_nav_profile_link').click(function() {
    $('#global_nav_profile_link').addClass('active')
    $('#global_nav_profile_link').parent().siblings().children().removeClass('active')
    $('.user-profile').attr('style', 'display:block')
    $('.user-profile').siblings().attr('style', 'display:none')
})

$('#global_nav_dashboard_link').click(function() {
    $('#global_nav_dashboard_link').addClass('active')
    $('#global_nav_dashboard_link').parent().siblings().children().removeClass('active')
    $('.distribution').attr('style', 'display:block')
    $('.distribution').siblings().attr('style', 'display:none')
})

$('#global_nav_history_link').click(function() {
    $('#global_nav_history_link').addClass('active')
    $('#global_nav_history_link').parent().siblings().children().removeClass('active')
    $('.clockin').attr('style', 'display:block')
    $('.clockin').siblings().attr('style', 'display:none')
})

$('#global_nav_groups_link').click(function() {
    $('#global_nav_groups_link').addClass('active')
    $('#global_nav_groups_link').parent().siblings().children().removeClass('active')
    $('.visitors').attr('style', 'display:block')
    $('.visitors').siblings().attr('style', 'display:none')
})

$('#global_nav_help_link').click(function() {
    alert('User logout...')
    window.location.href ="../facelogin_client/register.html";
})

// user information
$(document).ready(function() {
    var userId = window.location.search.substring(1).split("?")[0]
    // console.log(userId)
    $.ajax({
        type:"POST",
        url:"http://localhost:8080/user/showinfo",
        dataType: "JSON",
        data: {
            userId: userId
        },
        success: function (data) {
            console.log("show user information success");
            console.log(data);
            $("#user-profile-name").html(data['username'])

            if(data['role'] == 0) {
                $("#identity").html('Student')
            } else  if(data['role'] == 1) {
                $("#identity").html('Researcher')
            } else if(data['role'] == 2) {
                $("#identity").html('Lecturer')
            } else if(data['role'] == 3) {
                $("#identity").html('Cleaner')
            }

            $("#phone-number").text(data['phone'])
            $("#mail-address").text(data['address'])

            if(data['vaccination'] == 1) {
                $("#vaccination").text('Yes')
            } else  {
                $("#vaccination").text('No')
            }
        },
        error: function (jqXHR) {
            console.log("ERROR："+jqXHR.status);
        },
        async:true
    })
})

// visitor application
function apply() {
    const visitorname = $('#visitorname').val();
    const phone = $('#phone').val();
    const address = $('#address').val();
    const vaccination = $('input:radio[name="vaccination"]:checked').val();

    $.ajax({
        type:"POST",
        url:"http://localhost:8080/visitor/application",
        dataType: "text",
        data: {
            visitorname: visitorname,
            phone: phone,
            address: address,
            vaccination: vaccination
        },
        success: function (data) {
            console.log("Applicatioin success");
            console.log(data);
            reset();
            alert(visitorname + " applicatioin success ")
        },
        error: function (jqXHR) {
            console.log("ERROR："+jqXHR.status);
        },
        async:true
    })
}

function reset() {
    $('#visitorname').val("");
    $('#phone').val("");
    $('#address').val("");
    $('input:radio[name="vaccination"]').get(0).checked=true;
}