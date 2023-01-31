
// AFFICHER LE MESSAGE EN DESSOUS DES TEXTAREA

const textarea = document.querySelector(".field");

textarea.addEventListener("keyup", () => {

    document.querySelector("#title").innerHTML = textarea.value;
});




// AFFICHER LE STYLE DU TEXTE AVEC LE CSS

const styleCss = document.querySelector(".field2");

styleCss.addEventListener("keyup", () => {

    document.querySelector("#styleCss").innerText = styleCss.value;
});




// AFFICHER LE STYLE DU TEXTE AVEC LE JAVASCRIPT

const styleJs = document.querySelector(".field3");


styleJs.addEventListener("keyup", () => {

    document.querySelector("#styleJs").innerText = styleJs.value;
});


function run() {

    new Function(styleJs.value)();
}




// AFFICHER BALISE H1 DANS LE TEXTAREA DE "EDITOR HTML ET CSS"

const buttonB = document.querySelector(".button1");

function addTitle() {

    if(document.querySelector(".field4").innerHTML === ``) {
        return document.querySelector(".field4").innerHTML = `<h1></h1>`;

    } else(document.querySelector(".field4").innerHTML = ``);
};

buttonB.addEventListener("click", addTitle);





// AFFICHER LE MESSAGE EN DESSOUS DU TITRE "LIVE CODING" - AFFICHAGE DE L'ANIMATION DU LOADER - AFFICHER LA PROGRESSE BAR

const tallTextarea = document.querySelector(".field4");

const loader = document.querySelector("#loader").style.display = "none";
const progressBar = document.querySelector("#progress").style.display = "none";


tallTextarea.addEventListener("keyup", () => {

    document.querySelector("#title2").innerHTML = tallTextarea.value;

    if(tallTextarea.value === "") {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("#progress").style.display = "none";
       
    } else if(tallTextarea != tallTextarea.value) {
        document.querySelector("#loader").style.display = "block";
        document.querySelector("#progress").style.display = "block";
    };
   
});



// AFFICHER LA PROGRESSION DE LA BAR EN POURCENTAGE EN FONCTION DU NOMBRE DE CARACTERE DANS LA TEXTAREA

tallTextarea.addEventListener("keyup", () => {

    const numberCharacter = tallTextarea.value.length;

    if(numberCharacter <= 50) {
        
        document.querySelector("#progress").style.background = "#ff1515";
        document.querySelector("#progress").style.width = "10%";
        document.querySelector("#progress_bar").innerHTML = "10%";

    } else if(numberCharacter >= 50 && numberCharacter <= 100) {

        document.querySelector("#progress").style.background = "#ff7000";
        document.querySelector("#progress").style.width = "30%";
        document.querySelector("#progress_bar").innerHTML = "30%";

    } else if(numberCharacter >= 100 && numberCharacter <= 150) {

        document.querySelector("#progress").style.background = "#fff300";
        document.querySelector("#progress").style.width = "50%";
        document.querySelector("#progress_bar").innerHTML = "50%";

    } else if(numberCharacter >= 150 && numberCharacter <= 170) {

        document.querySelector("#progress").style.background = "#aeff02";
        document.querySelector("#progress").style.width = "70%";
        document.querySelector("#progress_bar").innerHTML = "70%";

    } else if(numberCharacter >= 170 && numberCharacter < 200) {

        document.querySelector("#progress").style.background = "#00e711";
        document.querySelector("#progress").style.width = "78%";
        document.querySelector("#progress_bar").innerHTML = "100%";

    } else if(numberCharacter === 200) {
        document.querySelector("#progress").style.background = "#00e711";
        document.querySelector("#progress_bar").innerHTML = "Vous avez atteint la limite de caractère dans ce champs"; 
    }
});




// METTRE EN PLACE LE LOCALSTORAGE POUR LES TEXTAREA

const message = document.querySelector(".field4");

message.addEventListener("keyup", () => {
    
    localStorage.setItem("prenom", message.value);
});

message.value = localStorage.getItem("prenom");








