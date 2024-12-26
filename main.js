const $ = element => document.querySelector(element);

const $buttonImage = $("#buttonImage");
const $buttonText = $("#buttonText");
const $asideImg = $("#taskbarImg");
const $asideTxt = $("#taskbarTxt");
// ----- BARRA DE CONFIG DE IMAGEN -------
const $imgMeme = $("#imgMeme"); //este es el div que contiene a la imagen 
const $inputUrlImg = $("#imgUrl");
const $inputImgBg = $("#imgBgcolor");
const $rangeBrightness = $("#imgBrightness");
const $rangeOpacity = $("#imgOpacity");
const $rangeContrast = $("#imgContrast");
const $rangeBlur = $("#imgBlur");
const $rangeGrayScale = $("#imgGrayScale");
const $rangeSepia = $("#imgSepia");
const $rangeHue = $("#imgHueRotation");
const $rangeSaturation = $("#imgSaturation");
const $rangeNegative = $("#imgNegatives");
// ----- BARRA DE CONFIG TEXTO --------
const $inputTextTop = $("#textTop");
const $inputNoTextTop = $("#noTextTop");
const $inputTextBottom = $("#textBottom");
const $inputNoTextBottom = $("#noTextBottom");
const $selectFont = $("#selectFont");
const $inputFontNumber = $("#fontNumber");
const $buttonLeft = $("#textLeft");
const $buttonCenter = $("#textCenter");
const $buttonRight = $("#textRight");
const $inputColorText = $("#colorText");
const $inputColorBgText = $("#colorBg");
const $inputNoBg = $("#noBg");
const $buttonNoContour = $("#noContour");
const $buttonLightContour = $("#lightContour");
const $buttonDarkContour = $("#darkContour");
const $inputSpacing = $("#numberSpacing");
const $inputLineSpacing = $("#numberSpacingLine");
const $divCardTextTop = $("#cardTextTop"); // este es el div que contiene al texto superior
const $divCardTextBottom = $("#cardTextBottom"); // este es el div que contiene al texto inferior 


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

// barra imagen
$inputUrlImg.addEventListener("input", () => {
    $imgMeme.style.backgroundImage = `url(${$inputUrlImg.value})`
})

// ver evento de fondo 
$inputImgBg.addEventListener("input", () =>{
    $imgMeme.style.backgroundColor = `${$inputImgBg.value}` 
})


$rangeBrightness.addEventListener("input", () => {
    $imgMeme.style.filter = `brightness(${$rangeBrightness.value})`
});

$rangeOpacity.addEventListener("input", () => {
    $imgMeme.style.opacity = `${$rangeOpacity.value}`
});

$rangeContrast.addEventListener("input", () => {
    $imgMeme.style.filter = `contrast(${$rangeContrast.value}%)`;
});

$rangeBlur.addEventListener("input", () => {
    $imgMeme.style.filter = `blur(${$rangeBlur.value}px)`;
});

$rangeGrayScale.addEventListener("input", () => {
    $imgMeme.style.filter = `grayscale(${$rangeGrayScale.value}%)`;
});

$rangeSepia.addEventListener("input", () => {
    $imgMeme.style.filter = `sepia(${$rangeSepia.value}%)`;
});

$rangeHue.addEventListener("input", () => {
    $imgMeme.style.filter = `hue-rotate(${$rangeHue.value}deg)`;
});

$rangeSaturation.addEventListener("input", () => {
    $imgMeme.style.filter = `saturate(${$rangeSaturation.value}%)`;
});

$rangeNegative.addEventListener("input", () => {
    $imgMeme.style.filter = `invert(${$rangeNegative.value})`;
});

// --------------------------------

$inputTextTop.addEventListener("input", () => {
    $divCardTextTop.innerText = $inputTextTop.value
});

// no funciona para destildar, cuando lo saco el de abajo se va arriba
$inputNoTextTop.addEventListener("input", () => {
   if($inputNoTextTop.checked){
    $divCardTextTop.style.display = "none";
   } else{
    $divCardTextTop.style.display = "block";
   }
}) 

$inputTextBottom.addEventListener("input", () => {
    $divCardTextBottom.innerText = $inputTextBottom.value
})

// no funciona al destildar 
$inputNoTextBottom.addEventListener("input", () => {
    if($inputNoTextBottom.checked){
     $divCardTextBottom.style.display = "none";
    } else{
     $divCardTextBottom.style.display = "block";
    }
 }) 

$selectFont.addEventListener("change", () => {
    $divCardTextTop.style.fontFamily = $selectFont.value;
    $divCardTextBottom.style.fontFamily = $selectFont.value;
})

$inputFontNumber.addEventListener("input", () => {
    $divCardTextTop.style.fontSize = `${$inputFontNumber.value}px`;
    $divCardTextBottom.style.fontSize = `${$inputFontNumber.value}px`;
})

