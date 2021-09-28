function Enviar(params) {
    let opa = parseInt(document.getElementById("opa").value);
    let opb = parseInt(document.getElementById("opb").value);
    let res = opa + opb;
    document.getElementById("res").value = res;
    alert("la suma de "+ opa + " + " + opb + " = " + res);
}   