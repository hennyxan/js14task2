var btn = document.getElementById("btn");
var hide = document.getElementById("hide");
btn.addEventListener('click', function () {
    hide.hidden = !hide.hidden;
});