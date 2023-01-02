// JavaScript Document

function validateForm() {
  var x = document.forms["regform"]["fnm"].value;
  var y = document.forms["regform"]["lnm"].value;
  var z = document.forms["regform"]["eml"].value;
  var a = document.forms["regform"]["tnb"].value;
  var yy = document.forms["regform"]["psw"].value;
  var zz = document.forms["regform"]["pswr"].value;
  	
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 	
  var letterNumber = /^[a-zA-Z]+$/;
	
  if (x === "") {
    alert("Name must be filled out");
document.forms["regform"]["fnm"].focus();
    return false;
  }
if(!(letterNumber.test(x))){
alert("Only letters for Name");
document.forms["regform"]["fnm"].focus();
return false;
}
if (y === "") {
    alert("Last Name must be filled out");
document.forms["regform"]["lnm"].focus();
    return false;
  }
if(!(letterNumber.test(y))){
alert("Only letters for Last Name");
document.forms["regform"]["lnm"].focus();
return false;
}
	
if (z === "") {
    alert("Email must be filled out");
document.forms["regform"]["eml"].focus();
    return false;
  }
	
if (!(mailFormat.test(z))){
	alert ("Please introduce a valid email format");
	document.forms["regform"]["eml"].focus();
	return false;
}	
	
	
if (letterNumber.test(a)){
	alert("Only numbers for Contact Number");
	document.form["regform"]["tnb"].focus();
	return false;
}	
	
if (a === "") {
    alert("Contact Number must be filled out");
document.forms["regform"]["tnb"].focus();
    return false;
  }
if (a.length !== 10) {
    alert("Contact Number must be 10 characters long");
document.forms["regform"]["tnb"].focus();
    return false;
  }

if (yy === "") {
    alert("Password must be filled out");
document.forms["regform"]["psw"].focus();
    return false;
  }
if (yy.length < 8) {
    alert("Password must be at least 8 characters long");
document.forms["regform"]["psw"].focus();
    return false;
  }	
if (zz === "") {
    alert("Repeat Password must be filled out");
document.forms["regform"]["pswr"].focus();
    return false;
  }
if (zz !== yy) {
    alert("Password must be the same in both fields");
document.forms["regform"]["pswr"].focus();
    return false;
  }
alert("Congratulations! You are now part of the Fashion Wave family")	
 return true;
}

function validateSForm(){
			
var genders = document.getElementsByName("gender");
	
                if (genders[0].checked == true) {}
	
	            else if (genders[1].checked == true) {} 
	
	            else if (genders[2].checked == true) {}
	
	            else {
                  alert("Please Select a Gender");
				  document.forms["sform"]["gender"].focus();	
                  return false;
                }
                
            
	
               if (document.sform.country.value === "none") {
                
                alert("Please Select a Country");
               document.forms["sform"]["country"].focus();
                return false;
                }
var des = document.getElementsByName("des");
	
                if (des[0].checked == true) {}
	
	            else if (des[1].checked == true) {} 
	
	            else if (des[2].checked == true) {}
	         
	            else if (des[3].checked == true) {}
	
	            else if (des[4].checked == true) {}
	
	            else {
                  alert("Please Select a Score for 'A)'");
				  document.forms["sform"]["des"].focus();	
                  return false;
                }
	
	var qua = document.getElementsByName("qua");
	
                if (qua[0].checked == true) {}
	
	            else if (qua[1].checked == true) {} 
	
	            else if (qua[2].checked == true) {}
	         
	            else if (qua[3].checked == true) {}
	
	            else if (qua[4].checked == true) {}
	
	            else {
                  alert("Please Select a Score for 'B)'");
				  document.forms["sform"]["qua"].focus();	
                  return false;
                }
	var eco = document.getElementsByName("eco");
	
                if (eco[0].checked == true) {}
	
	            else if (eco[1].checked == true) {} 
	
	            else if (eco[2].checked == true) {}
	         
	            else if (eco[3].checked == true) {}
	
	            else if (eco[4].checked == true) {}
	
	            else {
                  alert("Please Select a Score for 'C)'");
				  document.forms["sform"]["eco"].focus();	
                  return false;
                }
	var del = document.getElementsByName("del");
	
                if (del[0].checked == true) {}
	
	            else if (del[1].checked == true) {} 
	
	            else if (del[2].checked == true) {}
	         
	            else if (del[3].checked == true) {}
	
	            else if (del[4].checked == true) {}
	
	            else {
                  alert("Please Select a Score for 'D)'");
				  document.forms["sform"]["del"].focus();	
                  return false;
                }
	var web = document.getElementsByName("web");
	
                if (web[0].checked == true) {}
	
	            else if (web[1].checked == true) {} 
	
	            else if (web[2].checked == true) {}
	         
	            else if (web[3].checked == true) {}
	
	            else if (web[4].checked == true) {}
	
	            else {
                  alert("Please Select a Score for 'E)'");
				  document.forms["sform"]["web"].focus();	
                  return false;
                }
                
	var csv = document.getElementsByName("csv");
	
                if (csv[0].checked == true) {}
	
	            else if (csv[1].checked == true) {} 
	
	            else if (csv[2].checked == true) {}
	         
	            else if (csv[3].checked == true) {}
	
	            else if (csv[4].checked == true) {}
	
	            else {
                  alert("Please Select a Score for 'F)'");
				  document.forms["sform"]["csv"].focus();	
                  return false;
                }
                }

function validateCForm(){
	
  var x = document.forms["CForm"]["fname"].value;
  var y = document.forms["CForm"]["lname"].value;
  var z = document.forms["CForm"]["eml"].value;	
  var c = document.forms["CForm"]['sub'].value; 	
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 	
  var letterNumber = /^[a-zA-Z]+$/;
  if (x === "") {
    alert("Name must be filled out");
document.forms["CForm"]["fname"].focus();
    return false;
  }
if(!(letterNumber.test(x))){
alert("Only letters for Name");
document.forms["CForm"]["fname"].focus();
return false;
}
if (y === "") {
    alert("Last Name must be filled out");
document.forms["CForm"]["lname"].focus();
    return false;
  }
if(!(letterNumber.test(y))){
alert("Only letters for Last Name");
document.forms["CForm"]["lname"].focus();
return false;
}
	
if (z === "") {
    alert("Email must be filled out");
document.forms["CForm"]["eml"].focus();
    return false;
  }
	
if (!(mailFormat.test(z))){
	alert ("Please introduce a valid email format");
	document.forms["CForm"]["eml"].focus();
	return false;
}	
	
if (document.CForm.country.value === "none") {
                
                alert("Please Select a Country");
               document.forms["CForm"]["country"].focus();
                return false;
                }	
if (c === ""){
	alert("Please explain your enquiry");
	document.forms["CForm"]["sub"].focus();
	return false;
}	
}

function validateLForm(){
var z = document.forms["lform"]["eml"].value;	
var p = document.forms["lform"]["psw"].value;
var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if (z === "") {
    alert("Please Enter Email");
document.forms["lform"]["eml"].focus();
    return false;
  }
	
if (!(mailFormat.test(z))){
	alert ("Please introduce a valid email format");
	document.forms["lform"]["eml"].focus();
	return false;
}
if (p === "") {
    alert("Please Enter Password");
document.forms["lform"]["psw"].focus();
    return false;
  }
if (p.length < 8) {
    alert("Password must be at least 8 characters long");
document.forms["lform"]["psw"].focus();
    return false;
  }		
}

