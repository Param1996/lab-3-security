//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST ==========

function test_checkHumberId (valueIn, expected){
    
    
    // check variable to hold result
    let result = checkHumberId(valueIn);
    
    //print
    let outMssg = "Input: " +valueIn + "|Result: " +result + "|Expected: "+ expected + "<br/>"
    
    let Mssg= document.getElementById("data");
    Mssg.innerHTML += outMssg;
    
    
}

test_checkHumberId("n01333782", "Pass");
test_checkHumberId("azjhiosoi;s", "fail");
test_checkHumberId("jdiloljedliedo","Fail" );
test_checkHumberId("n012782", "fail");
test_checkHumberId("n12345654","pass");
test_checkHumberId("n93939393","pass");
test_checkHumberId("tarunkumar","fail");
