const $ = element => document.querySelector(element);

const $buttonImage = $("#buttonImage");
const $buttonText = $("#buttonText");
const $asideImg = $("#taskbarImg");
const $asideTxt = $("#taskbarTxt");

// funcion para los botones "imagen" y "texto"
const buttonsAside = (showAside, hideAside) => {
    showAside.style.display = 'block';
    hideAside.style.display = 'none';
}

// Eventos click de los botones 

$buttonImage.addEventListener("click", () => {
    buttonsAside($asideImg, $asideTxt);
});

$buttonText.addEventListener("click", () => {
    buttonsAside($asideTxt, $asideImg);
})

// se muestra por defecto primero la barra de imagen y oculta la de texto
$asideImg.style.display = 'block';
$asideTxt.style.display = 'none';



