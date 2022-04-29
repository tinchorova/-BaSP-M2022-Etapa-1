window.onload = function () {
    var email = document.getElementById("email-input");
    var pass = document.getElementById("pass-input");
    var myForm = document.getElementById("form-input");
    var button = document.getElementById("btn continue");
    var span1 = document.getElementById("span1")
    var span2 = document.getElementById("span2")


    email.addEventListener('focus', emailFocusEvent)
    email.addEventListener('blur', emailBlurEvent)
    pass.addEventListener('focus', passFocusEvent)
    pass.addEventListener('blur', passBlurEvent)

    myForm.addEventListener('submit', function(e) {
        e.preventDefault();

        formValidation()

    })

    

    //FUNCIONES

    function emailBlurEvent(){

        var log = email.value
        var emailRegx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/


        if (log.match(emailRegx)) {
            console.log("good")
        } else {
            span1.textContent = "invalid email"
            span1.style.color = "red"
            email.style.borderColor = "red"

        }
    }

    function emailFocusEvent(){
        span1.textContent = ""
        email.style.borderColor = ""
        email.placeholder = ""
    }

    function passBlurEvent(){

        var passValue = pass.value
        var passRegx = /^(?=.*[0-9])(?=.*[a-z]).{8,32}$/

        if (passValue.match(passRegx)) {
            console.log("good")
        } else {
            span2.textContent = "invalid password"
            span2.style.color = "red"
            pass.style.borderColor = "red"
        }
    }

    function passFocusEvent(){
        span2.textContent = ""
        pass.style.borderColor = ""
        pass.placeholder = ""
    }

    function formValidation(){

        var log = email.value
        var emailRegx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
        var passValue = pass.value
        var passRegx = /^(?=.*[0-9])(?=.*[a-z]).{8,32}$/
        var logValidation = (log.match(emailRegx))
        var passValidation = (passValue.match(passRegx))

        if  (logValidation && passValidation){
            alert("Log in successful!   " + "username: " +(log) + "   password: " + (passValue))
        } else if (logValidation || passValidation) {
            alert("Incorrect email or password")
        }


        // --------------------------- Week 07





























        



    }






































}