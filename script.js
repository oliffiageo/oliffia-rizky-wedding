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
const flowerContainer = document.createElement("div");
flowerContainer.className = "flower-container";
document.body.appendChild(flowerContainer);

function createFlower() {
    const flower = document.createElement("div");
    flower.className = "flower";

    const flowers = ["🌸","🤍","🌼","🌷"];
    flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = (5 + Math.random() * 5) + "s";
    flower.style.fontSize = (18 + Math.random() * 18) + "px";

    flowerContainer.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 10000);
}

setInterval(createFlower, 600);
