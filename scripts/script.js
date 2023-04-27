var header_logo = document.getElementById("header__logo");

function change_logo_resize(){
    var width = window.innerWidth;
    
    if(width > 620){
        header_logo.innerHTML="OnlineGallery"
    } else if(width <= 620){
        header_logo.innerHTML="OG"
    }
}


change_logo_resize();

window.addEventListener('resize', change_logo_resize);