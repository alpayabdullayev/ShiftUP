// Cursor 
// document.addEventListener("mousemove", function (event) {
//   const cursor = document.getElementById("custom-cursor");
//   cursor.style.left = (event.clientX ) + "px"; 
//   cursor.style.top = (event.clientY) + "px"; 
// });

// const cursor = document.getElementById('.custom-cursor');
// document.addEventListener('mousemove', function(x) {
//     cursor.style.cssText = "left: " + x.clientX + "px; top: " + x.clientY + "px;";
// });
// document.querySelector('.beforeItem2 a').addEventListener('mouseover', function() {
//     this.classList.add('active');
// });

// document.querySelector('.beforeItem2 a').addEventListener('mouseout', function() {
//     this.classList.remove('active');
// });
// let body = document.querySelector("body");
// let cursor = document.querySelector(".cursor");
// body.addEventListener("mousemove", function(dets){
//     cursor.style.left = dets.x + "px";
//     cursor.style.top = dets.y + "px";

// })

// const FIX = 10;
// document.addEventListener("mousemove", (event) => {
//   const cursor = document.getElementById("cursor");
//   let x = event.pageX;
//   let y = event.pageY;
//   cursor.style.left = `${x - FIX}px`;
//   cursor.style.top = `${y - FIX}px`;
// });


// Fixed Navbar scripts
window.addEventListener("scroll", function () {
  let position = window.scrollY;
  let navbar2 = document.getElementById("navbar2");
  let screenWidth = window.innerWidth; // Ekran genişliğini al

  if (screenWidth > 991) {
    if (position > 170) {
      navbar2.style.display = "block";
      navbar2.style.position = "fixed";
      navbar2.style.top = "0";
      navbar2.style.left = "0";
      navbar2.style.width = "100%";
      navbar2.style.backgroundColor = "#fff";
    } else {
      navbar2.style.display = "none";
    }
  } else {
    navbar2.style.display = "block";
    navbar2.style.position = "fixed";
    navbar2.style.top = "0";
    navbar2.style.left = "0";
    navbar2.style.width = "100%";
    navbar2.style.backgroundColor = "#fff";
  }
});


// offCanvas SideBar open and close  
const offCanvasSideBar = document.getElementById("offCanvasSideBar")
const openOffCanvasSideBar = document.querySelector(".hamburger")
const openOffCanvasSideBarFiexed = document.querySelector(".hamburgerFixed")
const offcanvasCloseBtnSideBar = document.getElementById("offcanvasCloseBtnSideBar")

offCanvasSideBar.style.transform = "translateX(100%)"

function openOffCanvasSideBarFunction() {
    offCanvasSideBar.style.transform = "translateX(0)"
}
openOffCanvasSideBarFiexed.addEventListener("click",()=>{
    openOffCanvasSideBarFunction()
    console.log("salam");
} );
openOffCanvasSideBar.addEventListener("click",()=>{
  openOffCanvasSideBarFunction()
} );

offcanvasCloseBtnSideBar.addEventListener("click", () => {
    offCanvasSideBar.style.transform = "translateX(100%)";
});
  


// offCanvas and SideBarMobNav 
const offCanvas = document.getElementById("offCanvas");
const offCanvasOpenBtn = document.querySelector(".spans");
const offCanvasOpenBtnFixed = document.querySelector(".spansFixed");
const offCanvasCloseBtn = document.getElementById("offcanvasCloseBtn");
const sideBar = document.getElementById("sideBar");
const sideBarOpenBtn = document.getElementById("hamburgerFixedSideBar");
const sideBarCloseBtn = document.getElementById("sideBarCloseBtn");

offCanvas.style.transform = "translateX(100%)";
sideBar.style.transform = "translateY(-900px)";

function openSideBar() {
  offCanvas.style.transform = "translateX(100%)";
  sideBar.style.transform = "translateY(0)";
}

function openOffCanvas() {
  sideBar.style.transform = "translateY(-900px)";
  offCanvas.style.transform = "translateX(0)";
}

offCanvasOpenBtn.addEventListener("click", openOffCanvas);
offCanvasOpenBtnFixed.addEventListener("click", openOffCanvas);
offCanvasCloseBtn.addEventListener("click", () => {
  offCanvas.style.transform = "translateX(100%)";
});

sideBarOpenBtn.addEventListener("click", openSideBar);
sideBarCloseBtn.addEventListener("click", () => {
  sideBar.style.transform = "translateY(-900px)";
});


// MobilNavbar acccardion
const mobileNavlink = document.querySelectorAll('.mobile-navlink');
const sideBarMenu = document.querySelectorAll('.sideBarMenu');

mobileNavlink.forEach((item, index) => {
  item.addEventListener('click', () => {
    sideBarMenu[index].classList.toggle('active');

    sideBarMenu.forEach((element, i) => {
      if (index !== i) {
        sideBarMenu[i].classList.remove('active');
      }
    });
  });
});

