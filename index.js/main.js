const collapsible = document.querySelectorAll(".collapsible");
collapsible.forEach((item) => {
    item.addEventListener("click", function() {
        item.classList.toggle("collapsible--expanded");
    })
});