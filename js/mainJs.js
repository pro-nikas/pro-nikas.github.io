function sideMenuTweak () {

    var linkLine1 = document.getElementsByClassName('menu_link_line_st')[0];
    var linkLine2 = document.getElementsByClassName('menu_link_line_nd')[0];
    var sideMenu = document.getElementById('side_menu');
    var menuLink = document.getElementsByClassName('side_menu_link')[0];
    var menuLinkWidth = menuLink.offsetWidth + 'px';

    if (sideMenu.style.right != menuLinkWidth){
        sideMenu.style.right = menuLinkWidth;
        linkLine1.classList.add('menu_link_rotated_st');
        linkLine2.classList.add('menu_link_rotated_nd');
    }
    else{
        linkLine1.classList.remove('menu_link_rotated_st');
        linkLine2.classList.remove('menu_link_rotated_nd');
    }
}

if (window.devicePixelRatio !== 1) {
    var dpt = window.devicePixelRatio;
    var widthM = window.screen.width * dpt;
    var widthH = window.screen.height * dpt;
    document.write('<meta name="viewport" content="initial-scale= ' + 1 / dpt + ', maximum-scale= ' + 1 / dpt + ', minimum-scale= ' + 1 / dpt + '">');
};

window.onload = function () {
    var preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
};

window.addEventListener("keydown", function (e) {
    if (e.keyCode == 71){
        alert('Ну и зачем ты нажал эту кнопку?');
    }
});