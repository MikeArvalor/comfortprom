let service_button = document.getElementById("ready_product")
let close = document.getElementsByClassName("close_modal")[0]
let form = document.getElementById("modal_wrapp")
service_button.onclick = function(){
    form.style.display = "block"
}
close.onclick=function(){
    form.style.display = "none"
}

 