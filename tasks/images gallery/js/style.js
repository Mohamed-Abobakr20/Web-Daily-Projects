// create columns buttons
let two = document.querySelector('.two');
let four = document.querySelector('.four');
let gallery = document.querySelector('.gallery');

two.onclick = function() {
    gallery.style["grid-template-columns"] = "repeat(2, 1fr)";
};
four.onclick = function() {
    gallery.style["grid-template-columns"] = "repeat(4, 1fr)";
};