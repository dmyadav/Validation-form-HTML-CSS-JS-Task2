const mailid = document.getElementById("emailid");
var emailvalidmsg = document.getElementById("emailvalidation");



function validateEmail() {
    
    if (isValidEmail(mailid.value.trim())) {
        emailvalidmsg.innerHTML = "valid"
        emailvalidmsg.style.color="green";
        
     

    }
    
     else if(!mailid.value.trim()){
         emailvalidmsg.innerHTML="Please enter email";
         emailvalidmsg.style.color="red";
      }

    else {
        emailvalidmsg.innerHTML = "Invalid emaillid";
        emailvalidmsg.style.color="red";
    }

}

function isValidEmail(mailid) {
    const emailRegex =/^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z]+\.[a-zA-Z]{2,}(?:\.(?:com|in))?(?![a-zA-Z0-9._%+-])?$/;
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
        alphavalidmsg.innerHTML = "Please enter alphatext";
        alphavalidmsg.style.color="red";
        
    }
    else {
        alphavalidmsg.innerHTML = "Please enter valid alphatext";
        alphavalidmsg.style.color="red";
        
    }
}

function isValidAlpha(alphatext) {
    const alphaRegex = /^[a-zA-Z]+$/;
    return alphaRegex.test(alphatext);
  }

  
  function validateGender() {
    var maleRadio = document.getElementById('male');
    var femaleRadio = document.getElementById('female');
    var genderSpan = document.getElementById('gendervalidation');
  
    if (!maleRadio.checked && !femaleRadio.checked) {
        genderSpan.innerHTML = "<p>Please select a gender.</p>";
        genderSpan.style.color="red";

    } else {
        genderSpan.innerHTML = '';
    }
  }


var url = document.getElementById("urlfield");
var urlvalidmsg = document.getElementById('urlvalidation');


function validateUrl() {
  
    if (isValidUrl(url.value.trim())) {
        urlvalidmsg.innerHTML = "valid url";
        urlvalidmsg.style.color="green";
    }
    else {
        urlvalidmsg.innerHTML = "Please enter valid url";
        urlvalidmsg.style.color="red";
    }
}

function isValidUrl(url) {
    const urlRegex =  /^(ftp|http|https):\/\/[^ "]+\.(com|in)$/;
    return urlRegex.test(url);
  }



  function isEmptyTextArea() {
    var descriptionInput = document.getElementById('tarea');
    var description = descriptionInput.value;
    var textareaSpan = document.getElementById('textareavalidation');
  
    if (!description) {
        textareaSpan.innerHTML = "<p>Please enter something here</p>";
        textareaSpan.style.color="red";

    } else if (description.length < 10 || description.length > 100) {
        textareaSpan.innerHTML = "<p>Description should be between 10 to 100 characters</p>";
    } else {
        textareaSpan.innerHTML = '';
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
    const imageRegex =  /\.(jpg|png|jpeg)$/i;
    return imageRegex.test(image);
  }

      
const pass = document.getElementById("pass");
var passvalidmsg = document.getElementById('passvalidation');


function validatePassword() {
  
    if (isValidPassword(pass.value.trim())) {
        passvalidmsg.innerHTML = "valid";
        passvalidmsg.style.color="green";
    }
    
    else {
        passvalidmsg.innerHTML = "Invalid password";
        passvalidmsg.style.color="red";
    }

}

function isValidPassword(pass) {
    const passRegex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[a-zA-Z]).{8,}$/;
   //at least one digit,lowercase,uppercase,special chars,at least 8
    return passRegex.test(pass);
  }

  
  function dispPass() {
    var passwordInput = document.getElementById("pass");
    var toggleButton = document.getElementById("showbtn");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }
        
const phone = document.getElementById("pnumber");
var phonevalidmsg = document.getElementById('phonevalidation');


function validatePhoneNumber() {

        var phoneInput = document.getElementById('pnumber');
        var phone = phoneInput.value;
        var phonevalidmsg = document.getElementById('phonevalidation');
      
        if (!phone) {
            phonevalidmsg.innerHTML = "<p>Please enter your phone number</p>";
          phonevalidmsg.style.color="red";
        } else if (phone.length > 10) { 
            
            phonevalidmsg.innerHTML = "<p>Please enter only 10 digits</p>";
          phonevalidmsg.style.color="red";
            phonevalidmsg = phone.slice(0, 10); // Truncate phone number to 10 digits
          phoneInput.value = phone; // Update input value
        } else if (phone.length < 10 || phone.charAt(0) < '6') {
            phonevalidmsg.innerHTML = "<p>Phone number should  satrt from 6 and ahead</p>";
          phonevalidmsg.style.color="red";
        } else {
            phonevalidmsg.innerHTML = '';
        }
      }
      


         
var vdate = document.getElementById("date");
var datevalidmsg = document.getElementById('datevalidation');


function validateDate() {
    var dobInput = document.getElementById('date');
    var dobSpan = document.getElementById('datevalidation');
    var selectedDate = dobInput.value;
    var minDate = new Date(dobInput.min);
    var maxDate = new Date(dobInput.max);
    var selectedDateObj = new Date(selectedDate);
  
    if (selectedDate === "") {
        dobSpan.innerHTML = "<p>Please select a birth date.</p>";
        dobSpan.style.color="red";
    } else if (selectedDateObj < minDate || selectedDateObj > maxDate) {
        dobSpan.innerHTML = "<p>Please select a birth date within the specified range.</p>";
        dobSpan.style.color="red";
    } else {
        dobSpan.innerHTML = '';
    }
  }

  function validateCheckbox() {
     var checkboxes = document.querySelectorAll('input[name="domain"]');
     var checkboxSpan = document.getElementById('checkboxvalidation');
      
        var checkedCount = 0;
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
             checkedCount++;
         }
     }
      
     if (checkedCount === 0) {
         checkboxSpan.innerHTML = "<p>Please select at least one option</p>";
         checkboxSpan.style.color="red";
     }else if(checkedCount>2){
         checkboxSpan.innerHTML = "<p>select only two checkboxes</p>";
         checkboxSpan.style.color="red";
        } else {
            checkboxSpan.innerHTML = '';
     }
     }
  


//   function validateCurrency(){
// if(iscurrency(curr.value.trim())){
//     currmsg.innerHTML = "valid";
//     currmsg.style.color="green";
// }
// else{
//     currmsg.innerHTML = "Invalid";
//     currmsg.style.color="red";

// }
//   }

//   function iscurrency(curr){
//     const currRegex=/^[0-9]$/;
//     return currRegex.test(curr);
//   }

function validateCurrency() {
    var curr = document.getElementById("currency");
    var currmsg = document.getElementById('currencyvalidation');
    
      
        var currency = curr.value;
        var currencyRegex = /^[0-9]+$/; 
        var maxCurrency = 1000000000000; 
      
        if (!currency) {
            currmsg.innerHTML = "<p>Currency is required.</p>";
            currmsg.style.color="red";
        } else if (!currencyRegex.test(currency)) {
            currmsg.innerHTML = "<p>Currency should consist of only numbers.</p>";
            currmsg.style.color="red";
        } else if (parseInt(currency) > maxCurrency) {
            currmsg.innerHTML = "<p>Currency should not exceed limit of 1 trillion</p>";
            currmsg.style.color="red";
        } else {
            currmsg.innerHTML = '';
        }
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
    validateCheckbox()
    validateCurrency();
    validateGender();
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

