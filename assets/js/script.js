const counters = document.querySelectorAll(".counter");
const speed = 200; // The lower the slower

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    // Lower inc to slow and higher to slow
    const inc = target / speed;

    if (count < target) {
      // Add inc to count and output in counter
      counter.innerText = count + inc;
      // Call function every ms
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});

// header background-color

var header = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    header.style.backgroundColor = "rgba(134, 87, 49, 0.8)"; // Show tap-to-top button
    header.style.backdropFilter = "blur(10px)";
    // header.style.filter="blur(8px)";
  } else {
    header.style.backgroundColor = "transparent"; // Hide tap-to-top button
    header.style.backdropFilter = "unset";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Function to handle footer behavior
  function handleFooter() {
    const contentWidth = window.innerWidth;

    const footerTitles = document.querySelectorAll(".footer-title");
    const footerContents = document.querySelectorAll(
      ".footer-contact, .footer-contain"
    );

    if (contentWidth < 576) {
      // Add icons and toggle behavior for small screens
      footerTitles.forEach((title) => {
        if (!title.querySelector(".according-menu")) {
          const span = document.createElement("span");
          span.className = "according-menu float-end";
          span.innerHTML = '<i class="ri-arrow-down-s-line"></i>';
          title.appendChild(span);
        }

        title.addEventListener("click", function () {
          // Reset all titles and contents
          footerTitles.forEach((t) => {
            t.classList.remove("active");
            const icon = t.querySelector(".according-menu i");
            if (icon) icon.className = "ri-arrow-down-s-line";
          });

          footerContents.forEach((content) => {
            content.style.display = "none";
          });

          // Toggle current title and its content
          const nextContent = title.nextElementSibling;
          if (nextContent && nextContent.style.display === "none") {
            title.classList.add("active");
            title.querySelector(".according-menu i").className =
              "ri-arrow-up-s-line";
            nextContent.style.display = "block";
          }
        });
      });

      // Hide all contents initially
      footerContents.forEach((content) => (content.style.display = "none"));
    } else {
      // Reset for larger screens
      footerTitles.forEach((title) => {
        const icon = title.querySelector(".according-menu");
        if (icon) icon.remove();
      });

      footerContents.forEach((content) => (content.style.display = "block"));
    }
  }

  // Initial setup and dynamic resize handling
  handleFooter();
  window.addEventListener("resize", handleFooter);
});

// mega-menu in submenu show and hide

let menuTitle = document.querySelectorAll(".menu-title");

for (let a of menuTitle) {
  a.addEventListener("click", () => {
    let b = a.nextElementSibling;
    b.classList.toggle("show");
  });
}

//tap to top button

var buttontop = document.querySelector("#taptotop");

console.log(buttontop);

window.addEventListener("scroll", function () {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    buttontop.style.display = "block"; // Show tap-to-top button
  } else {
    buttontop.style.display = "none"; // Hide tap-to-top button
  }
});
buttontop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top smoothly
});

// ----- loader ----

let loader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 1000); // Hide after 1 second
});
// --setting-btn----
var setting = document.querySelector(".setting-menu");

var settingBtn = document.getElementById('setting');

settingBtn.addEventListener("click",()=>{
  setting.classList.toggle("show");
})

// ---- rtl-ltr---

let btnRtl = document.querySelector(".btnrtl");
let btnLtr = document.querySelector(".btnltr");
let body = document.querySelector("body");

btnRtl.addEventListener("click", () => {
  btnRtl.classList.add('active');
  btnLtr.classList.remove('active');
  if (body.getAttribute("dir") == "rtl") {
	body.setAttribute("dir", "ltr");
 
  } else {
	body.setAttribute("dir", "rtl");
   
  }
})

btnLtr.addEventListener("click", () => {
  btnLtr.classList.add('active');
  btnRtl.classList.remove('active');
  if (body.getAttribute("dir") == "rtl") {
	body.setAttribute("dir", "ltr");
 
  } else {
	body.setAttribute("dir", "rtl");
   
  }
})

// --- dark-btn ---

let darkBtn = document.querySelector('.dark');
let lightBtn = document.querySelector('.light');
let style = document.querySelector("#theme-link");

darkBtn.addEventListener("click",()=>{
  darkBtn.classList.add('active');
  lightBtn.classList.remove('active');
  body.classList.add("dark-only");
  // style.setAttribute("href", "../assets/css/dark.css");
})

lightBtn.addEventListener("click",()=>{
  lightBtn.classList.add('active');
  darkBtn.classList.remove('active');
  body.classList.remove("dark-only");
  // style.setAttribute("href", "../assets/css/style.css");
})

