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

        // if  (logValidation && passValidation){
        //     alert("Log in successful!   " + "username: " +(log) + "   password: " + (passValue))
        // } else if (logValidation || passValidation) {
        //     alert("Incorrect email or password")
        // }


        // --------------------------- Week 07

        // fetch("https://rickandmortyapi.com/api/character")
        // .then(function (response) {
        //     console.log (response)
        //     return response.json()
        // })
        // .catch(function(error) {
        //     console.log("Error: ", error)
        // })


        // var queryParams = "username=rose@radiumrocket.com&password=BaSP2022"

        const urlApi = "https://basp-m2022-api-rest-server.herokuapp.com/login"

        button.addEventListener("click", submitClick)

        function submitClick(e){
            (e).preventDefault
            if (logValidation && passValidation){
            alert("Login successful \nEmail:" + email.value +  "\nPassword:"  + pass.value)
            const dataSend = `https://basp-m2022-api-rest-server.herokuapp.com/login?email=${email.value}&password=${pass.value}`
            fetch(dataSend)
                .then(function(){
                    alert("request successful")
                })
                .catch(function(){
                    alert("request failed")
                })
            } else if (!logValidation && !passValidation){
                alert("Error: Email and password incorrect \nEmail: " + email.value + "\nPassword: " + pass.value)
            } else if (!logValidation){
                alert("Error: Incorrect email \nEmail: " + email.value)
            } else {
                alert("Error: Incorrect password \nPassword: "+ pass.value)
            }
        }






























    }






































}