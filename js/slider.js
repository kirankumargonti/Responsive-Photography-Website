//Initializing
var i = 0;
var images = [];
var time = 3000; // time in millie seconds

//images

images[0] = "url(./Images/Slider/1.jpg)";
images[1] = "url(./Images/Slider/2.jpg)";
images[2] = "url(./Images/Slider/3.jpg)";
//function

function changeImage() {
    var el = document.getElementById('slider');
    el.style.backgroundImage = images[i];
    
    var box1 = document.getElementById('box1');
    box1.style.backgroundImage = images[i];
    box1.style.transition = "background-color 3.5s ease";

    var box2 = document.getElementById('box2');
    box2.style.backgroundImage = images[i];

    var box3 = document.getElementById('box3');
    box3.style.backgroundImage = images[i];

    var box4 = document.getElementById('box4');
    box4.style.backgroundImage = images[i];

    var box5 = document.getElementById('box5');
    box5.style.backgroundImage = images[i];

    var box6 = document.getElementById('box6');
    box6.style.backgroundImage = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImage()', time);
}

window.onload = changeImage;