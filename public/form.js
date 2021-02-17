$(document).ready(function () {
    $('#form-button').click(() => {
        ($('input[name="rate"]:checked').val() && Cookies.get('username')) && 
        ($.ajax({
            type: "POST", 
            url: "/form",
            data: {formdata: $('input[name="rate"]:checked').val(), username: Cookies.get('username')},
            success: (response) => {
                window.location.replace("/completed");
            },
            error: (response) => {
                $('h5').css('display','block')
            }
        }))
    })
})