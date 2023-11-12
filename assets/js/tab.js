const tabs = document.querySelectorAll(".tabs");
const contents = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active-content"));

    tab.classList.add("active");
    contents[index].classList.add("active-content");
  });
});
