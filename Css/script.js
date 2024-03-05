document.addEventListener("DOMContentLoaded", function(){
    const menuToogle = document.querySelector(".menu-toogle");
    const navList = document.querySelector(".nav-list");

    menuToogle.addEventListener("click", function(){
        navList.classList.toggle("show");
    });
});
