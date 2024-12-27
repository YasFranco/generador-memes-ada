const $ = element => document.querySelector(element);

const $card = $("#cardContainer")
const $buttonImage = $("#buttonImage");
const $buttonText = $("#buttonText");
const $buttonModeDark = $("#buttonModeDark");
const $buttonModeLight = $("#buttonModeLight");
const $asideImg = $("#taskbarImg");
const $asideTxt = $("#taskbarTxt");
const $buttonDownload = $("#downloadImg")
const $imgMeme = $("#imgMeme"); 
const $inputUrlImg = $("#imgUrl");
const $inputImgBg = $("#imgBgcolor");
const $selectMode = $("#selectMode");
const $rangeBrightness = $("#imgBrightness");
const $rangeOpacity = $("#imgOpacity");
const $rangeContrast = $("#imgContrast");
const $rangeBlur = $("#imgBlur");
const $rangeGrayScale = $("#imgGrayScale");
const $rangeSepia = $("#imgSepia");
const $rangeHue = $("#imgHueRotation");
const $rangeSaturation = $("#imgSaturation");
const $rangeNegative = $("#imgNegatives");
const $buttonResetValues = $("#resetValues");
const $buttonCloseTxt = $("#closeFormTxt");
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
const $divCardTextTop = $("#cardTextTop"); 
const $divCardTextBottom = $("#cardTextBottom"); 


// ------------------------------- FUNCIONES -------------------------------

const buttonsChange = (show, hide) => {
    show.style.display = 'block';
    hide.style.display = 'none';
}

// ------------------------------ EVENTOS ----------------------------------


// Boton que muestra la barra de tarea de imagen o de texto.

$buttonImage.addEventListener("click", () => {
    buttonsChange($asideImg, $asideTxt);
});

$buttonText.addEventListener("click", () => {
    buttonsChange($asideTxt, $asideImg);
})
// se muestra por defecto primero la barra de "imagen"

$asideImg.style.display = 'block';
$asideTxt.style.display = 'none';

//Boton para pasar de modo oscuro a modo claro y viceversa.

$buttonModeDark.addEventListener("click", () => {
    
    document.body.classList.remove("lightMode");
    document.body.classList.add("darkMode");

    buttonsChange($buttonModeLight,$buttonModeDark)
});

$buttonModeLight.addEventListener("click", () =>{
    document.body.classList.remove("darkMode");
    document.body.classList.add("lightMode");

    buttonsChange($buttonModeDark,$buttonModeLight);
})

// se muestra por defecto el modo oscuro. 

$buttonModeDark.style.display = 'block';
$buttonModeLight.style.display = 'none';

// Boton para cerrar la barra 

$buttonCloseTxt.addEventListener("click", () => {
    $asideTxt.style.display = "none";
})

// Boton para descargar el meme.

$buttonDownload.addEventListener("click", () => {
    domtoimage.toBlob($card).then((blob) => {
        saveAs(blob, "mi-meme.png");
    }).catch((error) => {
        console.log (error)
      });
})

// Boton para resetear filtros 
$buttonResetValues.addEventListener("click", () => {
    $inputUrlImg.value = "";
    $imgMeme.style.backgroundImage = "";
    $imgMeme.style.backgroundColor = "";
    $imgMeme.style.mixBlendMode = "unset";
    $selectMode.value = "";
    $divCardTextTop.innerText = "";
    $divCardTextTop.style.fontSize = "30px";
    $divCardTextBottom.innerText = "";
    $divCardTextBottom.style.fontSize = "30px";

})

// --------------------- BARRA IMAGEN -----------------------------

// Poner url de la imagen 
$inputUrlImg.addEventListener("input", () => {
    $imgMeme.style.backgroundImage = `url(${$inputUrlImg.value})`
})

// Pnerle color al fondo
$inputImgBg.addEventListener("input", () =>{
    $imgMeme.style.backgroundColor = `${$inputImgBg.value}` 
})

// Seleccionar un modo
$selectMode.addEventListener("change", () =>{
    $imgMeme.style.mixBlendMode = $selectMode.value;
})

// Ponerle brillo a la imagen
$rangeBrightness.addEventListener("input", () => {
    $imgMeme.style.filter = `brightness(${$rangeBrightness.value})`
});

// Ponerle opacidad a la imagen
$rangeOpacity.addEventListener("input", () => {
    $imgMeme.style.opacity = `${$rangeOpacity.value}`
});

// Ponerle contraste a la imagen
$rangeContrast.addEventListener("input", () => {
    $imgMeme.style.filter = `contrast(${$rangeContrast.value}%)`;
});

// Ponerle blur a la imagen
$rangeBlur.addEventListener("input", () => {
    $imgMeme.style.filter = `blur(${$rangeBlur.value}px)`;
});

// Ponerle escala de grises a la imagen
$rangeGrayScale.addEventListener("input", () => {
    $imgMeme.style.filter = `grayscale(${$rangeGrayScale.value}%)`;
});

