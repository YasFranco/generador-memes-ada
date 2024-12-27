const $ = element => document.querySelector(element);

const $card = $("#cardContainer")
const $buttonImage = $("#buttonImage");
const $buttonText = $("#buttonText");
const $buttonModeDark = $("#buttonModeDark");
const $buttonModeLight = $("#buttonModeLight");
const $asideImg = $("#taskbarImg");
const $asideTxt = $("#taskbarTxt");
const $buttonDownload = $("#downloadImg")
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
const $divCardTextTop = $("#cardTextTop"); // este es el div que contiene al texto superior
const $divCardTextBottom = $("#cardTextBottom"); // este es el div que contiene al texto inferior 


// funcion para los botones "imagen", "texto" y modo oscuro y claro
const buttonsChange = (show, hide) => {
    show.style.display = 'block';
    hide.style.display = 'none';
}

// Eventos click de los botones 

$buttonImage.addEventListener("click", () => {
    buttonsChange($asideImg, $asideTxt);
});
$buttonText.addEventListener("click", () => {
    buttonsChange($asideTxt, $asideImg);
})

// boton modo oscuro/claro

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

$buttonCloseTxt.addEventListener("click", () => {
    $asideTxt.style.display = "none";
})

// se muestra por defecto primero la barra de imagen y oculta la de texto
$asideImg.style.display = 'block';
$asideTxt.style.display = 'none';

$buttonDownload.addEventListener("click", () => {
    domtoimage.toBlob($card).then((blob) => {
        saveAs(blob, "mi-meme.png");
    }).catch((error) => {
        console.log (error)
      });
})

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
    $divCardTextTop.style.visibility = "hidden";
   } else{
    $divCardTextTop.style.visibility = "visible";
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

$buttonLeft.addEventListener("click", () => {
    // console.log($buttonLeft.value)
    $divCardTextTop.style.textAlign = $buttonLeft.value
    $divCardTextBottom.style.textAlign = $buttonLeft.value
})

$buttonCenter.addEventListener("click", () => {
    // console.log($buttonCenter.value)
    $divCardTextTop.style.textAlign = $buttonCenter.value
    $divCardTextBottom.style.textAlign = $buttonCenter.value

})

$buttonRight.addEventListener("click", () => {
    // console.log($buttonRight.value)
    $divCardTextTop.style.textAlign = $buttonRight.value
    $divCardTextBottom.style.textAlign = $buttonRight.value

})

$inputColorText.addEventListener("input", () => {
    $divCardTextTop.style.color = $inputColorText.value
    $divCardTextBottom.style.color = $inputColorText.value
})

$inputColorBgText.addEventListener("input", () => {
    $divCardTextTop.style.backgroundColor = $inputColorBgText.value
    $divCardTextBottom.style.backgroundColor = $inputColorBgText.value
})

// no se puede destildar 
$inputNoBg.addEventListener("change", () => {
    const bgColor = $inputNoBg.checked ? "transparent" : $inputColorBgText.value;
    $divCardTextTop.style.backgroundColor = bgColor;
    $divCardTextBottom.style.backgroundColor = bgColor;
});

$buttonNoContour.addEventListener("click", () => {
    $divCardTextTop.style.textShadow = "none";
    $divCardTextBottom.style.textShadow = "none";
});

$buttonLightContour.addEventListener("click", () => {
    $divCardTextTop.style.textShadow = "2px 2px 4px white"
    $divCardTextBottom.style.textShadow = "2px 2px 4px white"
    
});

$buttonDarkContour.addEventListener("click", () => {
    $divCardTextTop.style.textShadow = "2px 2px 4px black"
    $divCardTextBottom.style.textShadow = "2px 2px 4px black"
});

$inputSpacing.addEventListener("input", () => {
    $divCardTextTop.style.letterSpacing = `${$inputSpacing.value}px`
    $divCardTextBottom.style.letterSpacing = `${$inputSpacing.value}px`
});


$inputLineSpacing.addEventListener("input", () => {
    $divCardTextTop.style.lineHeight = `${$inputLineSpacing.value}`
    $divCardTextBottom.style.lineHeight = `${$inputLineSpacing.value}`
});
