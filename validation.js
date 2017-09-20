"use strict";

// global variables
var complete = false;
var lnInput = document.getElementById("lname") ;
var fnInput = document.getElementById("fname");
var ageInput = document.getElementById("age");
var pcInput = document.getElementById("pcode");
var adInput = document.getElementById("addrs");
var ctInput = document.getElementById("city");
var pvInput = document.getElementById("province");
var pw1Input = document.getElementById("pass");
var pw2Input = document.getElementById("cfpass");
var emailInput = document.getElementById("email");
var newAccountObject = {},
    newAccountSubmission;
var checking1 = true;
var checking2 = true;
var checking3 = true;
var checking4 = true;
var checking5 = true;
var checking6 = true;
var checking7 = true;
var checking8 = true;
var checking9 = true;
var checking10 = true;

function validateFName() {
    var errorDiv = document.getElementById("fnameError");
    try {
        if (fname.value === "") {
            throw "Please enter your first name";
        }
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        checking1 = true;
        var firstInit = fname.value.charAt(0).toUpperCase();
        fname.value = firstInit + fname.value.substring(1,);
    }
    catch (message) {
        checking1 = false;
        errorDiv.style.display = "block";
        errorDiv.innerHTML = message;
    }
}

function validateLName() {
    var errorDiv = document.getElementById("lnameError");
    try {
        if (lname.value === "") {
            throw "Please enter your last name";
        }
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        checking8 = true;
        var lastInit = lname.value.charAt(0).toUpperCase();
        lname.value = lastInit + lname.value.substring(1, );
    }
    catch (message) {
        checking8 = false;
        errorDiv.style.display = "block";
        errorDiv.innerHTML = message;
    }
}

function validateAddress() {
    var errorDiv = document.getElementById("addressError");
    try {
        if (adInput.value === "") {
            throw "Please enter your address"
        }
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        checking2 = true;
    }
    catch (message) {
        checking2 = false;
        errorDiv.style.display = "block";
        errorDiv.innerHTML = message;
    }
}

function validateCity() {
    var errorDiv = document.getElementById("cityError");
    try {
        if (ctInput.value === "") {
            throw "Please enter your city"
        }
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        checking9 = true;
        var ctInit = ctInput.value.charAt(0).toUpperCase();
        ctInput.value = ctInit + ctInput.value.substring(1,);

   }
    catch (message) {
        checking9 = false;
        errorDiv.style.display = "block";
        errorDiv.innerHTML = message;
    }
}

function validateAge() {
    //validate entered age
    var errorDiv = document.getElementById("ageError");
    try {
        if (ageInput.value === "" || ageInput.value < 18) {
            throw "Invalid age. Must be 18 or older";
        }
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        checking3 = true;
    } catch (message) {
        checking3 = false;
        errorDiv.style.display = "block";
        errorDiv.innerHTML = message;
    }
}

