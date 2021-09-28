var tuauto = {
    marca:"Seat",
    modelo:"Leon",
    año:2010,
    propietario:"Albert",
    apellidos:"Einstein",
    telefono:"600123456"
} 
var str = "Los datos disponibles del objeto son: \n " + tuauto.marca +" "+ tuauto.modelo +" "+tuauto.año + " \n " + tuauto.propietario + " " + tuauto.apellidos + " " + tuauto.telefono;
window.onload = Cargar;
function Cargar() {
    document.getElementById("output").value = str;
}

function Mostar() {
    document.getElementsByTagName("input")[0].value = tuauto.marca;
    document.getElementsByTagName("input")[1].value = tuauto.modelo;
    document.getElementsByTagName("input")[2].value = tuauto.año;
    document.getElementsByTagName("input")[3].value = tuauto.propietario;
    document.getElementsByTagName("input")[4].value = tuauto.apellidos;
    document.getElementsByTagName("input")[5].value = tuauto.telefono;
}