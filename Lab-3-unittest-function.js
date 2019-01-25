
 
 
function checkHumberId(studentId){
	let collegeId="false";
	let pattern=/^(n|N)\d{8}/;
			if(!pattern.test(studentId)){
				collegeId= false;
			}
			else if(pattern.test(studentId)){
				collegeId = true;
			}
	return collegeId;
}