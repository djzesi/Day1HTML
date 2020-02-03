function validateDetails(){
	
	var errCounter=0;
	var noOfCheckedItems=0;
	var noOfLocation=0;
	var validationFlag=false;
	var fName=document.getElementById("txtName").value;
	var password=document.getElementById("txtPass").value;
	var selectedIdProof=document.getElementsByName("idProof");
	var location=document.getElementsByName("loc");
	
	if(fName.length<6){
		errCounter++;
		var errDiv=document.getElementById("errFName");
		errDiv.innerHTML="Atleast 6 character should be there";
	}
	if(password.length<8){
		errCounter++;
		var errDiv=document.getElementById("errPass");
		errDiv.innerHTML="password must contain atleast 8 characters";
	}
	for(var i=0;i<selectedIdProof.length;i++){
		if(selectedIdProof[i].checked)
			noOfCheckedItems++;
	}
	
	if(noOfCheckedItems<1){
		errCounter++;
		var errDiv=document.getElementById("errIdProof");
		errDiv.innerHTML="IdProof is mandatory field";
	}
	else if(noOfCheckedItems>1){
		errCounter++;
		var errDiv=document.getElementById("errIdProof");
		errDiv.innerHTML="Only one can be selected at a time";
	}
	
	
	for(var i=0;i<location.length;i++){
		if(location[i].checked){
			noOfLocation++;
			break;
		}
	}
	if(noOfLocation==0){
		errCounter++;
		var errDiv=document.getElementById("errLoc");
		errDiv.innerHTML=("Location is mandatory field");
	}
	
	if(errCounter==0){
		validationFlag=true;
		sessionStorage.setItem("firstName",fName);
	}
	
	return validationFlag;
}