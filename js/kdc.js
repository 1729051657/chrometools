
$("body").append("<div id='kdc' style='z-index: 10000; width: 400px;height: 400px;background-color: red;left: 0px;top: 0px;position: absolute'></div>");



var mesgs=["11","22","33","44","55","66","77"];
var timeouttime=10000;
var msgindex=0;
var kdctimeout=null;
kdctimeout=setInterval(function(){
    try {
        chat_textarea.value=mesgs[msgindex];
        document.getElementById("send_chat_btn").click();
    }catch (e) {
    }
    msgindex++;
    if(mesgs[msgindex]==null){
        clearInterval(kdctimeout);
    }
},timeouttime)