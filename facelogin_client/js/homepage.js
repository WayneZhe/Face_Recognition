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

//

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
        },
        error: function (jqXHR) {
            console.log("ERROR："+jqXHR.status);
        },
        async:true
    })
}