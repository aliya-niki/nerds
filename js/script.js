var link = document.querySelector(".write-btn");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var login = popup.querySelector("[name=user-name]");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    login.focus();
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
});
