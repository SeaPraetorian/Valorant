const modal = document.querySelector("#modal");
const sage = document.querySelector("#sage");

window.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

sage.addEventListener("click", () => {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/1aRwM_QsqQI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
});
