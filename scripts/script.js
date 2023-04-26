var header_logo = document.getElementById("header__logo");
var header_username = document.getElementById("username");

function change_logo_resize(){
    var width = window.innerWidth;
    
    if(width > 620){
        header_logo.innerHTML="OnlineGallery"
        //header_username.innerHTML="Username"
    } else if(width <= 620){
        header_logo.innerHTML="OG"
        //header_username.innerHTML=""
    }
}


change_logo_resize();

window.addEventListener('resize', change_logo_resize);