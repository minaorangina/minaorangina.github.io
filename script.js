window.onload = function () {
  var bg = document.getElementsByClassName("background-div")[0];
  bg.classList.add("lazyLoad");
  bg.classList.remove("hidden");

  var links = document.getElementsByClassName("links");
  bg.classList.add("lazyLoad");
  bg.classList.remove("hidden");

  // links.forEach(function (icon) {
  //
  //     icon.addEventListener("mouseover", function() {
  //         console.log(this);
  //       //   event.target.classList.add("hovering");
  //     });
  // });
  // links.forEach(function (icon) {
  //
  //     icon.addEventListener("mouseout", function() {
  //
  //       //   event.target.classList.remove("hovering");
  //     });
  // })




}
