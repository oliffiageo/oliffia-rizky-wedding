document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".button");

  if (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      const tujuan = document.querySelector("#acara");

      if (tujuan) {
        tujuan.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  }
});
