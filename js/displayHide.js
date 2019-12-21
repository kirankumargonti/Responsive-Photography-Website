var toggler = document.getElementById('nav-custom');
function changeElClose() {
    var banner = document.getElementById('banner');
    banner.style.zIndex = "-1";
}
function changeElOpen() {
    var banner = document.getElementById('banner');
    banner.style.zIndex = "0";
}
toggler.addEventListener('mouseover', changeElClose);
toggler.addEventListener('mouseout', changeElOpen);