/**
 * Reveals the first and the second heading syllable by syllable.
 */
const revealsOne = document.querySelectorAll(".reveal-1");
revealsOne.forEach((item, index) => {
  setTimeout(function () {
    item.style.visibility = "visible";
    item.style.color = "#fff";
  }, 80 * (index + 1));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".reveal--about");

    if (entry.isIntersecting) {
      const revealsTwo = document.querySelectorAll(".reveal-2");
      revealsTwo.forEach((item, index) => {
        setTimeout(function () {
          item.style.visibility = "visible";
        }, 80 * (index + 1));
      });
      return; // if we added the class, exit the function
    }
  });
});

observer.observe(document.querySelector(".reveal--about"));
