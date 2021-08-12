document.addEventListener("DOMContentLoaded", function () {
  var pro1 = document.getElementById("pro1");
  var pro2 = document.getElementById("pro2");
  var pro3 = document.getElementById("pro3");
  var pro4 = document.getElementById("pro4");
  var pro5 = document.getElementById("pro5");
  var circle = document.getElementById("circle");
  var protxt1 = document.getElementById("protxt1");
  //   aerosol
  protxt1.addEventListener("mouseover", function () {
    circle.style.display = "none";
    pro1.style.display = "block";
  });

  document
    .getElementById("protxt1")
    .addEventListener("mouseleave", function () {
      circle.style.display = "block";
      pro1.style.display = "none";
    });

  //perfumes
  document.getElementById("protxt2").addEventListener("mouseover", function () {
    circle.style.display = "none";
    pro2.style.display = "block";
  });

  document
    .getElementById("protxt2")
    .addEventListener("mouseleave", function () {
      circle.style.display = "block";
      pro2.style.display = "none";
    });

  // home care
  document.getElementById("protxt3").addEventListener("mouseover", function () {
    circle.style.display = "none";
    pro3.style.display = "block";
  });

  document
    .getElementById("protxt3")
    .addEventListener("mouseleave", function () {
      circle.style.display = "block";
      pro3.style.display = "none";
    });

  //packaging
  document.getElementById("protxt4").addEventListener("mouseover", function () {
    circle.style.display = "none";
    pro4.style.display = "block";
  });

  document
    .getElementById("protxt4")
    .addEventListener("mouseleave", function () {
      circle.style.display = "block";
      pro4.style.display = "none";
    });

  //personal  care
  document.getElementById("protxt5").addEventListener("mouseover", function () {
    circle.style.display = "none";
    pro5.style.display = "block";
  });

  document
    .getElementById("protxt5")
    .addEventListener("mouseleave", function () {
      circle.style.display = "block";
      pro5.style.display = "none";
    });
});
