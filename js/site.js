(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        window.setTimeout(function () {
          nav.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        }, 0);
      }
    });
  }

  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-stuck", window.scrollY > 24);
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();
