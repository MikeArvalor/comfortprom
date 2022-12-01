let slideBig = document.querySelectorAll('.slideBig')
let smallPict = document.getElementsByClassName("smallPict")
let captionText = document.getElementById("caption");
let modal_img = document.getElementById('myModal_img');
let modalImg = document.getElementById("img01_img");
let span_img = document.getElementsByClassName("close_img")[0];
let arrImg = [
    'img/landscape1.jpg',
    'img/landscape2.jpg',
    'img/landscape3.jpg',
    'img/landscape4.jpg',
    'img/landscape5.jpg',
    'img/landscape6.jpg',
    'img/skameika_1.jpg',
    'img/skameika_2.jpg',
    'img/skameika_3.jpg',
    'img/skameika_4.jpg',
    'img/skameika_5.jpg'
]
function startImg(){
    for ( let i = 0; i<slideBig.length; i++){
        slideBig[i].setAttribute('src',arrImg[i])
    }
}
startImg()
for(let j =0; j<smallPict.length; j++){
    smallPict[j].addEventListener('click', function(e){
        for(let q = 0; q<arrImg.length; q++){
            modal_img.style.display = "block";
            modalImg.src = this.src;
             const smallPictClone = e.target.cloneNode(false)
             let event_c = e.target
                   cleanNode(bigPict)
                   bigPict.append(smallPictClone)   
        } 
    })
    function cleanNode(parent){
        for(let child of parent.children){
            child.remove();
        }
    }
}
span_img.onclick = function() { 
    modal_img.style.display = "none";
}
