const mailid = document.getElementById("emailid");
var emailvalidmsg = document.getElementById("emailvalidation");



function validateEmail() {
    
    if (isValidEmail(mailid.value.trim())) {
        emailvalidmsg.innerHTML = "valid"
        emailvalidmsg.style.color="green";
        mailid.style.border="3px solid green";
        return true;   
     
   }
    else if(mailid.value.trim() !== mailid.value){
        emailvalidmsg.innerHTML="There is space before email";
        emailvalidmsg.style.color="red";
        mailid.style.border="3px solid #EC2D01";
        }

     else if(!mailid.value.trim()){
         emailvalidmsg.innerHTML="Please enter email";
         emailvalidmsg.style.color="red";
         mailid.style.border="3px solid #EC2D01"
      }

    else {
        emailvalidmsg.innerHTML = "Invalid emaillid";
        emailvalidmsg.style.color="red";
        mailid.style.border="3px solid #EC2D01"
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
        alphatext.style.border="3px solid green";
        return true;   
    }
    else if(!alphatext.value.trim()) {
        alphavalidmsg.innerHTML = "Please enter alphatext";
        alphavalidmsg.style.color="red";
        alphatext.style.border="3px solid #EC2D01"
        
    }
    else {
        alphavalidmsg.innerHTML = "Please enter valid alphatext";
        alphavalidmsg.style.color="red";
        alphatext.style.border="3px solid #EC2D01"
        
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
        genderSpan.innerHTML = "Please select a gender";
        genderSpan.style.color="red";
      

    } else {
        genderSpan.innerHTML = '';
        return true;   
    }
  }


var url = document.getElementById("urlfield");
var urlvalidmsg = document.getElementById('urlvalidation');


function validateUrl() {
  
    if (isValidUrl(url.value.trim())) {
        urlvalidmsg.innerHTML = "valid url";
        urlvalidmsg.style.color="green";
        url.style.border="3px solid green";
        return true;   
    }
    else {
        urlvalidmsg.innerHTML = "Please enter valid url";
        urlvalidmsg.style.color="red";
        url.style.border="3px solid #EC2D01"
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
        textareaSpan.innerHTML = "Please enter something here";
        textareaSpan.style.color="red";
        descriptionInput.style.border="3px solid #EC2D01";

    } else if (description.length < 10 || description.length > 100) {
        textareaSpan.innerHTML = "Description should be between 10 to 100 characters";
        descriptionInput.style.border="3px solid #EC2D01";
    } else {
        textareaSpan.innerHTML = '';
        descriptionInput.style.border="3px solid green";
        return true;   
    }
  }
    
var image = document.getElementById("imgfile");
var imagevalidmsg = document.getElementById('imgvalidation');


function validateImage() {
  
    if (isValidImage(image.value.trim())) {
        imagevalidmsg.innerHTML = "image uploaded successfully";
        imagevalidmsg.style.color="green";
        image.style.border="3px solid green";
        return true;   
    }
     
       
    else if(!image.value.trim()){
        imagevalidmsg.innerHTML = "Please upload image";
        imagevalidmsg.style.color="red";
      image.style.border="3px solid #EC2D01";

    }

    else {
        imagevalidmsg.innerHTML = "Invalid";
        imagevalidmsg.style.color="red";
        image.style.border="3px solid #EC2D01"
    }
}

function isValidImage(image) {
    const imageRegex =  /\.(jpg|png|jpeg)$/i;
    return imageRegex.test(image);
  }

      
const passwd = document.getElementById("pass");
var passvalidmsg = document.getElementById('passvalidation');


function validatePassword() {
  
    if (isValidPassword(passwd.value.trim())) {
        passvalidmsg.innerHTML = "valid";
        passvalidmsg.style.color="green";
        passwd.style.border="3px solid green";
        return true;   
    }
    
    else {
        passvalidmsg.innerHTML = "Invalid password";
        passvalidmsg.style.color="red";
        passwd.style.border="3px solid #EC2D01";
    }

}

function isValidPassword(passwd) {
    const passRegex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[a-zA-Z]).{8,}$/;
   //at least one digit,lowercase,uppercase,special chars,at least 8
    return passRegex.test(passwd);
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
            phonevalidmsg.innerHTML = "Please enter your phone number";
          phonevalidmsg.style.color="red";
          phoneInput.style.border="3px solid #EC2D01";
        } else if (phone.length > 10) { 
            
            phonevalidmsg.innerHTML = "Please enter only 10 digits";
          phonevalidmsg.style.color="red";
          phoneInput.style.border="3px solid #EC2D01";
            phonevalidmsg = phone.slice(0, 10); // Truncate phone number to 10 digits
          phoneInput.value = phone; // Update input value
        } else if (phone.length < 10 || phone.charAt(0) < '6') {
            phonevalidmsg.innerHTML = "Phone number should  satrt from 6 and ahead";
          phonevalidmsg.style.color="red";
          phoneInput.style.border="3px solid #EC2D01";
        } else {
            phonevalidmsg.innerHTML = '';
            phoneInput.style.border="3px solid green";
            return true;   
        }
      }
      



