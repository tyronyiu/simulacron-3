function dark() {
   var element = document.getElementById("turn_dark");
   element.classList.add("darkmode");
   var toggle = document.getElementById("dark_toggle");
   toggle.classList.add("invert-toggle");
   var links = document.getElementsByClassName("turn_dark_link");
    for (var i=0; i<links.length; i++){
       links[i].classList.add("dark_link");
    }

}

function light() {
   var element = document.getElementById("turn_dark");
   element.classList.remove("darkmode");
   var toggle = document.getElementById("dark_toggle");
   toggle.classList.remove("invert-toggle");
   var links = document.getElementsByClassName("turn_dark_link");
    for (var i=0; i<links.length; i++){
       links[i].classList.remove("dark_link");
    }

}

function toggle_theme(){
    var theme = localStorage.getItem('theme');
    if (theme != 'dark') {
        dark()        
        localStorage.setItem('theme', 'dark');
    }
    else{
        localStorage.setItem('theme', 'light');
        light()
    }
    var theme = localStorage.getItem('theme');
    /*document.getElementById("theme-status").innerHTML = theme;*/
}

document.addEventListener('DOMContentLoaded', () => {
    var theme = localStorage.getItem('theme');
    if (theme == 'dark') {
        dark()        
        localStorage.setItem('theme', 'dark');
    }
    else{
        localStorage.setItem('theme', 'light');
        light()
    }
})
