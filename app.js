//*Coordenadas
var x = 0;
var y = 0;
var x_2 = 0;
var y_2 = 0;

//*Players
const cuadradito = document.getElementById("cuadrado");
const cuadradito_2 = document.getElementById("cuadrado_2");

//*Modo oscuro
const background = document.body;
let button_change_theme = document.getElementById("button");
let button_change_theme_2 = document.getElementById("button-2");
var clic_2;

button_change_theme.addEventListener("click", change_ball);
button_change_theme.style.transition = ".25s";
button_change_theme_2.style.transition = ".25s";
background.style.transition = ".25s";

function change_ball() {
    if (clic == 1) {
        button_change_theme_2.style.transform = "translateX(2.4vw)";
        button_change_theme.style.backgroundColor = "rgb(255, 255, 255)";
        button_change_theme_2.style.backgroundColor = "rgb(38, 35, 53)";
        background.style.backgroundColor = "rgb(38, 35, 53)";
        clic = clic + 1;

    } else {
        button_change_theme_2.style.transform = "translateX(0vw)";
        button_change_theme.style.backgroundColor = "rgb(38, 35, 53)";
        button_change_theme_2.style.backgroundColor = "rgb(255, 255, 255)";
        background.style.backgroundColor = "rgb(255, 255, 255)";
        clic = 1;
    }
}

//*opciones (player 1)
const opciones = document.getElementById("opciones");
const nameXD1 = document.getElementById("name");
const name_color1 = document.getElementById("name-color");
const bg_color1 = document.getElementById("background-color");
const bg_img1 = document.getElementById("background-image");

//*PLayer 1 (opciones)
nameXD1.addEventListener("click", player_1_name);
name_color1.addEventListener("click", change_letter_color);
bg_color1.addEventListener("click", change_color);
bg_img1.addEventListener("click", change_bg_img);

var clic = 1;
cuadradito.addEventListener("click", divLogin);

function divLogin() {
    if (clic == 1) {
        document.getElementById("opciones").style.transform = "translateY(0vh)";
        clic = clic + 1;

    } else {
        document.getElementById("opciones").style.transform = "translateY(-60vh)";
        clic = 1;
    }
}

//*Player 1 (Nombre)
function player_1_name() {
    let player_1 = prompt("First player name");
    document.getElementById("player_1").textContent = player_1;

    if (player_1 == null || player_1 == "") {
        document.getElementById("player_1").textContent = "Player 1";
    }
}

//*Player 1 (Color)
function change_color() {
    cuadradito.style.backgroundColor = prompt("select background color");
}

//*Player 1 (bg-img)
function change_bg_img() {
    var img = prompt("Enter an URL");
    cuadradito.style.backgroundImage = "url('"+img+"')";
}

//*Player 1 (letter color)
function change_letter_color() {
    var letter_color = prompt("Choose a color for your nickname");
    document.getElementById("player_1").style.color = letter_color;
}

//*PLayer 2 opciones

//*opciones (player 1)
const opciones_2 = document.getElementById("opciones_2");
const nameXD2 = document.getElementById("name_2");
const name_color2 = document.getElementById("name-color_2");
const bg_color2 = document.getElementById("background-color_2");
const bg_img2 = document.getElementById("background-image_2");

nameXD2.addEventListener("click", player_2_name);
name_color2.addEventListener("click", change_letter_color_2);
bg_color2.addEventListener("click", change_color_2);
bg_img2.addEventListener("click", change_bg_img_2);

var clic = 1;
cuadradito_2.addEventListener("click", divLogin_2);

function divLogin_2() {
    if (clic == 1) {
        document.getElementById("opciones_2").style.transform = "translateY(0vh)";
        clic = clic + 1;

    } else {
        document.getElementById("opciones_2").style.transform = "translateY(-60vh)";
        clic = 1;
    }
}

//*Player 2 (Nombre)
function player_2_name() {
    let player_2 = prompt("First player name");
    document.getElementById("player_2").textContent = player_2;
    
    if (player_2 == null || player_2 == "") {
        document.getElementById("player_2").textContent = "Player 2";
    }
}

//*Player 2 (Color)
const cuadradito_2_color = document.getElementById("cuadrado_2");

function change_color_2() {
    cuadradito_2_color.style.backgroundColor = prompt("select a background color");
}

//*Player 2 (bg-img)
function change_bg_img_2() {
    var img_2 = prompt("Enter an URL");
    cuadradito_2.style.backgroundImage = "url('"+img_2+"')";
}

//*Player 2 (letter color)
function change_letter_color_2() {
    var letter_color_2 = prompt("Choose a color for your nickname");
    document.getElementById("player_2").style.color = letter_color_2;
}

//*Movimientos
function movimiento(event){

    //*Player 1 (Movimiento)
    cuadradito.style.transitionDuration = ".25s";

    if(event.keyCode == "68"){//derecha
        x= x + 50;
        cuadradito.style.left = x + "px";
    }

    if(event.keyCode == "65"){//Izquierda
        x= x - 50;
        cuadradito.style.left = x +"px";	
    }

    if(event.keyCode == "87"){//arriba
        y = y + 50;                               
        cuadradito.style.top = (-y) + "px";
    }

    if(event.keyCode == "83"){//abajo
        y = y - 50;                            
        cuadradito.style.top = (-y) + "px";
    }

    //*Player 2 (Movimiento)
    cuadradito_2.style.transitionDuration = ".25s";

    if(event.keyCode == "39"){//derecha
        x_2= x_2 + 50;
        cuadradito_2.style.left = x_2 + "px";
    }

    if(event.keyCode == "37"){//Izquierda
        x_2= x_2 - 50;
        cuadradito_2.style.left = x_2 +"px";	
    }

    if(event.keyCode == "38"){//arriba
        y_2 = y_2 + 50;                               
        cuadradito_2.style.top = (-y_2) + "px";
    }

    if(event.keyCode == "40"){//abajo
        y_2 = y_2 - 50;                            
        cuadradito_2.style.top = (-y_2) + "px";
    }
}

window.onkeyup = movimiento;