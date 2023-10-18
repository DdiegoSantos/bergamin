
parag = document.querySelector('#redP1')
para1 = document.querySelector("#para1")


function carregar(){
    
    corpo = document.body
    corpo.style.backgroundColor="#FFCB12"
    
    

}
//=========acende e apaga o nome youtube ==========
function trocaYoutube(){
    
    document.getElementById('tube').src = "imagem/youtube-vermelho.png"
    parag.style.color="#333";
    
}

function trocaYoutubecinza(){
    document.querySelector("#tube").src = "imagem/youtube-cinza.png"
    parag.style.color="#D2D3D5";
}
//=========acende e apaga o nome Instagram ==========

function trocaInsta(){
    document.getElementById('insta').src = "imagem/insta-color.png"
    para1.style.color="#333"
}

function trocaInstacinza(){
    document.getElementById('insta').src = "imagem/insta-cinza.png"
    para1.style.color = "#D2D3D5"
}

//=========acende e apaga o nome Instagram ============
function trocaFace(){
    document.querySelector("#face").src = "imagem/face-azul.png"
    para2.style.color = "#333"
}    

function trocaFacecinza(){
    document.getElementById('face').src="imagem/face-cinza.png"
    
    para2.style.color = "#D2D3D5"
    
}

