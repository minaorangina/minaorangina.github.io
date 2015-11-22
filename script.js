window.onload = function () {

  var bg = document.getElementsByClassName("background-div")[0];
  bg.classList.add("lazyLoad");
  bg.classList.remove("hidden");

  // var links = document.getElementsByClassName("links");
  // bg.classList.add("lazyLoad");
  // bg.classList.remove("hidden");

  var headline = document.getElementsByClassName("headline")[0];
  headline.classList.add("lazyLoad2");
  headline.classList.remove("hidden");
}
