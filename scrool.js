
let btn = document.getElementById('scrool');
window.onscroll = function() {
    if(scrollY>300) {
        btn.style.display = 'block' ;
    }else {
        btn.style.display = 'none' ;
    }
}

btn.onclick=function() {
    window.scroll({
        left:0 , 
        top: 0 ,
        behavior:'smooth'

    })
     
}