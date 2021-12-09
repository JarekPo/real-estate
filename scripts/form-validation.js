let formFields = document.getElementById("form").elements;
let nameError=false;
let telError=true;
let emailError=true;
let msgError=false;	
let userName;
let userTel;
let userEmail;
let userMsg;

// Function that validates if all the fields are correct and displays message to the user
function formValidation(){
	event.preventDefault();
	nameValidation();
	telValidation();
	emailValidation();
	msgValidation();
	
	if(nameError==false && telError==false && emailError==false && msgError==false){
		form.classList.add("contact-us-form");
		document.getElementById("form").innerHTML="Dear <span>"+userName+"</span>, thank you for your message. <br />We will contact you shortly.";
		document.getElementById("form-sent-msg").innerHTML="Your message: "+userMsg+"<br />Name: <span>"+userName+"</span><br /> Tel. <span>"+userTel+"</span><br /> Email: <span>"+userEmail+"</span>";
	}
}

// User name imput validation - cannot be empty
function nameValidation(){
	let name=document.getElementById("form-name").value;
	userName=name;
	nameError=false;
	document.getElementById("form-name-error").innerHTML="";
	if(name==""){
		document.getElementById("form-name-error").innerHTML="Enter valid name";
		nameError=true;
		formFields["form-name"].value="";
	}
	
}

// User tel number validation - allows only numbers and chracters used in phone numbers
function telValidation(){
	let tel=document.getElementById("form-tel").value;
	let telValues=[0,1,2,3,4,5,6,7,8,9,"+","(",")"," "];
	userTel=tel;
	for(i=0; i<tel.length;i++){
		telError=true;
		for(j=0;j<telValues.length;j++){
			if(tel[i]==telValues[j]){
				telError=false;
			}
		}
	}
	document.getElementById("form-tel-error").innerHTML="";
	if(telError==true || tel.length==0){
		document.getElementById("form-tel-error").innerHTML="Enter valid number";
		formFields["form-tel"].value="";
	}
}

// User email validation - email is valid it @ symbol is present
function emailValidation(){
	let email=document.getElementById("form-email").value;
	userEmail=email;
	for(i=0;i<email.length;i++){
		if(email[i]=="@"){
			emailError=false;
		}
	}
	document.getElementById("form-email-error").innerHTML="";
	if(emailError==true){
		document.getElementById("form-email-error").innerHTML="Enter valid email address";
		formFields["form-email"].value="";
	}
	
}

// User message validation - no empty imput allowed
function msgValidation(){
	let msg=document.getElementById("form-msg").value;
	userMsg=msg;
	msgError=false;
	document.getElementById("form-msg-error").innerHTML="";
	if(msg==""){
		document.getElementById("form-msg-error").innerHTML="Message required";
		msgError=true;
		formFields["form-msg"].value="";
	}
}