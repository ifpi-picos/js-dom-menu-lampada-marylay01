// Menu mobile
function toggleMenu(){
  const nav = document.querySelector("nav");   //selecionar 
  nav.classList.toggle = ("mobile");             //perguntar

}

// Imagem 1
const imagem1 = document.getElementById("lampada-01");
imagem1.addEventListener("click", function () {
  console.log(imagem1.src);
  if (imagem1.src.endsWith("lampada.jpg")) {
    imagem1.src = "img/lampada-on.jpg";
  } else {
    imagem1.src = "img/lampada.jpg";
  }
});

// Imagem 2
const imagem2 = document.getElementById("lampada-02"); //pegar um elemento pelo ID dele no html   
imagem2.addEventListener("mouseover", function () {         //adicionando os eventos addEventListener
  imagem2.src = "img/lampada-on.jpg";                   //on para a imagem ascender    //vão acontecer 2 eventos, ascender com o mouse em cima e apagar com  o mouse fora 
})
imagem2.addEventListener("mouseout", function() {
   imagem2.src = "img/lampada.jpg";             //nao tem o "on" pois vai ficar desligada
});
