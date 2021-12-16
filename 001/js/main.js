$(document).ready(function() {
    $("#form1").validate({
        rules: {

            email: {
                required: true,
                email: true,
                maxlength: 30,
                minlength: 10
            },
            user: {
                required: true,
                maxlength: 10,
                minlength: 1,
                alphanumeric: true
            },
            nome: {
                required: true,
                maxlength: 50,
                minlength: 2,
                letterswithbasicpunc: true,
                minWords: 1
            },
            idade: {
                required: true,
                max: 120,
                min: 1
            },
            senha: {
                required: true,
                maxlength: 10,
                minlength: 4
            },

        }
    })
})