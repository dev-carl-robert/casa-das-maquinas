let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage()
}, 6000)

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  slidesPerView: 3,
  centeredSlides: true