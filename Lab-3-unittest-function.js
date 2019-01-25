//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========
//alert("lab 3 Function");//please delete this line once connected.
/** checkHumbrId Function*/
/* function  checkHumberid(studentId)
{
	"use strict"
	let validId=false;
	var idTester="/^[nN0-9]*/"
	/* if idtester.test(studentId){
		validId= true;
	}
	else{
		validId= false;
	}
	return validId; */


 /* Validate input is a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */

 

 
 
function checkHumberId(studentId){
	let collegeId="false";

	let pattern=/^(n|N)\d{8}$/;
			if(!pattern.test(studentId)){
				collegeId= false;
			}
			else if(pattern.test(studentId)){
				collegeId = true;
			}
	return collegeId;
}

	let pattern="/^\(n|N)\d{8}$/";
			if(pattern.test(studentId)){
				collegeId= false;
			}
			else if(!pattern.test(studentId)){
				collegeId = true;
			}
	return collegeId;
}

