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

    dni.addEventListener('focus', dniFocusEvent)
    dni.addEventListener('blur', dniBlurEvent)

    // date.addEventListener('focus', dateFocusEvent)
    // date.addEventListener('blur', dateBlurEvent)

    phone.addEventListener('focus', phoneFocusEvent)
    phone.addEventListener('blur', phoneBlurEvent)

    address.addEventListener('focus', addressFocusEvent)
    address.addEventListener('blur', addressBlurEvent)

    localidad.addEventListener('focus', localidadFocusEvent)
    localidad.addEventListener('blur', localidadBlurEvent)

    postCode.addEventListener('focus', postCodeFocusEvent)
    postCode.addEventListener('blur', postCodeBlurEvent)

    email.addEventListener('focus', emailFocusEvent)
    email.addEventListener('blur', emailBlurEvent)

    password.addEventListener('focus', passwordFocusEvent)
    password.addEventListener('blur', passwordBlurEvent)

    repeatPassword.addEventListener('focus', repeatPasswordFocusEvent)
    repeatPassword.addEventListener('blur', repeatPasswordBlurEvent)

    //funciones

    function firstNameBlurEvent(){

        var log = firstName.value
        var firstNameRegx = /[a-zA-Z]{3,15}/


        if (log.match(firstNameRegx)) {
            console.log("good")
        } else {
            span1.textContent = "invalid first name"
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
            span2.textContent = "invalid last name"
            span2.style.color = "red"
            lastName.style.borderColor = "red"

        }
    }

    function lastNameFocusEvent(){
        span1.textContent = ""
        lastName.style.borderColor = ""
        lastName.placeholder = ""
    }

    //----

    function dniBlurEvent(){

        var dniValue = dni.value
        var dniRegx = /[0-9]{3,15}/


        if (dniValue.match(dniRegx)) {
            console.log("good")
        } else {
            span3.textContent = "invalid DNI"
            span3.style.color = "red"
            dni.style.borderColor = "red"

        }
    }

    function dniFocusEvent(){
        span3.textContent = ""
        dni.style.borderColor = ""
        dni.placeholder = ""
    }

    // fecha de nacimiento

    //----

    function phoneBlurEvent(){

        var phoneValue = phone.value
        var phoneRegx = /[0-9]{3,15}/


        if (phoneValue.match(phoneRegx)) {
            console.log("good")
        } else {
            span5.textContent = "invalid phone"
            span5.style.color = "red"
            phone.style.borderColor = "red"

        }
    }

    function phoneFocusEvent(){
        span5.textContent = ""
        phone.style.borderColor = ""
        phone.placeholder = ""
    }

    //----

    function addressBlurEvent(){

        var addressValue = address.value
        var addressRegx = /[0-9]{3,15}/


        if (addressValue.match(addressRegx)) {
            console.log("good")
        } else {
            span6.textContent = "invalid address"
            span6.style.color = "red"
            address.style.borderColor = "red"

        }
    }

    function addressFocusEvent(){
        span6.textContent = ""
        address.style.borderColor = ""
        address.placeholder = ""
    }

    //----

    function localidadBlurEvent(va)
    {
        
        var letterC = 0;

        var va2 = va.toLowerCase();

        for (var i = 0; i < va2.length; i++) 
        {
            for (var j = 0; j < abc.length; j++) 
            {
                if (va2[i] == abc[j]) 
                {
                    letterC+=1;
                }

                if (letterC>=3)
                {
                    return true;
                }
            }
        }
        
        return false;
    
    }
    // function localidadBlurEvent(){

    //     var localidadValue = localidad.value
    //     var localidadRegx = /[0-9]{3,15}/


    //     if (localidadValue.match(localidadRegx)) {
    //         console.log("good")
    //     } else {
    //         span7.textContent = "invalid localidad"
    //         span7.style.color = "red"
    //        localidad.style.borderColor = "red"

    //     }
    // }

    function localidadFocusEvent(){
        span7.textContent = ""
       localidad.style.borderColor = ""
       localidad.placeholder = ""
    }

    //---

    function postCodeBlurEvent(){

        var postCodeValue = postCode.value
        var postCodeRegx = /[0-9]{3,15}/


        if (postCodeValue.match(postCodeRegx)) {
            console.log("good")
        } else {
            span8.textContent = "invalid post code"
            span8.style.color = "red"
           postCode.style.borderColor = "red"

        }
    }

    function postCodeFocusEvent(){
        span8.textContent = ""
       postCode.style.borderColor = ""
       postCode.placeholder = ""
    }

    //--

    function emailBlurEvent(){

        var emailValue = email.value
        var emailRegx = /[0-9]{3,15}/


        if (emailValue.match(emailRegx)) {
            console.log("good")
        } else {
            span9.textContent = "invalid email"
            span9.style.color = "red"
           email.style.borderColor = "red"

        }
    }

    function emailFocusEvent(){
        span9.textContent = ""
       email.style.borderColor = ""
       email.placeholder = ""
    }

    //---

    function passwordBlurEvent(){

        var passwordValue = password.value
        var passwordRegx = /[0-9]{3,15}/


        if (passwordValue.match(passwordRegx)) {
            console.log("good")
        } else {
            span10.textContent = "invalid password"
            span10.style.color = "red"
           password.style.borderColor = "red"

        }
    }

    function passwordFocusEvent(){
        span10.textContent = ""
       password.style.borderColor = ""
       password.placeholder = ""
    }

    //----

    function repeatPasswordBlurEvent(){

        var repeatPasswordValue = repeatPassword.value
        var repeatPasswordRegx = /[0-9]{3,15}/


        if (repeatPasswordValue.match(repeatPasswordRegx)) {
            console.log("good")
        } else {
            span11.textContent = "invalid Password"
            span11.style.color = "red"
           repeatPassword.style.borderColor = "red"

        }
    }

    function repeatPasswordFocusEvent(){
        span11.textContent = ""
       repeatPassword.style.borderColor = ""
       repeatPassword.placeholder = ""
    }










}











