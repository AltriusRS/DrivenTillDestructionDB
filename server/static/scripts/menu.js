let nav_hidden = true;
window.onload = () => {
    let nav_button = document.getElementById("mob-nav-button")
    nav_button.onclick = () => {
        let n = document.getElementById("mobile-menu");
        if (nav_hidden) {
            n.style.display = "block";
            nav_hidden = false;
        } else {
            n.style.display = "none";
            nav_hidden = true;
        }
    }
}