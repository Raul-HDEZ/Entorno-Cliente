alert("Alerta desde Script");
console.log("Log de consola desde script");
//console.warn("Warning desde script");
//console.error("Error desde script");

function Enviar() {
    alert("Enviado ...");
if (document.getElementById("usr").value == "paco") {
    document.getElementById("inicio").innerHTML = "Logueado";
    document.getElementById("inicio").style.color = 'green';
    alert("bienvenido " + document.getElementById("usr").value);
} else{
    document.getElementById("inicio").innerHTML = "Datos erroneos";
    document.getElementById("inicio").style.color = 'red';
}

if (document.getElementById("robotsi").checked = true) {
    document.getElementById("rtexto").innerHTML = "No eres un robot";
    
} else {
    document.getElementById("rtexto").innerHTML = "Eres un robot";
}
    
    
}