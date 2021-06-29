var elements = document.getElementsByClassName("card");

for (var i = 0; i < elements.length; i++) {
    // console.log(elements[i]);
    elements[i].addEventListener('click', function(){
        // console.log(e);
        // this.style.backgroundColor = "red";
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.border = "1px solid var(--gray)";
        }
        this.style.border = "3px solid var(--primary)";
        console.log(this);
    });
}