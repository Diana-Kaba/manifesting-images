let imgDin = document.getElementById("din");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    if (imgDin.classList.contains("hide")) imgDin.classList.remove("hide");
  }
  if (document.documentElement.scrollTop < 300) {
    imgDin.src = "./images/fl1.jpg";
  }
  if (document.documentElement.scrollTop > 300) {
    imgDin.src = "./images/fl2.jpg";
    imgDin.style.left = "200px";
    imgDin.style.bottom = "60%";
  }
  if (document.documentElement.scrollTop > 600) {
    imgDin.src = "./images/fl3.jpg";
    imgDin.style.left = "20px";
    imgDin.style.bottom = "40px";
  }
};
