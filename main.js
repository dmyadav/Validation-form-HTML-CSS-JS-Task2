const mailid = document.getElementById("emailid");
var emailvalidmsg = document.getElementById("emailvalidation");


function validateEmail() {
    
    if (isValidEmail(mailid.value.trim())) {
        emailvalidmsg.innerHTML = "valid"
        emailvalidmsg.style.color="green";
    }
    
     else if(!mailid.value.trim()){
         emailvalidmsg.innerHTML="please enter email";
         emailvalidmsg.style.color="red";
      }

    else {
        emailvalidmsg.innerHTML = "Invalid emaillid";
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
        alphavalidmsg.innerHTML = "valid alphatext";
        alphavalidmsg.style.color="green";
    }
    else if(!alphatext.value.trim()) {
        alphavalidmsg.innerHTML = "please enter alphatext";
        alphavalidmsg.style.color="red";
        
    }
    else {
        alphavalidmsg.innerHTML = "please enter valid alphatext";
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
        urlvalidmsg.innerHTML = "valid url";
        urlvalidmsg.style.color="green";
    }
    else {
        urlvalidmsg.innerHTML = "Invalid url";
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

     if(!txtarea.value.trim()){
        txtvalidmsg.innerHTML="please enter something";
        txtvalidmsg.style.color="red";
 }
    

  }

    
var image = document.getElementById("imgfile");
var imagevalidmsg = document.getElementById('imgvalidation');


function validateImage() {
  
    if (isValidImage(image.value.trim())) {
        imagevalidmsg.innerHTML = "image uploaded successfully";
        imagevalidmsg.style.color="green";
    }
     
       
    else if(!image.value.trim()){
        imagevalidmsg.innerHTML = "please upload image";
        imagevalidmsg.style.color="red";
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
    else if(!phone.value.trim()){
        phonevalidmsg.innerHTML = "please enter your phone number";
        phonevalidmsg.style.color="red";
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

  var curr = document.getElementById("currency");
var currmsg = document.getElementById('currencyvalidation');

  function validateCurrency(){
if(iscurrency(curr.value.trim())){
    currmsg.innerHTML = "valid";
    currmsg.style.color="green";
}
else{
    currmsg.innerHTML = "Invalid";
    currmsg.style.color="red";

}
  }

  function iscurrency(curr){
    const currRegex=/^[0-9]$/;
    return currRegex.test(curr);
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
    validateCurrency();
}


mailid.addEventListener('input',function(){
     validateEmail();  
    
});

alphatext.addEventListener('input',function(){
    validateAlpha();  
   
});

url.addEventListener('input',function(){
    validateUrl();
   
   
});

txtarea.addEventListener('input',function(){
    isEmptyTextArea();
   
   
});

image.addEventListener('input',function(){
    validateImage();
  
   
});

pass.addEventListener('input',function(){
    validatePassword();
    
   
});

vdate.addEventListener('input',function(){
    validateDate();
   
   
});


phone.addEventListener('input',function(){
    validatePhoneNumber();  
   
});


curr.addEventListener('input',function(){
    validateCurrency();
   
});


