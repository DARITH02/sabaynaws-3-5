const btnBar = document.getElementById("toggle-bar");
const toggle = document.getElementById("toggle");
const ntnClose = document.getElementById("close");
let i = 0;
btnBar.addEventListener("click", () => {
  if (i == 0) {
    toggle.style = "display:block";
    i = 1;
  } else {
    toggle.style = "display:none";
    i = 0;
  }
});
ntnClose.addEventListener("click", () => {
  toggle.style = "display:none";
});

//  const menu_toggle = document.getElementById("menu-toggle");
//   const show_toggle_mobile = document.getElementById("show-menu-mobile");

//   let isClick = false;

//   menu_toggle.addEventListener("click", function () {
//     if (isClick) {
//       // show_toggle_mobile.style.display = "none";
//       document
//         .getElementById("show-menu-mobile")
//         .classList.remove("animate-toggle");
//       isClick = false;
//     } else {
//       // show_toggle_mobile.style.display = "block";
//       document
//         .getElementById("show-menu-mobile")
//         .classList.add("animate-toggle");
//       isClick = true;
//     }
//   });
