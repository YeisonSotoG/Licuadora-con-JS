let estadoBlender = "Apagado";
let estadoTitulo = document.getElementById("blender-titulo");
let licuadora = document.getElementById('blender');
let sonidoLicuadora = document.getElementById('blender-sound');
let sonidoBoton = document.getElementById('blender-button-sound');

function gestionarLicuadora(){
    if(estadoBlender == "Apagado"){
        estadoBlender = "Encendedida";
        estadoTitulo.innerText = "Encendida";
        estadoTitulo.classList.add("active");
        gestionarSonido();
        licuadora.classList.add("active")
        
    }else{
        estadoBlender = "Apagado";
        estadoTitulo.innerText = "Apagada";
        estadoTitulo.classList.remove("active");
        gestionarSonido();
        licuadora.classList.remove("active");
        
    }
}

function gestionarSonido(){
    if(sonidoLicuadora.paused){
        sonidoBoton.play();
        sonidoLicuadora.play();
    } else {
        sonidoBoton.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}