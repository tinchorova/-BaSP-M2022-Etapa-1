window.onload = function () {
    var email = document.getElementById("email-input");
    var pass = document.getElementById("pass-input");
    var myForm = document.getElementById("form-input");
    var button = document.getElementById("btn continue");


    email.addEventListener('focus', emailFocusEvent )
    email.addEventListener('blur', emailBlurEvent )
    pass.addEventListener('focus', passFocusEvent)
    pass.addEventListener('blur', passBlurEvent)

    myForm.addEventListener('submit', function(e) {
        e.preventDefault();

        validateEmail()
        validatePass()

    })


    function validateEmail(){

        var log = email.value
        var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)?$/;

        if (log.match(regx)) {
            //cambiar log por style de validacion
            console.log("good");
            return true
        } else {
            alert("You must insert a valid e-mail")
            return false
        }
    }

    function validatePass(){
        var passVal = pass.value
        var passRegx = /^(?=.*[0-9])(?=.*[a-z]).{8,32}$/

        if (passVal.match(passRegx)){
            return true
        } else {
            alert("Password must have more than 8 characters, and at least 1 number")
        }
}



    function emailFocusEvent(){
        email.placeholder = "";
    }

    function emailBlurEvent(){
        var log = email.value
        if (log == "") {
            email.style.borderColor = "red";
        } email.placeholder = "Email required"

        validateEmail()
    }



    // button.addEventListener('click', validateEmail(), validatePass())

    function passFocusEvent(){
        pass.placeholder = ""
    }

    function passBlurEvent(){
        if (pass.value == "") {
            pass.style.borderColor = "red";
        } pass.placeholder = "Password required"

        validatePass()
    }


    function submitForm(){

    }

































}