function validatePCode() {
    //validate entered postal code
    var errorDiv = document.getElementById("pcodeError");
    var code = /[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/;// /([abceghjklmnprstvxy]\d[abceghjklmnprstvwxyz])[\s\-]?(\d[abceghjklmnprstvwxyz]\d)/;
    try {
        if (code.test(pcInput.value) === false) {
            console.log(pcInput.innerHTML);
            throw "Invalid postal code. Must be in format a0a0a0."
        }
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        checking4 = true;
    } catch (message) {
        checking4 = false;
        errorDiv.style.display = "block";
        errorDiv.innerHTML = message;
    }
}

function validatePV() {
    //validate entered province
    var errorDiv = document.getElementById("provError");
    var pvInputUC = pvInput.value.toUpperCase();
    try {
        if (!(pvInputUC === "QC" || pvInputUC === "ON" || pvInputUC === "MN" || pvInputUC === "SK" || pvInputUC === 'AB' || pvInputUC === 'BC')) {
            throw "Invalid province"
        }
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        checking5 = true;
        pvInput.value = pvInputUC;
    } catch (message) {
        checking5 = false;
        errorDiv.style.display = "block";
        errorDiv.innerHTML = message;
    }
}

function validatePW() {
    // validate entered password
    var errorDiv = document.getElementById("pasError");
    try {
        if (/.{6,}/.test(pw1Input.value) === false) {
            throw "Password must be at least 6 characters";
        } else if (/[A-Z]/.test(pw1Input.value) === false) {
            throw "Password must contain at least one upper-case letter";
        } else if (/\d/.test(pw1Input.value) === false) {
            throw "Password must contain at least one number";
        } else if (/[!@#_$%^&*]/.test(pw1Input.value) === false) {
            throw "Password must contain at least one of the following symbols: ! @ # _ $ % ^ & *";
        }
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        checking6 = true;
    }
    catch (message) {
        checking6 = false;
        // display error message
        errorDiv.style.display = "block";
        errorDiv.innerHTML = message;
    }
}

function validatePW2(){
	// validate entered password
    var errorDiv = document.getElementById("pas2Error");
    try {
        if (pw1Input.value.localeCompare(pw2Input.value) !== 0) {
            throw "Passwords must match";
        }
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        checking10 = true;
    }
    catch (message) {
        checking10 = false;
        // display error message
        errorDiv.style.display = "block";
        errorDiv.innerHTML = message;
    }

}
 
function validateEmail() {
    // validate entered email
    var errorDiv = document.getElementById("emailError");
    var emailCheck = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    try {
        if (emailCheck.test(emailInput.value) === false) {
            throw "Invalid email address. Must be in format example@mail.ex";
        }
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        checking7 = true;
    }
    catch (message) {
        checking7 = false;
        // display error message
        errorDiv.style.display = "block";
        errorDiv.innerHTML = message;
    }
}

function validate() {
    validateFName();
    validateLName();
    validateAge();
    validateAddress();
    validateCity();
    validatePV();
    validatePCode();
    validatePW();
    validatePW2();
    validateEmail();
    
    if (checking1 === true && checking2 === true && checking3 === true && checking4 === true && checking5 === true && checking6 === true && checking7 === true && checking8 === true && checking9 === true && checking10 === true) {
        alert("Thank you for registering with our club! Your member info is recorded successfully!");
        newAccountObject = {};
        var fields = document.getElementsByTagName("input");
        newAccountObject = {};
        for (var i = 0; i < fields.length - 2; i++) {
            newAccountObject[fields[i].name] = fields[i].value;
       }
        newAccountSubmission = JSON.stringify(newAccountObject);
    }else alert("Sorry! Please make sure your info is entered correctly :( ");
}

function resetForm() {
    lnInput = "";
    fnInput = "";
    ageInput = "";
    pcInput = "";
    adInput = "";
    ctInput = "";
    pvInput = "";
    pw1Input = "";
    pw2Input = "";
    emailInput = "";
}

function createEventListeners() {
    if (lnInput.addEventListener) {
        lnInput.addEventListener("change", validateLName, false);
        fnInput.addEventListener("change", validateFName, false);
        ageInput.addEventListener("change", validateAge, false);
        adInput.addEventListener("change", validateAddress, false);
        ctInput.addEventListener("change", validateCity, false);
        pcInput.addEventListener("change", validatePCode, false);
        pvInput.addEventListener("change", validatePV, false);
        pw1Input.addEventListener("change", validatePW, false);
        pw2Input.addEventListener("change", validatePW2, false);
        emailInput.addEventListener("change", validateEmail, false);
    } else if (lnInput.attachEvent) {
        lnInput.addEventListener("onchange", validateLName);
        fnInput.addEventListener("onchange", validateFName);
        ageInput.addEventListener("onchange", validateAge);
        adInput.addEventListener("onchange", validateAddress);
        ctInput.addEventListener("onchange", validateCity);
        pcInput.addEventListener("onchange", validatePCode);
        provInput.addEventListener("onchange", validatePV);
        pw1Input.addEventListener("onchange", validatePW);
        pw2Input.addEventListener("onchange", validatePW2);
        emailInput.addEventListener("onchange", validateEmail);
    }

    var button1 = document.getElementById("submit");
    if (button1.addEventListener) {
        button1.addEventListener("click", validate, false);
    } else if (button1.attachEvent) {
        button1.attachEvent("onclick", validate);
    }

    var button2 = document.getElementById("clear");
    if (button2.addEventListener) {
        button2.addEventListener("click", resetForm, false);
    } else if (button2.attachEvent) {
        button2.attachEvent("onclick", resetForm);
    }
}

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}