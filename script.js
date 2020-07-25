var submitMsg = document.querySelector(".submitted");
var myform = document.querySelector("form");
var button = document.querySelector("form .button");
var formElements = document.querySelector(".form-elements");
var another = document.querySelector(".another");
var buttons = document.querySelectorAll(".buttons .button");
var aboutP = document.querySelectorAll(".aboutus p");
var navBtn = document.querySelector(".navbtn");
var navBar = document.querySelector(".navbar");

// console.log(buttons);
function clickMsg() {
     if (myform) {
          console.log("clicked successfully");
          submitMsg.style.height = "auto";
          setTimeout(() => {
               submitMsg.style.height = "0";
          }, 3000);
     }
}
function showForm() {
     formElements.style.display = "block";
     document.querySelector(".thankyou_message").style.display = "none";
     myform.reset();
}
function showabout(e) {
     var name = e.target.dataset.name;
     aboutP.forEach((p) => {
          if (p.classList.contains(name)) {
               p.style.display = "block";
          } else p.style.display = "none";
     });
}
function shownav() {
     navBar.classList.toggle("navtogg");
}

navBtn.addEventListener("click", shownav);
button.addEventListener("click", clickMsg);
another.addEventListener("click", showForm);
buttons.forEach((btn) => {
     btn.addEventListener("click", showabout);
});

document.querySelector(".navItems").addEventListener("click", shownav);
