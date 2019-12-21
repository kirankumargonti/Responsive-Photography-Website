//Initializing
var gridOne = 0;
var gridTwo = 0;
var gridThree = 0;
var gridFour = 0;
var gridFive = 0;
var gridSix = 0;

//Images Variable
var imgGridOne = [];
var imgGridTwo = [];
var imgGridThree = [];
var imgGridFour = [];
var imgGridFive = [];
var imgGridSix = [];



//time in millie seconds
var gridOneTime = 3000; // time in millie seconds
var gridTwoTime = 4000; // time in millie seconds
var gridThreeTime = 6000; // time in millie seconds
var gridFourTime = 6000; // time in millie seconds
var gridFiveTime = 4000; // time in millie seconds
var gridSixTime = 3000; // time in millie seconds

//imgGridOne
imgGridOne[0] = "url(https://cdn.pixabay.com/photo/2018/10/16/17/24/dog-3751980_1280.jpg)";
imgGridOne[1] = "url(https://cdn.pixabay.com/photo/2019/12/09/08/06/couple-4682956_1280.jpg)";
imgGridOne[2] = "url(https://images.unsplash.com/photo-1576796735959-fe2342b39786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80)";
imgGridOne[0] = "url(https://images.pexels.com/photos/3321584/pexels-photo-3321584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)";
imgGridOne[1] = "url(https://images.unsplash.com/photo-1576781072236-b9d73b2cd017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80)";
imgGridOne[2] = "url(https://images.unsplash.com/photo-1576759360103-3ea4548432d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)";

//imgGridTwo
imgGridTwo[0] = "url('https://cdn.pixabay.com/photo/2014/07/31/23/28/woman-407168_1280.jpg')";
imgGridTwo[1] = "url(https://images.pexels.com/photos/3311235/pexels-photo-3311235.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)";
imgGridTwo[2] = "url(https://images.unsplash.com/photo-1574985163277-3fa01bfffc86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80)";
imgGridTwo[3] = "url(https://images.unsplash.com/photo-1494267661104-3a7c223fb743?ixlib=rb-1.2.1&auto=format&fit=crop&w=1033&q=80)";
imgGridTwo[4] = "url(https://images.unsplash.com/flagged/photo-1574003854725-ef1e2b796f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1050&q=80)";
imgGridTwo[5] = "url(https://cdn.stocksnap.io/img-thumbs/960w/ELZU79WHYI.jpg)";

//imgGridThree
imgGridThree[0] = "url(https://cdn.pixabay.com/photo/2018/11/20/11/08/lake-balaton-3827104_1280.jpg)";
imgGridThree[1] = "url(https://cdn.stocksnap.io/img-thumbs/960w/DBDOELLFM8.jpg)";
imgGridThree[2] = "url(https://images.unsplash.com/photo-1572293894491-b319f8432d77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)";
imgGridThree[3] = "url(https://images.pexels.com/photos/3280211/pexels-photo-3280211.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)";
imgGridThree[4] = "url(https://images.pexels.com/photos/2962403/pexels-photo-2962403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)";
imgGridThree[5] = "url(https://cdn.stocksnap.io/img-thumbs/960w/MLCCIX0NWA.jpg)";

//imgGridFour
imgGridFour[0] = "url(https://cdn.pixabay.com/photo/2019/12/14/17/40/fantasy-4695414_1280.jpg)";
imgGridFour[1] = "url(https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)";
imgGridFour[2] = "url(https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)";
imgGridFour[3] = "url(https://images.unsplash.com/photo-1569402184063-353e994069ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)";
imgGridFour[4] = "url(https://cdn.pixabay.com/photo/2018/05/23/16/06/woman-3424409_1280.jpg)";
imgGridFour[5] = "url(https://cdn.pixabay.com/photo/2019/12/15/17/36/tiger-4697690_1280.jpg)";

//imgGridFive
imgGridFive[0] = "url(https://cdn.pixabay.com/photo/2019/10/30/16/19/fox-4589927_1280.jpg)";
imgGridFive[1] = "url(https://images.unsplash.com/photo-1496505253695-9f03be47f0d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80)";
imgGridFive[2] = "url(https://cdn.pixabay.com/photo/2019/12/17/10/51/manipulation-4701368_1280.jpg)";
imgGridFive[3] = "url(https://images.pexels.com/photos/805367/pexels-photo-805367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)";
imgGridFive[4] = "url(https://images.unsplash.com/photo-1554793236-2e1298afbf40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)";
imgGridFive[5] = "url(https://cdn.pixabay.com/photo/2019/12/15/20/13/fantasy-4697998_1280.jpg)";

//imgGridSix
imgGridSix[0] = "url(https://cdn.pixabay.com/photo/2019/12/07/14/22/dog-figure-4679413_1280.jpg)";
imgGridSix[1] = "url(https://images.pexels.com/photos/1034859/pexels-photo-1034859.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)";
imgGridSix[2] = "url(https://cdn.pixabay.com/photo/2019/12/16/19/27/dog-4700049_1280.jpg)";
imgGridSix[3] = "url(https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)";
imgGridSix[4] = "url(https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)";
imgGridSix[5] = "url(https://cdn.pixabay.com/photo/2019/12/17/18/54/duck-4702270_1280.jpg)";
//function

function changeGridOne() {
    var box1 = document.getElementById('box1');
    box1.style.backgroundImage = imgGridOne[gridOne];
    if (gridOne < imgGridOne.length - 1) {
        gridOne++;
    } else {
        gridOne = 0;
    }
    setTimeout('changeGridOne()', gridOneTime);
}

function changeGridTwo() {
    var box2 = document.getElementById('box2');
    box2.style.backgroundImage = imgGridTwo[gridTwo];
    if (gridTwo < imgGridTwo.length - 1) {
        gridTwo++;
    } else {
        gridTwo = 0;
    }
    setTimeout('changeGridTwo()', gridTwoTime);
}

function changeGridThree() {
    var box3 = document.getElementById('box3');
    box3.style.backgroundImage = imgGridThree[gridThree];
    if (gridThree < imgGridThree.length - 1) {
        gridThree++;
    } else
        gridThree = 0;
    setTimeout('changeGridThree()', gridThreeTime);
}

function changeGridFour() {
    var box4 = document.getElementById('box4');
    box4.style.backgroundImage = imgGridFour[gridFour];

    if (gridFour < imgGridFour.length - 1) {
        gridFour++;
    } else {
        gridFour = 0;
    }
    setTimeout('changeGridFour()', gridFourTime);
}

function changeGridFive() {
    var box5 = document.getElementById('box5');
    box5.style.backgroundImage = imgGridFive[gridFive];

    if (gridFive < imgGridFive.length - 1) {
        gridFive++;
    } else {
        gridFive = 0;
    }
    setTimeout('changeGridFive()', gridFiveTime);
}

function changeGridSix() {
    var box6 = document.getElementById('box6');
    box6.style.backgroundImage = imgGridSix[gridSix];
    if (gridSix < imgGridSix.length - 1) {
        gridSix++;
    } else {
        gridSix = 0;
    }
    setTimeout('changeGridSix()', gridSixTime);
}
changeGridOne();
changeGridTwo();
changeGridThree();
changeGridFour();
changeGridFive();
changeGridSix();
/* 
window.onload = changeGridOne;
window.onload = changeGridTwo;
window.onload = changeGridThree;
window.onload = changeGridFour;
window.onload = changeGridFive;
window.onload = changeGridSix; */