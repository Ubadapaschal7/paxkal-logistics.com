document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".scroll-reveal");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target); // animate once
                }
            });
        },
        {
            threshold: 0.2 // triggers when 20% is visible
        }
    );

    revealElements.forEach(el => observer.observe(el));
});



const navLinks = document.querySelector('.nav-links');
const navBtn = document.querySelector('.nav_btn');

navBtn.addEventListener('click', function () {
navLinks.classList.toggle('show-links')
});



// FAQ
const faqTitle = document.querySelectorAll('.faq-single-card');

faqTitle.forEach(function (faq) {
const faqBtn = faq.querySelector(".faq-title");
faqBtn.addEventListener("click", function () {
    faqTitle.forEach(function (item) {
        if(item !== faq) {
            item.classList.remove("show-faq-answer");
        }
    });
faq.classList.toggle("show-faq-answer");

});
});


const about = document.querySelector(".faq-single-card");
const btns = document.querySelectorAll(".faq-title");
const articles = document.querySelectorAll(".faq-answer");

if (about) {
  about.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
      // remove selected from other buttons
      btns.forEach(function (btn) {
        btn.classList.remove("show-faq-answer");
      });
      e.target.classList.add("show-faq-answer");
      // hide other articles
      articles.forEach(function (article) {
        article.classList.remove("show-faq-answer");
      });
      const element = document.getElementById(id);
      if (element) element.classList.add("show-faq-answer");
    }
  });
}