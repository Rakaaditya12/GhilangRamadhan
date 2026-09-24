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
const gambarSlamet = document.getElementById("gambar-slamet");
const gambarMerbabu = document.getElementById("gambar-merbabu");
const gambarGede = document.getElementById("gambar-gede");
const gambarPangrango = document.getElementById("gambar-pangrango");
const gambarSindoro = document.getElementById("gambar-sindoro");
const gambarSumbing = document.getElementById("gambar-sumbing");

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
  }, 200);
});

navbarHome.addEventListener("click", (e) => {
  e.preventDefault();

  setTimeout(() => {
    contentPendaki.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 200);
});

navbarAbout.addEventListener("click", (e) => {
  e.preventDefault();

  setTimeout(() => {
    contentAbout.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 200);
});

navbarHobby.addEventListener("click", (e) => {
  e.preventDefault();

  setTimeout(() => {
    aktivitas.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 200);
});

logoPuncakSaya.addEventListener("click", (e) => {
  e.preventDefault();

  setTimeout(() => {
    contentImg.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  }, 200);
});

const refreshPerformance = performance.getEntriesByType("navigation")[0];
if (refreshPerformance.type === "reload") {
  window.location.href = "index.html";
} else {
  console.error("Error:failed");
}

// Gunung slamet
function mouseOverSlamet() {
  gambarSlamet.addEventListener("mouseover", (e) => {
    e.preventDefault();

    if (e.target) {
      const navbarNav = document.getElementById("navbar-nav");
      const headQueryPerjalanan = document.getElementById(
        "head-query-perjalanan",
      );
      navbarNav.style.transition = "0.8s";
      navbarNav.style.filter = "blur(5px)";
      headQueryPerjalanan.style.transition = "0.8s";
      headQueryPerjalanan.style.filter = "blur(5px)";
      gambarGede.style.filter = "blur(5px)";
      gambarMerbabu.style.filter = "blur(5px)";
      gambarPangrango.style.filter = "blur(5px)";
      gambarSindoro.style.filter = "blur(5px)";
      gambarSumbing.style.filter = "blur(5px)";
    }

    gambarSlamet.addEventListener("mouseleave", (e) => {
      e.preventDefault();

      const navbarNav = document.getElementById("navbar-nav");
      const headQueryPerjalanan = document.getElementById(
        "head-query-perjalanan",
      );
      navbarNav.style.filter = "";
      headQueryPerjalanan.style.filter = "";
      gambarGede.style.filter = "";
      gambarMerbabu.style.filter = "";
      gambarPangrango.style.filter = "";
      gambarSindoro.style.filter = "";
      gambarSumbing.style.filter = "";
    });
  });
}

// Gunung merbabu
function mouseOverMerbabu() {
  gambarMerbabu.addEventListener("mouseover", (e) => {
    e.preventDefault();

    if (e.target) {
      const navbarNav = document.getElementById("navbar-nav");
      const headQueryPerjalanan = document.getElementById(
        "head-query-perjalanan",
      );
      navbarNav.style.transition = "0.8s";
      navbarNav.style.filter = "blur(5px)";
      headQueryPerjalanan.style.transition = "0.8s";
      headQueryPerjalanan.style.filter = "blur(5px)";
      gambarGede.style.filter = "blur(5px)";
      gambarSumbing.style.filter = "blur(5px)";
      gambarPangrango.style.filter = "blur(5px)";
      gambarSindoro.style.filter = "blur(5px)";
      gambarSlamet.style.filter = "blur(5px)";
    }

    gambarMerbabu.addEventListener("mouseleave", (e) => {
      e.preventDefault();

      const navbarNav = document.getElementById("navbar-nav");
      const headQueryPerjalanan = document.getElementById(
        "head-query-perjalanan",
      );
      navbarNav.style.filter = "";
      headQueryPerjalanan.style.filter = "";
      gambarGede.style.filter = "";
      gambarSumbing.style.filter = "";
      gambarPangrango.style.filter = "";
      gambarSindoro.style.filter = "";
      gambarSlamet.style.filter = "";
    });
  });
}

// Gunung gede
function mouseOverGede() {
  gambarGede.addEventListener("mouseover", (e) => {
    e.preventDefault();

    if (e.target) {
      const navbarNav = document.getElementById("navbar-nav");
      const headQueryPerjalanan = document.getElementById(
        "head-query-perjalanan",
      );
      navbarNav.style.transition = "0.8s";
      navbarNav.style.filter = "blur(5px)";
      headQueryPerjalanan.style.transition = "0.8s";
      headQueryPerjalanan.style.filter = "blur(5px)";
      gambarSumbing.style.filter = "blur(5px)";
      gambarMerbabu.style.filter = "blur(5px)";
      gambarPangrango.style.filter = "blur(5px)";
      gambarSindoro.style.filter = "blur(5px)";
      gambarSlamet.style.filter = "blur(5px)";
    }

    gambarGede.addEventListener("mouseleave", (e) => {
      e.preventDefault();

      const navbarNav = document.getElementById("navbar-nav");
      const headQueryPerjalanan = document.getElementById(
        "head-query-perjalanan",
      );
      navbarNav.style.filter = "";
      headQueryPerjalanan.style.filter = "";
      gambarSumbing.style.filter = "";
      gambarMerbabu.style.filter = "";
      gambarPangrango.style.filter = "";
      gambarSindoro.style.filter = "";
      gambarSlamet.style.filter = "";
    });
  });
}

// Gunung pangrango
function mouseOverPangrango() {
  gambarPangrango.addEventListener("mouseover", (e) => {
    e.preventDefault();

    if (e.target) {
      const navbarNav = document.getElementById("navbar-nav");
      const headQueryPerjalanan = document.getElementById(
        "head-query-perjalanan",
      );
      navbarNav.style.transition = "0.8s";
      navbarNav.style.filter = "blur(5px)";
      headQueryPerjalanan.style.transition = "0.8s";
      headQueryPerjalanan.style.filter = "blur(5px)";
      gambarGede.style.filter = "blur(5px)";
      gambarMerbabu.style.filter = "blur(5px)";
      gambarSumbing.style.filter = "blur(5px)";
      gambarSindoro.style.filter = "blur(5px)";
      gambarSlamet.style.filter = "blur(5px)";
    }

    gambarPangrango.addEventListener("mouseleave", (e) => {
      e.preventDefault();

      const navbarNav = document.getElementById("navbar-nav");
      const headQueryPerjalanan = document.getElementById(
        "head-query-perjalanan",
      );
      navbarNav.style.filter = "";
      headQueryPerjalanan.style.filter = "";
      gambarGede.style.filter = "";
      gambarMerbabu.style.filter = "";
      gambarSumbing.style.filter = "";
      gambarSindoro.style.filter = "";
      gambarSlamet.style.filter = "";
    });
  });
}

// Gunung sindoro
function mouseOverSindoro() {
  gambarSindoro.addEventListener("mouseover", (e) => {
    e.preventDefault();

    if (e.target) {
      const navbarNav = document.getElementById("navbar-nav");
      const headQueryPerjalanan = document.getElementById(
        "head-query-perjalanan",
      );
      navbarNav.style.transition = "0.8s";
      navbarNav.style.filter = "blur(5px)";
      headQueryPerjalanan.style.transition = "0.8s";
      headQueryPerjalanan.style.filter = "blur(5px)";
      gambarGede.style.filter = "blur(5px)";
      gambarMerbabu.style.filter = "blur(5px)";
      gambarPangrango.style.filter = "blur(5px)";
      gambarSumbing.style.filter = "blur(5px)";
      gambarSlamet.style.filter = "blur(5px)";
    }

    gambarSindoro.addEventListener("mouseleave", (e) => {
      e.preventDefault();

      const navbarNav = document.getElementById("navbar-nav");
      const headQueryPerjalanan = document.getElementById(
        "head-query-perjalanan",
      );
      navbarNav.style.filter = "";
      headQueryPerjalanan.style.filter = "";
      gambarGede.style.filter = "";
      gambarMerbabu.style.filter = "";
      gambarPangrango.style.filter = "";
      gambarSumbing.style.filter = "";
      gambarSlamet.style.filter = "";
    });
  });
}

function mouseOverSumbing() {
  gambarSumbing.addEventListener("mouseover", (e) => {
    e.preventDefault();

    if (e.target) {
      const navbarNav = document.getElementById("navbar-nav");
      const headQueryPerjalanan = document.getElementById(
        "head-query-perjalanan",
      );
      navbarNav.style.transition = "0.8s";
      navbarNav.style.filter = "blur(5px)";
      headQueryPerjalanan.style.transition = "0.8s";
      headQueryPerjalanan.style.filter = "blur(5px)";
      gambarGede.style.filter = "blur(5px)";
      gambarMerbabu.style.filter = "blur(5px)";
      gambarPangrango.style.filter = "blur(5px)";
      gambarSindoro.style.filter = "blur(5px)";
      gambarSlamet.style.filter = "blur(5px)";
    }

    gambarSumbing.addEventListener("mouseleave", (e) => {
      e.preventDefault();

      const navbarNav = document.getElementById("navbar-nav");
      const headQueryPerjalanan = document.getElementById(
        "head-query-perjalanan",
      );
      navbarNav.style.filter = "";
      headQueryPerjalanan.style.filter = "";
      gambarGede.style.filter = "";
      gambarMerbabu.style.filter = "";
      gambarPangrango.style.filter = "";
      gambarSindoro.style.filter = "";
      gambarSlamet.style.filter = "";
    });
  });
}

if ((contentHero.style.transform = "translateX(-90%)")) {
  contentHero.style.transition = "0.7s";
  contentHero.style.color = "red";
  return;
}
