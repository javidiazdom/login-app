$(document).ready(function () {
    $('#login-form').submit((event) => {
        event.preventDefault();
        data = {
            username: event.currentTarget.username.value,
            password: event.currentTarget.password.value
        }
        $.ajax({
            type: "POST",
            url: "/auth/signin",
            data: data,
            success: () => {
                window.location.replace("form");
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
    })
})