// const pNumberInput = document.getElementById("pnumber");
// pNumberInput.addEventListener("input", validatePhoneNumber());

// function validatePhoneNumber() {
//     const phoneNumberInput = document.getElementById("pnumber");
//     const phoneValidmsg = document.getElementById("phonevalidation").value;
//     let phoneNumber = phoneNumberInput.value.trim();
    
//     // Remove non-digit characters and keep only 10 digits
//     phoneNumber = phoneNumber.replace(/\D/g, '').slice(0, 10);
//     document.getElementById("pnumber").addEventListener("input", function() {
//         const phoneNumberInput = document.getElementById("pnumber");
//         let phoneNumber = phoneNumberInput.value.trim();
    
//         // Remove non-digit characters and limit to 10 characters
//         phoneNumber = phoneNumber.replace(/\D/g, '').slice(0, 10);    
    
//         // Update the input value
//         phoneNumberInput.value = phoneNumber;
//     });
//     const phoneRegex = /^[6789]\d{9}$/;

    
        //phonevalidation
    // if(!phoneRegex){
    //     passvalidmsg.innerHTML= "Invalid number";
    // }else{
    //     passvalidmsg.innerHTML= "valid number";
    // }

    // if (phoneNumber.length === 10 && phoneRegex.test(phoneNumber)) {
    //     phoneValidmsg.innerText = "Phone number is valid";
    //     phoneValidmsg.style.color = "green";
    //     return true;
    // }
    // if (phoneNumber.length === 0) {
    //     phoneValidmsg.innerText = "  ";
    //     phoneValidmsg.style.color = "red";
    //     return false;
    // } else {
    //     phoneValidmsg.innerText = "Please enter a valid 10-digit phone number starting with 6, 7, 8, or 9";
    //     phoneValidmsg.style.color = "red";
    //     return false;
    // }
// }


// function formatPhoneNumber(phoneNumber) {

//     return phoneNumber.slice(0, 10);
// }

         
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
        dobSpan.innerHTML = "Please select a birth date";
        dobSpan.style.color="red";
        dobInput.style.border="3px solid #EC2D01";
    } else if (selectedDateObj < minDate || selectedDateObj > maxDate) {
        dobSpan.innerHTML = "Please select a birth date within the specified range";
        dobSpan.style.color="red";
        dobInput.style.border="3px solid #EC2D01";
    } else {
        dobSpan.innerHTML = '';
        dobInput.style.border="3px solid green";
        return true;   
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
         checkboxSpan.innerHTML = "Please select at least one option";
         checkboxSpan.style.color="red";
         
     }else if(checkedCount>2){
         checkboxSpan.innerHTML = "select only two checkboxes";
         checkboxSpan.style.color="red";

        } else {
            checkboxSpan.innerHTML = '';
            return true;   
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
const curr = document.getElementById("currency");
var currmsg = document.getElementById('currencyvalidation');

function validateCurrency() {
   
    
      
        var currency = curr.value;
        var currencyRegex = /^[0-9]+$/; 
        var maxCurrency = 1000000000000; 
      
        if (!currency) {
            currmsg.innerHTML = "Currency is required";
            currmsg.style.color="red";
            curr.style.border="3px solid #EC2D01";
        } else if (!currencyRegex.test(currency)) {
            currmsg.innerHTML = "Currency should consist of only numbers";
            currmsg.style.color="red";
            curr.style.border="3px solid #EC2D01";
        } else if (parseInt(currency) > maxCurrency) {
            currmsg.innerHTML = "Currency should not exceed limit of 1 trillion";
            currmsg.style.color="red";
            curr.style.border="3px solid #EC2D01";
        } else {
            currmsg.innerHTML = '';
            curr.style.border="3px solid green";
            return true;   
        }
      }

    //   function checkData(){
    //     if(!curr.value.trim() || !mailid.value.trim() || !alphatext.value.trim()){
    //         window.alert("please fill the data");
    //     }
    //     else{
    //         window.alert("data entered successfully");
    //     }
    //   }
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
    
    if( validateEmail() && validateAlpha() && validateUrl() && isEmptyTextArea() && validateImage() && validatePassword() && validatePhoneNumber() && validateDate() && validateCheckbox() && validateCurrency()  && validateGender()){
        window.alert("data submitted successfully");
    }
    else{
        window.alert("Pleas enter data");
    }
    
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


passwd.addEventListener('input',function(){
    validatePassword();
    
   
});


vdate.addEventListener('input',function(){
    validateDate();
   
   
});


// phone.addEventListener('input',function(){
//     validatePhoneNumber();  
   
// });

curr.addEventListener('input',function(){
    validateCurrency();
   
});
