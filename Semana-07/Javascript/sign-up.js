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
    var pass = document.getElementById("password")
    var repeatPass = document.getElementById("repeatPassword")
    var btn = document.getElementById("btnContinue")
    var myForm = document.getElementById("myForm")

    var firstNameb = false
    var lastNameb = false
    var dnib = false
    var dateb = false
    var phoneb = false
    var addressb = false
    var localidadb = false
    var postCodeb = false
    var emailb = false
    var passb = false
    var repeatPassb = false

    values()

    //events

    firstName.addEventListener('focus', firstNameFocusEvent)
    firstName.addEventListener('blur', firstNameBlurEvent)

    lastName.addEventListener('focus', lastNameFocusEvent)
    lastName.addEventListener('blur', lastNameBlurEvent)

    dni.addEventListener('focus', dniFocusEvent)
    dni.addEventListener('blur', dniBlurEvent)

    date.addEventListener('focus', dateFocusEvent)
    date.addEventListener('blur', dateBlurEvent)

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

    password.addEventListener('focus', passFocusEvent)
    password.addEventListener('blur', passBlurEvent)

    repeatPassword.addEventListener('focus', repeatPassFocusEvent)
    repeatPassword.addEventListener('blur', repeatPassBlurEvent)

    myForm.addEventListener('submit', function(e) {
        e.preventDefault();
    })

    //arrays

    var num = [0, 1, 2, 3, 4 ,5 ,6 ,7, 8 ,9]

    var abc= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",'ñ',"o","p","q","r","s","t","u","v","w","x","y","z"]

    var specChar = ['+', '-','_','@','*']

    //funciones

    function firstNameBlurEvent(){

        var log = firstName.value

        if ((isNaN(log)) && (log.length>3)){
            firstNameb = true
        } else {
            span1.textContent = "invalid first name"
            span1.style.color = "red"
            firstName.style.borderColor = "red"
            firstNameb = false
        }
    }

    function firstNameFocusEvent(){
        span1.textContent = ""
        firstName.style.borderColor = ""
    }

    //--

    function lastNameBlurEvent(){

        var log = lastName.value

        if ((isNaN(log)) && (log.length>3)){
            lastNameb = true
        } else {
            span2.textContent = "invalid last name"
            span2.style.color = "red"
            lastName.style.borderColor = "red"
            lastNameb = false
        }
    }

    function lastNameFocusEvent(){
        span2.textContent = ""
        lastName.style.borderColor = ""
    }

    //----

    function dniBlurEvent(){

        var dniValue = dni.value

        if (!(isNaN(dniValue)) && (dniValue.length>6)){
            span3.textContent = ""
            dni.style.borderColor = ""
            dnib = true
        } else {
            span3.textContent = "invalid DNI"
            span3.style.color = "red"
            dni.style.borderColor = "red"
            dnib = false
        }
    }

    function dniFocusEvent(){
        span3.textContent = ""
        dni.style.borderColor = ""
        dni.placeholder = ""
    }

    // fecha de nacimiento

    function validateBdate(va)
    {
        for (let i = 0; i < va.length; i++)
        {
            if (i == 2 || i==5)
            {
                if(va[i]!='/')
                {
                    return false
                }
            }
        }

        if (isNaN(va[0]) || isNaN(va[1]) || isNaN(va[3]) || isNaN(va[4]) || isNaN(va[6]) ||
        isNaN(va[7]) || isNaN(va[8]) || isNaN(va[9]))
        {
            return false;
        }

        var parts = va.split("/");

        var month  = parseInt(parts[0], 10);

        var day = parseInt(parts[1], 10);

        var year = parseInt(parts[2], 10);

        var now = parseInt(new Date().toISOString().slice(0, 10).replace(/-/g, ''));

        var dob = year * 10000 + month * 100 + day * 1;

        if (now - dob < 180000)
        {
            return false;
        }

        // Check the ranges of month and year
        if(year < 1900 || year > 2100 || month == 0 || month > 12)
        {
            return false;
        }

        var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

        // Adjust for leap years
        if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        {
            monthLength[1] = 29;
        }

        // Check the range of the day
        return day > 0 && day <= monthLength[month - 1];

    }

    function dateFocusEvent(){
        span4.textContent = ""
        phone.style.borderColor = ""
        phone.placeholder = ""
    }

    function dateBlurEvent(){

        var va = date.value;
        if (validateBdate(va))
        {
            span4.textContent = ""
            date.style.borderColor = ""
            dateb = true
        }
        else
        {
            span4.textContent = "invalid date. Please follow dd/mm/yyyy"
            span4.style.color = "red"
            date.style.borderColor = "red"
            dateb = false
        }
    }

    //----

    function phoneBlurEvent(){

        var phoneValue = phone.value

        if (!(isNaN(phoneValue)) && (phoneValue.length==10)){
            span5.textContent = ""
            phone.style.borderColor = ""
            phoneb = true
        } else {
            span5.textContent = "invalid phone"
            span5.style.color = "red"
            phone.style.borderColor = "red"
            phoneb = false
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
        var addressValueCount = [abc] + " " + [num]

        if (addressValue.indexOf(" ")>=0 && isNaN(addressValue[addressValue.indexOf(' ')-1]) &&
            !isNaN(addressValue[addressValue.indexOf(' ')+1])){
            addressb = true
        } else {
            span6.textContent = "invalid address"
            span6.style.color = "red"
            address.style.borderColor = "red"
            addressb = false
        }
    }

    function addressFocusEvent(){
        span6.textContent = ""
        address.style.borderColor = ""
        address.placeholder = ""
    }

    //----

    function localidadBlurEvent()
    {
       if (!validateLocation()){
        span7.textContent = "invalid location"
        span7.style.color = "red"
        localidadb = false
       }else{
           localidadb = true
       }
    }

    function validateLocation(){

        var letterC = 0;
        var va2 = document.getElementById("localidad").value.toLowerCase();

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
    }


    function localidadFocusEvent(){
        span7.textContent = ""
        localidad.style.borderColor = ""
        localidad.placeholder = ""
    }

    //---

    function postCodeBlurEvent(){

        var postCodeValue = postCode.value

        if (!(isNaN(postCodeValue)) && (postCodeValue.length>3) && (postCodeValue.length<6)){
            span8.textContent = ""
            postCode.style.borderColor = ""
            postCodeb = true
        } else {
            span8.textContent = "invalid post code"
            span8.style.color = "red"
            postCode.style.borderColor = "red"
            postCodeb = false
        }
    }

    function postCodeFocusEvent(){
        span8.textContent = ""
        postCode.style.borderColor = ""
        postCode.placeholder = ""
    }

    //--

    function emailBlurEvent(){

        var log = email.value
        var emailRegx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/

        if (log.match(emailRegx)) {
            span9.textContent = ""
            email.style.borderColor = ""
            emailb = true
        } else {
            span9.textContent = "invalid email"
            span9.style.color = "red"
            email.style.borderColor = "red"
            emailb = false
        }
    }

    function emailFocusEvent(){
        span10.textContent = ""
        email.style.borderColor = ""
        email.placeholder = ""
    }

    function passBlurEvent(){

        var passValue = pass.value
        var passRegx = /^(?=.*[0-9])(?=.*[a-z]).{8,32}$/

        if (passValue.match(passRegx)) {
            span10.textContent = ""
            pass.style.borderColor = ""
            passb = true
        } else {
            span10.textContent = "invalid password"
            span10.style.color = "red"
            pass.style.borderColor = "red"
            passb = false
        }
    }

    function passFocusEvent(){
        span11.textContent = ""
        pass.style.borderColor = ""
    }

    //----

    function repeatPassBlurEvent(){

        var repeatPasswordValue = repeatPass.value
        var passValue = pass.value

        if (repeatPasswordValue = passValue) {
            span11.textContent = ""
            repeatPass.style.borderColor = ""
            repeatPassb = true
        } else {
            span11.textContent = "Passwords do not match"
            span11.style.color = "red"
            repeatPass.style.borderColor = "red"
            repeatPassb = false
        }
    }

    function repeatPassFocusEvent(){
        span11.textContent = ""
        repeatPass.style.borderColor = ""
        repeatPass.placeholder = ""
    }

    //--- button

    btn.addEventListener('click', alertSubmit)

    function alertSubmit(){
        var message = ""
        var newLine = "\r\n"

        if ((firstNameb && lastNameb && dnib && dateb && phoneb && addressb &&
            localidadb && postCodeb && emailb && passb && repeatPassb) == true) {
            window.alert("Success!")
        }
        else
        {
            if (!firstNameb){
            message += "First name is wrong" + newLine
            }if (!lastNameb){
                message += "Last name is wrong" + newLine
            }if (!dnib){
                message += "DNI is wrong" + newLine
            }if (!dateb){
                message += "Date of birth is wrong" + newLine
            }if (!phoneb){
                message += "Phone is wrong" + newLine
            }if (!addressb){
                message += "Address is wrong" + newLine
            }if (!localidadb){
                message += "Location is wrong" + newLine
            }if (!postCodeb){
                message += "Post code is wrong" + newLine
            }if (!emailb){
                message += "Email is wrong" + newLine
            }if (!passb){
                message += "Password is wrong" + newLine
            }if (!repeatPassb){
                message += "Passwords does not match" + newLine
            }window.alert(message)}

            const dataSend = `https://basp-m2022-api-rest-server.herokuapp.com/signup?name=${firstName.value}&lastName=${lastName.value}&dni=${dni.value}&dob=${date.value}&phone=${phone.value}&address=${address.value}&city=${localidad.value}&zip=${postCode.value}&email=${email.value}&password=${pass.value}`
            fetch(dataSend)
                .then(function(response){
                    return response.json()
                })
                .then(function(responseJson){
                    if (responseJson.success){
                        window.alert("Request Succesful " + responseJson.msg)
                    }else{
                        throw new Error("Request failed")
                    }
                })
                .catch(function(){
                    alert("Eror")
                })
            localStorage.setItem("first name", firstName.value)
            localStorage.setItem("last name", lastName.value)
            localStorage.setItem("dni", dni.value)
            localStorage.setItem("dob", date.value)
            localStorage.setItem("phone", phone.value)
            localStorage.setItem("address", address.value)
            localStorage.setItem("city", localidad.value)
            localStorage.setItem("zip", postCode.value)
            localStorage.setItem("email", email.value)
            localStorage.setItem("password", pass.value)
            localStorage.setItem("Rpassword", repeatPass.value)

    }
    function values(){
        firstName.value = localStorage.getItem("first name")
        lastName.value = localStorage.getItem("last name")
        dni.value = localStorage.getItem("dni")
        date.value = localStorage.getItem("dob")
        phone.value = localStorage.getItem("phone")
        address.value = localStorage.getItem("address")
        localidad.value = localStorage.getItem("city")
        postCode.value = localStorage.getItem("zip")
        email.value = localStorage.getItem("email")
        pass.value = localStorage.getItem("password")
        repeatPass.value = localStorage.getItem("Rpassword")
    }
}