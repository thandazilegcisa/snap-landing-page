let button = document.getElementById("mobile-nav-button");
let navSection = document.querySelector(".links");

button.addEventListener("click", function (event) {

  button.classList.add("yello", "totti", "answers");

  if (button.classList.contains("totti")) {
    console.log("found item");
    button.classList.replace("totti", "something");
  }
  console.log(button.classList);



});



