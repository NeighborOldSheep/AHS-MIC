/* -----------message board---------- */


/* get elements */

/* submit button */
var submit = document.getElementById("doPost");
/* input elements */
var myInput = document.getElementById("myInput");
/* message box */
var messageBox = document.getElementById("messageBox");

/* onclick function */
submit.onclick = function(){
    if(myInput.value){
        //show message time
        var oTime = document.createElement("div");
        oTime.className = "time";

        var myDate = new Date();
        oTime.innerHTML = myDate.toLocaleString();
        
        /* put time on message board */
        messageBox.appendChild(oTime);


        //show message
        var messageCotent = document.createElement("div");
        messageCotent.className = "message_cotent";

        //customer info will be the message
        messageCotent.innerHTML = myInput.value;
        //clear myInput info
        myInput.value = "";
        
        /* put message on message board */
        messageBox.appendChild(messageCotent);

    }
}