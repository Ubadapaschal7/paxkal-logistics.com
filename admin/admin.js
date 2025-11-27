// toggle sidebar
const sideBar = document.querySelector(".side-bar");
const sideBtn = document.querySelector(".sidebar-btn");

if (sideBtn && sideBar) {
  sideBtn.addEventListener("click", function () {
    sideBar.classList.toggle("show-sidebar");
  });
}

// switch button
const about = document.querySelector(".container");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

if (about) {
  about.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
      // remove selected from other buttons
      btns.forEach(function (btn) {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      // hide other articles
      articles.forEach(function (article) {
        article.classList.remove("active");
      });
      const element = document.getElementById(id);
      if (element) element.classList.add("active");
    }
  });
}
