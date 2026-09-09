/* ==========================================================================
   Al-Khair Public High School Umary — Gallery filtering + lightbox
   ========================================================================== */
(function () {
  "use strict";

  var grid = document.getElementById("galleryGrid");
  if (!grid) return;

  var filterButtons = document.querySelectorAll(".filter-btn");
  var items = Array.prototype.slice.call(grid.querySelectorAll(".gallery-item"));

  var lightbox = document.getElementById("lightbox");
  var lbImage = document.getElementById("lightboxImage");
  var lbCaption = document.getElementById("lightboxCaption");
  var lbClose = document.getElementById("lightboxClose");
  var lbPrev = document.getElementById("lightboxPrev");
  var lbNext = document.getElementById("lightboxNext");

  var visibleItems = items.slice();
  var currentIndex = 0;

  /* ---- Filtering ---- */
  function applyFilter(category) {
    items.forEach(function (item) {
      var match = category === "all" || item.dataset.category === category;
      item.hidden = !match;
    });
    visibleItems = items.filter(function (item) { return !item.hidden; });
  }

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (b) { b.classList.remove("active"); b.setAttribute("aria-pressed", "false"); });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      applyFilter(btn.dataset.filter);
    });
  });

  /* ---- Lightbox ---- */
  function openLightbox(item) {
    currentIndex = visibleItems.indexOf(item);
    renderLightbox();
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    lbClose.focus();
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function renderLightbox() {
    var item = visibleItems[currentIndex];
    if (!item) return;
    var img = item.querySelector("img");
    lbImage.src = img.src;
    lbImage.alt = img.alt;
    lbCaption.textContent = img.alt;
  }

  function showNext() {
    if (!visibleItems.length) return;
    currentIndex = (currentIndex + 1) % visibleItems.length;
    renderLightbox();
  }

  function showPrev() {
    if (!visibleItems.length) return;
    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
    renderLightbox();
  }

  items.forEach(function (item) {
    item.addEventListener("click", function () { openLightbox(item); });
  });

  if (lbClose) lbClose.addEventListener("click", closeLightbox);
  if (lbNext) lbNext.addEventListener("click", showNext);
  if (lbPrev) lbPrev.addEventListener("click", showPrev);

  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  });
})();

