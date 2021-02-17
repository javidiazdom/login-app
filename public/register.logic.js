$(document).ready(function () {
    $('#register-button').click((event) => {
        if ($('#password').val() === $('#cpassword').val()) {
            console.log("Tetas")
            data = {
                username: $('#username').val(),
                password: $('#password').val()
            }
            $.ajax({
                type: "POST",
                url: "/auth/register",
                data: data,
                success: (response) =>{
                    window.location.replace("form")
                },
                error: (response) => {
                    if (response.status === 400) {
                        //wrong username
                    }
                    if (response.status === 401) {
                        //wrong password
                    }
                },
                data
            })
        } else {
            //contraseñas no correctas
        }
    })
})