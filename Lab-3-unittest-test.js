//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST ==========

function test_checkHumberId (valueIn, expected){
    
    
    // check variable to hold result
    let result = checkHumberId(valueIn);
    let outMssg="";
    if (result===expected){
        outMssg="Value tested " +valueIn + "|Expected Result: " +expected + "<span style=color:green>==Passed==</span><br/>"
       
    }else {
        outMssg="Value tested " +valueIn + "|Expected Result: " +expected + "<span style=color:red> xxFailedxx</span><br/>"
    }
    
    //print
    
    
    let Mssg= document.getElementById("data");
    Mssg.innerHTML += outMssg;
    
    
}

test_checkHumberId("n01333782", true);
test_checkHumberId("azjhiosoi;s", false);
test_checkHumberId("jdiloljedliedo",false);
test_checkHumberId("n012782", false);
test_checkHumberId("N12345654",true);
test_checkHumberId("n939393931111",false);
test_checkHumberId("tarunkumar",false);


test_checkHumberId("n01333782", true);
