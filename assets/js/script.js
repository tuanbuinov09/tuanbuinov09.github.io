var elements = document.getElementsByClassName("card");

for (var i = 0; i < elements.length; i++) {
    // console.log(elements[i]);
    elements[i].addEventListener('click', function () {
        // console.log(e);
        // this.style.backgroundColor = "red";
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.border = "1px solid var(--gray)";
        }
        this.style.border = "3px solid var(--primary)";
        console.log(this);
    });
}

var header__menu = document.getElementById("header__menu");
var header = document.getElementById("header");
var subnav = document.getElementById("subnav");
var rightItems = document.getElementsByClassName("right-items")[0];
var nav = document.getElementById("nav");


header__menu.addEventListener('click', function () {
    if (rightItems.style.display !== "flex") {
        nav.classList.remove("animation-class");
        // subnav.style.display = "block";
        nav.style.display = "block";
        nav.animate([
            // keyframes
            { transform: 'translateX(-100%)' },
            { transform: 'translateY(0%)' }
          ], {
            // timing options
            duration: 200,
          });
        rightItems.style.display = "flex";
        rightItems.animate([
            // keyframes
            { transform: 'translateX(-100%)' },
            { transform: 'translateY(0%)' }
          ], {
            // timing options
            duration: 200,
          });
        return;  
    }
    nav.classList.add("animation-class");
    if (rightItems.style.display === "flex") {
        // nav.animate([
        //     // keyframes
        //     { transform: 'translateX(50%)' },
        //     { transform: 'translateY(0%)' }
        //   ], {
        //     // timing options
        //     // direction: "reverse",
        //     duration: 200,

        //   });
        
        // subnav.style.display = "none";
        nav.style.display = "none";
        
        rightItems.style.display = "none";
        return;
    } 
});