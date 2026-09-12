const contentHero = document.getElementById("content-hero");
const contentImg = document.getElementById("content-img");
const contentPendaki = document.getElementById("content-pendaki");
const contentAbout = document.getElementById("content-about");
const contentTimeline = document.getElementById("content-timeline");
const contentFooter = document.getElementById("content-footer");
const navbarHome = document.getElementById("navbar-home");
const navbarAbout = document.getElementById("navbar-about");
const navbarHobby = document.getElementById("navbar-hobby");
const navbarContact = document.getElementById("navbar-contact");
const aktivitas = document.getElementById("content-aktivitas");
const logoPuncakSaya = document.getElementById("logo-puncaksaya");
const queryPerjalanan = document.getElementById("query-perjalanan");
const button = document.getElementById("btn-click");
const element = document.querySelector("#menu a");

button.addEventListener("click", () => {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");

  element.addEventListener("click", () => {
    menu.classList.toggle("remove");
  });
});

window.addEventListener("scroll", (e) => {
  e.preventDefault();

  if (window.scrollY < 2900) {
    aktivitas.style.opacity = "0";
    aktivitas.style.transition = "1s";
  } else if (window.scrollY > 3100) {
    aktivitas.style.opacity = "";
  }
});

window.addEventListener("scroll", (e) => {
  e.preventDefault();

  if (window.scrollY < 1500) {
    contentAbout.style.transition = "1s";
    contentAbout.style.opacity = "0";
  } else if (window.scrollY > 1500) {
    contentAbout.style.opacity = "1";
  }
});

window.addEventListener("scroll", (e) => {
  e.preventDefault();

  if (window.scrollY < 100) {
    contentHero.style.opacity = "0.4";
    contentHero.style.transition = "1s";
  } else if (window.scrollY > 400) {
    contentHero.style.opacity = "";
  }

  if (window.scrollY < 400) {
    contentImg.style.transform = "translateX(-300px)";
    contentImg.style.transition = "1.3s";
    contentImg.style.opacity = "0";
  } else if (window.scrollY > 400) {
    contentImg.style.transform = "";
    contentImg.style.opacity = "";
  }
});

window.addEventListener("scroll", (e) => {
  e.preventDefault();

  if (window.scrollY < 2000) {
    contentTimeline.style.transform = "translateX(-300px)";
    contentTimeline.style.transition = "1s";
    contentTimeline.style.opacity = "0";
  } else if (window.scrollY > 2200) {
    contentTimeline.style.transform = "translateX(0)";
    contentTimeline.style.opacity = "1";
  }
});

navbarContact.addEventListener("click", (e) => {
  e.preventDefault();

  setTimeout(() => {
    contentFooter.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 400);
});

navbarHome.addEventListener("click", (e) => {
  e.preventDefault();

  setTimeout(() => {
    contentPendaki.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 400);
});

navbarAbout.addEventListener("click", (e) => {
  e.preventDefault();

  setTimeout(() => {
    contentAbout.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 400);
});

navbarHobby.addEventListener("click", (e) => {
  e.preventDefault();

  setTimeout(() => {
    aktivitas.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 400);
});

logoPuncakSaya.addEventListener("click", (e) => {
  e.preventDefault();

  setTimeout(() => {
    contentImg.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  }, 500);
});

const refreshPerformance = performance.getEntriesByType("navigation")[0];
if (refreshPerformance.type === "reload") {
  window.scrollTo(0, 0);
} else {
  console.error("Error:failed");
}
