var elements = document.getElementsByClassName("card");
var cardImgList = ["./assets/img/watch-dogs-wallpaper-19-3000x2000.jpg",
  "./assets/img/wp1811032-watch-dogs-wallpapers.jpg", "./assets/img/watch-dogs-11-1920x1080.jpg"
  , "./assets/img/watch-dogs-1-1920x1080.jpg"
];
var slider = document.getElementsByClassName("new-content-slider")[0];
for (var i = 0; i < elements.length; i++) {
  // console.log(elements[i]);
  console.log(cardImgList[i]);
  elements[i].style.backgroundImage = "url(" + cardImgList[i] + ")";

  console.log("url(" + cardImgList[i] + ")");
  elements[i].addEventListener('click', function () {

    // console.log(e);
    // this.style.backgroundColor = "red";
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.border = "1px solid var(--gray)";
    }
    // slider.style.background = this.style.backgroundImage;
    // console.log(slider.style.background.indexOf("("));
    // console.log(slider.style.background.indexOf(")"));
    // var start = slider.style.background.indexOf("(") + 1;
    // var end = slider.style.background.indexOf(")") - 2;
    // console.log("aaaaaaaaa"+ slider.style.background.substr(start, end))

    // var s = slider.style.background.replace(slider.style.background.substr(start, end), this.style.backgroundImage)
    // console.log("s:   "+ s);
    // slider.style.background = s;
    this.style.border = "3px solid var(--primary)";
    console.log(this);
  });
}


var header__menu = document.getElementById("header__menu");
var header = document.getElementById("header");
var subnav = document.getElementById("subnav");
var rightItems = document.getElementsByClassName("right-items")[0];
var nav = document.getElementById("nav");


$('#header__menu').click(function () {
  $(this).toggleClass('fa-times');
  $('#nav').toggleClass('click');
  $('.right-items').toggleClass('click');
});

var x = document.getElementsByTagName('h2');
for (var i = 0; i < x.length; i++) {
  x[i].innerText = "Anh yêu em";
}

var menuItems = document.querySelectorAll("#nav li a[href*='#']");
console.log(menuItems);
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];
  menuItem.onclick = function () {
    var isParentMenu = this.nextElementSibling && this.nextElementSibling.id === "subnav";
    if (isParentMenu) {
      event.preventDefault();
    } else {
      $('#nav').toggleClass('click');
      $("#header__menu").toggleClass('fa-times');
      $('.right-items').toggleClass('click');
    }
    // console.log(menuItem);// console.log(menuItems[i]) output undefined
    // console.log(this);

  }
}