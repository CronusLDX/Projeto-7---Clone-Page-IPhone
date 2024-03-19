const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {

        buttons.forEach((button) => {
            button.querySelector(".color").classList.remove("selected");
        });

        const id = btn.getAttribute("id");
        btn.querySelector(".color").classList.add("selected");

        image.classList.add("changing");
        image.setAttribute("src", `img/iphone_${id}.jpg`);

        setTimeout(() => {
            image.classList.remove("changing");
        }, 200);
    });
});
