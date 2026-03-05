// WallTag Snake loader

document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            console.log("Loading game...");
        });
    });

});
