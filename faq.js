

function addListeners(){
    document.getElementById("filter1").addEventListener("click", hide, false);
    document.getElementById("filter2").addEventListener("click", hide2, false);
    document.getElementById("filter3").addEventListener("click", hide3, false);
}


function hide(){
    "use strict";
    $("#s3d").slideToggle();
    $("#octoprint").slideToggle();    
}

function hide2() {
    "use strict";
    $("#octoprint").slideToggle();
    $("#maint").slideToggle();
}

function hide3() {
    "use strict";
    $("#s3d").slideToggle();
    $("#maint").slideToggle();
}


