$(document).ready(function () {
    $('#login-form').submit((event) => {
        event.preventDefault();
        data = {
            username: event.currentTarget.loginusername.value,
            password: event.currentTarget.loginpassword.value
        }
        $.ajax({
            type: "POST",
            url: "/auth/signin",
            data: data,
            success: (response) => {
                document.
                window.location.replace("form");
            },
            error: (response) => {
                if (response.status === 400) {
                    console.log($('.username-msg').css('display',''))
                    $('.username-msg').show();
                }
                if (response.status === 401) {
                    console.log("PUTA1")
                    $('.password-msg').show();
                }
            },
            data
        })
    })
})