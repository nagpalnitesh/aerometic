document.addEventListener("DOMContentLoaded", function () {
  var box1 = document.getElementById("active");
  var box2 = document.getElementById("active1");
  var box3 = document.getElementById("active2");
  var box4 = document.getElementById("active3");
  var box5 = document.getElementById("active4");
  var box6 = document.getElementById("active5");
  var box7 = document.getElementById("active6");
  var box8 = document.getElementById("active7");

  document.getElementById("btn1").addEventListener("click", function () {
    if (box1.style.display === "none") {
      box1.style.display = "block";
      box2.style.display = "none";
      box3.style.display = "none";
      box4.style.display = "none";
      box5.style.display = "none";
      box6.style.display = "none";
      box7.style.display = "none";
      box8.style.display = "none";
    } else {
      box1.style.display = "none";
    }
  });
  document.getElementById("btn2").addEventListener("click", function () {
    if (box2.style.display === "none") {
      box1.style.display = "none";
      box2.style.display = "block";
      box3.style.display = "none";
      box4.style.display = "none";
      box5.style.display = "none";
      box6.style.display = "none";
      box7.style.display = "none";
      box8.style.display = "none";
    }
  });
  document.getElementById("btn3").addEventListener("click", function () {
    if (box3.style.display === "none") {
      box1.style.display = "none";
      box2.style.display = "none";
      box3.style.display = "block";
      box4.style.display = "none";
      box5.style.display = "none";
      box6.style.display = "none";
      box7.style.display = "none";
      box8.style.display = "none";
    }
  });
  document.getElementById("btn4").addEventListener("click", function () {
    if (box4.style.display === "none") {
      box1.style.display = "none";
      box2.style.display = "none";
      box4.style.display = "block";
      box3.style.display = "none";
      box5.style.display = "none";
      box6.style.display = "none";
      box7.style.display = "none";
      box8.style.display = "none";
    }
  });
  document.getElementById("btn5").addEventListener("click", function () {
    if (box5.style.display === "none") {
      box1.style.display = "none";
      box2.style.display = "none";
      box5.style.display = "block";
      box3.style.display = "none";
      box4.style.display = "none";
      box6.style.display = "none";
      box7.style.display = "none";
      box8.style.display = "none";
    }
  });
  document.getElementById("btn6").addEventListener("click", function () {
    if (box6.style.display === "none") {
      box1.style.display = "none";
      box2.style.display = "none";
      box6.style.display = "block";
      box4.style.display = "none";
      box3.style.display = "none";
      box5.style.display = "none";
      box7.style.display = "none";
      box8.style.display = "none";
    }
  });
  document.getElementById("btn7").addEventListener("click", function () {
    if (box7.style.display === "none") {
      box1.style.display = "none";
      box2.style.display = "none";
      box7.style.display = "block";
      box4.style.display = "none";
      box5.style.display = "none";
      box3.style.display = "none";
      box6.style.display = "none";
      box8.style.display = "none";
    }
  });
  document.getElementById("btn8").addEventListener("click", function () {
    if (box8.style.display === "none") {
      box1.style.display = "none";
      box2.style.display = "none";
      box8.style.display = "block";
      box4.style.display = "none";
      box5.style.display = "none";
      box6.style.display = "none";
      box7.style.display = "none";
      box3.style.display = "none";
    }
  });
});
