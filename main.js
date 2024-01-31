var mailid = document.getElementById("emailid");
var emailvalidmsg = document.getElementById("emailvalidation");


function validateEmail() {
    if (isValidEmail(mailid.value.trim())) {
        emailvalidmsg.innerHTML = "valid"
        emailvalidmsg.style.color="green";
    }
    else {
        emailvalidmsg.innerHTML = "Invalid";
        emailvalidmsg.style.color="red";
    }
}

function isValidEmail(mailid) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(mailid);
}


var alphatext = document.getElementById("alphafield");
var alphavalidmsg = document.getElementById('alphavalidation');


function validateAlpha() {
  
    if (isValidAlpha(alphatext.value.trim())) {
        alphavalidmsg.innerHTML = "valid";
        alphavalidmsg.style.color="green";
    }
    else {
        alphavalidmsg.innerHTML = "Invalid";
        alphavalidmsg.style.color="red";
        
    }
}

function isValidAlpha(alphatext) {
    const alphaRegex = /^[a-zA-Z]+$/;
    return alphaRegex.test(alphatext);
  }

  
var url = document.getElementById("urlfield");
var urlvalidmsg = document.getElementById('urlvalidation');


function validateUrl() {
  
    if (isValidUrl(url.value.trim())) {
        urlvalidmsg.innerHTML = "valid";
        urlvalidmsg.style.color="green";
    }
    else {
        urlvalidmsg.innerHTML = "Invalid";
        urlvalidmsg.style.color="red";
    }
}

function isValidUrl(url) {
    const urlRegex =  /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  }


  var txtarea=document.getElementById('tarea');
  var txtvalidmsg=document.getElementById('textareavalidation');
  
  function isEmptyTextArea(){
    console.log("calling")
     if(!txtarea === ''){
        txtvalidmsg.innerHTML="data inserted";
        txtvalidmsg.style.color="green";
     }
     else{
        txtvalidmsg.innerHTML="please enter something";
        txtvalidmsg.style.color="red";
     }

  }

    
var image = document.getElementById("imgfile");
var imagevalidmsg = document.getElementById('imgvalidation');


function validateImage() {
  
    if (isValidImage(image.value.trim())) {
        imagevalidmsg.innerHTML = "valid";
        imagevalidmsg.style.color="green";
    }
    else {
        imagevalidmsg.innerHTML = "Invalid";
        imagevalidmsg.style.color="red";
    }
}

function isValidImage(image) {
    const imageRegex =  /\.(jpeg|jpg|gif|png|bmp|webp)$/i;
    return imageRegex.test(image);
  }

      
var pass = document.getElementById("pass");
var passvalidmsg = document.getElementById('passvalidation');


function validatePassword() {
  
    if (isValidPassword(pass.value.trim())) {
        passvalidmsg.innerHTML = "valid";
        passvalidmsg.style.color="green";
    }
    else {
        passvalidmsg.innerHTML = "Invalid";
        passvalidmsg.style.color="red";
    }
}

function isValidPassword(pass) {
    const passRegex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[a-zA-Z]).{8,}$/;
   //at least one digit,lowercase,uppercase,special chars,at least 8
    return passRegex.test(pass);
  }


        
var phone = document.getElementById("pnumber");
var phonevalidmsg = document.getElementById('phonevalidation');


function validatePhoneNumber() {
  
    if (isValidPnumber(phone.value.trim())) {
        phonevalidmsg.innerHTML = "valid";
        phonevalidmsg.style.color="green";
    }
    else {
        phonevalidmsg.innerHTML = "Invalid";
        phonevalidmsg.style.color="red";
    }
}

function isValidPnumber(phone) {
    const phoneRegex =  /^\d{10}$/;
     return phoneRegex.test(phone);
  }


         
var vdate = document.getElementById("date");
var datevalidmsg = document.getElementById('datevalidation');


function validateDate() {
  
    if (isValidDate(vdate.value.trim())) {
        datevalidmsg.innerHTML = "valid";
        datevalidmsg.style.color="green";
    }
    else {
        datevalidmsg.innerHTML = "Invalid";
        datevalidmsg.style.color="red";
    }
}

function isValidDate(vdate) {
    const dateRegex =  /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/;
     return dateRegex.test(vdate);
  }


function isDataEntered() {
    validateEmail();
    validateAlpha();
    validateUrl();
    isEmptyTextArea();
    validateImage();
    validatePassword();
    validatePhoneNumber();
    validateDate();
}


