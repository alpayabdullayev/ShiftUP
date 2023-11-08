// const cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', function(x) {
//     cursor.style.cssText = "left: " + x.clientX + "px; top: " + x.clientY + "px;";
// });
// document.querySelector('.beforeItem2 a').addEventListener('mouseover', function() {
//     this.classList.add('active');
// });

// document.querySelector('.beforeItem2 a').addEventListener('mouseout', function() {
//     this.classList.remove('active');
// });


const offCanvas = document.getElementById("offCanvas");


const offCanvasOpenBtn = document.querySelector(".spans");
const offCanvasCloseBtn = document.getElementById("offcanvasCloseBtn");


offCanvas.style.transform = "translateX(100%)";

function openOffCanvas() {

  offCanvas.style.transform = "translateX(0)";
}

offCanvasOpenBtn.addEventListener("click", openOffCanvas);
offCanvasCloseBtn.addEventListener("click", () => {
  offCanvas.style.transform = "translateX(100%)";
});











const offCanvasSideBar = document.getElementById("offCanvasSideBar")

const openOffCanvasSideBar = document.querySelector(".hamburger")

const offcanvasCloseBtnSideBar = document.getElementById("offcanvasCloseBtnSideBar")

offCanvasSideBar.style.transform = "translateX(100%)"

function openOffCanvasSideBarFunction() {
    offCanvasSideBar.style.transform = "translateX(0)"
}
openOffCanvasSideBar.addEventListener("click",()=>{
    openOffCanvasSideBarFunction()
    console.log("salam");
} );



offcanvasCloseBtnSideBar.addEventListener("click", () => {
    offCanvasSideBar.style.transform = "translateX(100%)";
});
  

