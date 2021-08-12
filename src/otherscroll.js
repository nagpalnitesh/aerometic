document.addEventListener("DOMContentLoaded", function () {
  // When the event DOMContentLoaded occurs, it is safe to access the DOM

  // When the user scrolls the page, execute myFunction
  window.addEventListener("scroll", myFunctionForStickynew);
  // Get the navbar
  var navbar_new = document.getElementById("myTopnavnew");

  // Get the offset position of the navbar
  var sticky = navbar_new.offsetTop;
  // Add the sticky class to the navbar when you reach its scroll position.
  // Remove "sticky" when you leave the scroll position

  function myFunctionForStickynew() {
    if (window.pageYOffset >= sticky + 50) {
      navbar_new.classList.add("sticky");
    } else {
      navbar_new.classList.remove("sticky");
    }
  }
});
