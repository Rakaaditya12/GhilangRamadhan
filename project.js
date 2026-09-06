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

window.addEventListener("scroll", () => {
  if (window.scrollY < 3200) {
    aktivitas.style.opacity = "0";
    aktivitas.style.transition = "1s";
  } else if (window.scrollY > 2800) {
    aktivitas.style.opacity = "";
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
    contentImg.style.transition = "1s";
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

function functionClick() {
  setTimeout(() => {
    contentFooter.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  });
}

navbarHome.addEventListener("click", (e) => {
  e.preventDefault();

  setTimeout(() => {
    contentPendaki.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }, 400);
});

navbarAbout.addEventListener("click", () => {
  setTimeout(() => {
    contentAbout.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }, 400);
});

navbarHobby.addEventListener("click", () => {
  setTimeout(() => {
    aktivitas.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }, 400);
});

logoPuncakSaya.addEventListener("click", () => {
  setTimeout(() => {
    contentImg.scrollIntoView({
      behavior: "smooth",
      transition: "1s",
      block: "start",
    });
  }, 500);
});

window.addEventListener("load", () => {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  window.scrollTo({
    behavior: "instant",
    top: 0,
    left: 0,
  });
});

functionClick();
