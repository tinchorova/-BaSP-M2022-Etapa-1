window.onload = function (){

    //vars

    var firstName = document.getElementById("firstName")
    var lastName = document.getElementById("lastName")
    var dni = document.getElementById("dni")
    var date = document.getElementById("date")
    var phone = document.getElementById("phone")
    var address = document.getElementById("address")
    var localidad = document.getElementById("localidad")
    var postCode = document.getElementById("postCode")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var repeatPassword = document.getElementById("repeatPassword")

    //events

    firstName.addEventListener('focus', firstNameFocusEvent)
    firstName.addEventListener('blur', firstNameBlurEvent)

    lastName.addEventListener('focus', lastNameFocusEvent)
    lastName.addEventListener('blur', lastNameBlurEvent)

    //funciones

    function firstNameBlurEvent(){

        var log = firstName.value
        var firstNameRegx = /[a-zA-Z]{3,15}/
        

        if (log.match(firstNameRegx)) {
            console.log("good")
        } else {
            span1.textContent = "invalid firstName"
            span1.style.color = "red"
            firstName.style.borderColor = "red"

        }
    }

    function firstNameFocusEvent(){
        span1.textContent = ""
        firstName.style.borderColor = ""
        firstName.placeholder = ""
    }

    //--

    function lastNameBlurEvent(){

        var log = lastName.value
        var lastNameRegx = /[a-zA-Z]{3,15}/


        if (log.match(lastNameRegx)) {
            console.log("good")
        } else {
            span2.textContent = "invalid lastName"
            span2.style.color = "red"
            lastName.style.borderColor = "red"

        }
    }

    function lastNameFocusEvent(){
        span1.textContent = ""
        lastName.style.borderColor = ""
        lastName.placeholder = ""
    }

















}











