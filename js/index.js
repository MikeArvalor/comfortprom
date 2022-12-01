let service_button = document.getElementById("ready_product")
let close = document.getElementsByClassName("close_modal")[0]
let form = document.getElementById("modal_wrapp")
service_button.onclick = function(){
    form.style.display = "block"
}
close.onclick=function(){
    form.style.display = "none"
}
let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.links_perfocrepesh');


    headerBurger.addEventListener('click', showMenu);

    function showMenu(){
        headerBurger.classList.toggle('active');
        headerMenu.classList.toggle('active');
        document.body.style.overflow = 'hidden';
    };


 