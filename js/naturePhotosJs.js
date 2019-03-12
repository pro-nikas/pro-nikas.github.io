function showBigNaturePhoto(e) {
    var bigPhotoWindow = document.getElementsByClassName("big_photo_window")[0];
    if (bigPhotoWindow.style.display != 'flex' && window.innerWidth > window.innerHeight){
        bigPhotoWindow.style.display = 'flex';
        bigPhotoWindow.style.backgroundImage = 'url(../imgs/nature-' + e + '-2280x1380.jpg)';
        console.info(window.innerWidth)
    }
    else{
        bigPhotoWindow.style.display = 'none';
    }
}