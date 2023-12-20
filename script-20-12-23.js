var alturaValue;
var pesoValue;
var imc;

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 25) {
        return "Peso normal";
    } else if (imc < 30) {
        return "Sobrepeso";
    } else if (imc < 35) {
        return "Obesidade grau 1";
    } else if (imc < 40) {
        return "Obesidade grau 2";
    } else {
        return "Obesidade grau 3";
    }
}


document.getElementById("enviar").addEventListener("click", function(){
    alturaValue  = parseFloat(document.getElementById("peso").value);
    pesoValue = parseFloat(document.getElementById("altura").value);
    imc = alturaValue/(pesoValue^2);
    document.getElementById("imc_calculo").innerHTML = "O valor do IMC é: " + imc.toFixed(2);
    document.getElementById("imc_message").innerHTML = classificarIMC(imc);
});