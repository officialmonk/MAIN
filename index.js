var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
//Кнопки в хедері
var forma_vhoda = document.getElementById('forma_vhoda');
var forma_registra = document.getElementById('forma_registra');
//форми
var btn_back = document.getElementById('btn_back');
var back = document.getElementById('back');
//Кнопки в формах

btn1.onclick = function(){
    forma_vhoda.style.display="block";
    if(forma_registra.style.display="block"){
        forma_registra.style.display="none";
    }
}
btn2.onclick = function(){
    forma_registra.style.display="block";
    if(forma_vhoda.style.display="block"){
        forma_vhoda.style.display="none";
    }
}

btn_back.onclick = function(){
     forma_vhoda.style.display="none";
}
back.onclick = function(){
    forma_registra.style.display="none";
}
