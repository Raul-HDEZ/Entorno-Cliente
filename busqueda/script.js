var volcanes = ["Cumbre Vieja", "Kilauea", "etna", "Krakatoa"];
var obj = new Object(),
    casa = "casa",
    coche = "coche";
  
function Buscar() {
    let indice = document.getElementsByTagName("input")[0].value;
    if (parseInt(indice) > 3) {
        document.getElementById("res").value = "Solo hay 4 volcanes";
    }else {
    let res = "El volcan activo \n solicitado se corresponde \n con el " + volcanes[indice];
    document.getElementById("res").value = res;}
}