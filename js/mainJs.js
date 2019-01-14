var sideMenuLink = document.getElementsByClassName('side_menu_link')[0];
var sideMenu = document.getElementById('side_menu');

console.log(sideMenuLink);
console.log(sideMenu);


function sideMenuTweak() {
    if (sideMenu.style.left != '-30%') {
        sideMenu.style.left = '-30%';
    }
    else {
        sideMenu.style.left = '-100%';
    }
}