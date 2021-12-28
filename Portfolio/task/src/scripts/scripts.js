/*PopUp*/
const buttons = document.querySelectorAll(".open-window");
const popUpWindow = document.querySelector(".window");
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        popUpWindow.style.visibility = "visible";
        popUpWindow.style.animation = "fadeIn 1s";
    });
}

const closeButton = document.getElementById("close");
closeButton.addEventListener('click', function () {
    popUpWindow.style.visibility = "hidden";
    popUpWindow.style.animation = "";
});
/*Mobile Menu*/
const navButton = document.querySelector(".hamburger_button");
const mobileMenu = document.querySelector(".hamburger");
navButton.addEventListener('click', function () {
    if (mobileMenu.style.visibility === 'hidden') {
        mobileMenu.style.visibility = 'visible';
    } else {
        mobileMenu.style.visibility = 'hidden';
    }
})