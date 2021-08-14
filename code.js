"use strict"

// functions
let check = (item, _class) => item.classList.contains(_class);
let add = (item, _class) => item.classList.add(_class);
let remove = (item, _class) => item.classList.remove(_class);
let toggle = (item, _class) => check(item, _class) ? remove(item, _class) : add(item, _class);

//local storage


//dom elements

let toggle_btn = document.getElementById("toggle-js");

let theme = localStorage.getItem("theme");

if (theme) {
    add(document.body, theme);
    if (theme === "dark") {
        toggle_btn.checked = true;
    }
}

//event listners

toggle_btn.addEventListener("change", () => {
    if (toggle_btn.checked) {
        document.body.classList.replace("light", "dark");
        localStorage.setItem("theme", "dark");

    }
    else {
        document.body.classList.replace("dark", "light");
        localStorage.setItem("theme", "light");
    }
})