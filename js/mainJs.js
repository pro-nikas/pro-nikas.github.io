var sideMenuLink = document.getElementsByClassName('side_menu_link')[0];
var sideMenu = document.getElementById('side_menu');

console.log(sideMenuLink);
console.log(sideMenu);

var linkLine1 = document.getElementsByClassName('menu_link_line_st')[0];
var linkLine2 = document.getElementsByClassName('menu_link_line_nd')[0];
var sideMenu = document.getElementById('side_menu');
var menuLink = document.getElementsByClassName('side_menu_link')[0];
var menuLinkWidth = menuLink.offsetWidth + 'px';



function sideMenuTweak () {


    if (sideMenu.style.right != menuLinkWidth){
        sideMenu.style.right = menuLinkWidth;
        sideMenu.style.boxShadow = '0 0 10px 0';
        linkLine1.classList.add('menu_link_rotated_st');
        linkLine2.classList.add('menu_link_rotated_nd');
    }
    else{
        sideMenu.style.right = '100%';
        sideMenu.style.boxShadow = '0 0 0 0';
        linkLine1.classList.remove('menu_link_rotated_st');
        linkLine2.classList.remove('menu_link_rotated_nd');
    }
}

if (window.devicePixelRatio !== 1) { // Костыль для определения иных устройств, с коэффициентом отличным от 1
    var dpt = window.devicePixelRatio;
    var widthM = window.screen.width * dpt;
    var widthH = window.screen.height * dpt;
    document.write('<meta name="viewport" content="width=' + widthM+ ', height=' + widthH + '">');
};
