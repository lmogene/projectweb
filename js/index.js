/*jslint browser: true, devel: true, white: true, eqeq: true, plusplus: true, sloppy: true, vars: true*/

//Het switchen tussen de classes "toggle" en "open" waardoor zodra de filterknop aangeklikt wordt, de class die op display:none staat veranderd in display:block
function toggleOpen() {

    document.getElementById("showfilter").classList.toggle("open");
}

document.getElementById("filter").addEventListener("click", toggleOpen);

//hartje van empty naar filled en andersom

var current = "empty";
function change(event) {
    var image = event.currentTarget;
     if (image.classList.contains('filled')) {
        image.src = "images/icons8-like.png";
    } else {
        image.src = "images/icons8-like_filled.png";
        wishlist.classList.remove('grow');
        wishlist.classList.add('grow');
    }

    image.classList.toggle('filled');
}

var hearts = document.querySelectorAll('img.hart')
var wishlist = document.querySelector('img.lijst')

hearts.forEach(function(heart) {
    heart.addEventListener("click", change);
});



//download button van wit naar groen + shoppingcart effect

var current = "white";
function green(event) {
    var arrow = event.currentTarget;
     if (arrow.classList.contains('downloaded')) {
        arrow.src = "images/icons8-downloadw.png";
    } else {
        arrow.src = "images/icons8-download.png";
        wishlist.classList.remove('grow');
        wishlist.classList.add('grow');
    }

    arrow.classList.toggle('downloaded');
}

var dlow = document.querySelectorAll('img.load')

dlow.forEach(function(alreadydownloaded) {
    alreadydownloaded.addEventListener("click", green);
});

wishlist.addEventListener('animationend', reset);

function reset(event) {
    wishlist.classList.remove('grow');
}