// Ponerle sepia a la imagen
$rangeSepia.addEventListener("input", () => {
    $imgMeme.style.filter = `sepia(${$rangeSepia.value}%)`;
});

// Ponerle hue a la imagen
$rangeHue.addEventListener("input", () => {
    $imgMeme.style.filter = `hue-rotate(${$rangeHue.value}deg)`;
});

// Ponerle saturacion a la imagen
$rangeSaturation.addEventListener("input", () => {
    $imgMeme.style.filter = `saturate(${$rangeSaturation.value}%)`;
});

// Ponerle negativos a la imagen
$rangeNegative.addEventListener("input", () => {
    $imgMeme.style.filter = `invert(${$rangeNegative.value})`;
});

// -------------------------------- BARRA DE TEXTO -----------------------------

// Agregar texto superior
$inputTextTop.addEventListener("input", () => {
    $divCardTextTop.innerText = $inputTextTop.value
});

// Sacar texto superior
$inputNoTextTop.addEventListener("input", () => {
   if($inputNoTextTop.checked){
    $divCardTextTop.style.visibility = "hidden";
   } else{
    $divCardTextTop.style.visibility = "visible";
   }
}) 

// Agregar texto inferior
$inputTextBottom.addEventListener("input", () => {
    $divCardTextBottom.innerText = $inputTextBottom.value
})

// Sacar texto inferior
$inputNoTextBottom.addEventListener("input", () => {
    if($inputNoTextBottom.checked){
     $divCardTextBottom.style.display = "none";
    } else{
     $divCardTextBottom.style.display = "block";
    }
 }) 

//  Cambiar la fuente del texto
$selectFont.addEventListener("change", () => {
    $divCardTextTop.style.fontFamily = $selectFont.value;
    $divCardTextBottom.style.fontFamily = $selectFont.value;
})

// Cambiar el tamaño de la fuente del texto 
$inputFontNumber.addEventListener("input", () => {
    $divCardTextTop.style.fontSize = `${$inputFontNumber.value}px`;
    $divCardTextBottom.style.fontSize = `${$inputFontNumber.value}px`;
})

// Boton de alinear hacia la izquierda
$buttonLeft.addEventListener("click", () => {
    $divCardTextTop.style.textAlign = $buttonLeft.value
    $divCardTextBottom.style.textAlign = $buttonLeft.value
})

// Boton de alinear hacia el centro
$buttonCenter.addEventListener("click", () => {
    $divCardTextTop.style.textAlign = $buttonCenter.value
    $divCardTextBottom.style.textAlign = $buttonCenter.value

})

// Boton de alinear hacia la derecha
$buttonRight.addEventListener("click", () => {
    $divCardTextTop.style.textAlign = $buttonRight.value
    $divCardTextBottom.style.textAlign = $buttonRight.value

})

// Agregarle color al texto
$inputColorText.addEventListener("input", () => {
    $divCardTextTop.style.color = $inputColorText.value
    $divCardTextBottom.style.color = $inputColorText.value
})

// Agregarle color al fondo del texto 
$inputColorBgText.addEventListener("input", () => {
    $divCardTextTop.style.backgroundColor = $inputColorBgText.value
    $divCardTextBottom.style.backgroundColor = $inputColorBgText.value
})

// Que el texto no tenga fondo 
$inputNoBg.addEventListener("change", () => {
    const bgColor = $inputNoBg.checked ? "transparent" : $inputColorBgText.value;
    $divCardTextTop.style.backgroundColor = bgColor;
    $divCardTextBottom.style.backgroundColor = bgColor;
});

// Boton para que el texto no tenga contorno
$buttonNoContour.addEventListener("click", () => {
    $divCardTextTop.style.textShadow = "none";
    $divCardTextBottom.style.textShadow = "none";
});

// Boton para que el texto tenga contorno claro
$buttonLightContour.addEventListener("click", () => {
    $divCardTextTop.style.textShadow = "2px 2px 4px white"
    $divCardTextBottom.style.textShadow = "2px 2px 4px white"
    
});

// Boton para que el texto tenga contorno oscuro 
$buttonDarkContour.addEventListener("click", () => {
    $divCardTextTop.style.textShadow = "2px 2px 4px black"
    $divCardTextBottom.style.textShadow = "2px 2px 4px black"
});

// Espaciado
$inputSpacing.addEventListener("input", () => {
    $divCardTextTop.style.letterSpacing = `${$inputSpacing.value}px`
    $divCardTextBottom.style.letterSpacing = `${$inputSpacing.value}px`
});

// Interlineado
$inputLineSpacing.addEventListener("input", () => {
    $divCardTextTop.style.lineHeight = `${$inputLineSpacing.value}`
    $divCardTextBottom.style.lineHeight = `${$inputLineSpacing.value}`
});
