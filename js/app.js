//    burger

let body = document.body;
let burger = document.getElementsByClassName("burger")[0];
let show = document.getElementsByClassName("nav-group")[0];

burger.addEventListener("click", () => {
    burger.classList.toggle("show-menu");

    if (show.classList.contains("show")) {
        show.classList.add("closing");
        setTimeout(() => {
            show.classList.remove("show", "closing");
            body.classList.remove("no-scroll");
        }, 500);
    } else {
        show.classList.add("show");
        body.classList.add("no-scroll");
    }
});
