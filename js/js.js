window.onload = () => {
    "use strict";
    if ("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

function calcularIMC(){
    var peso = parseFloat(document.getElementById("txtPeso").value,10);
    var altura = parseFloat(document.getElementById("txtAltura").value,10);
    var imc = peso/(altura*altura);

    document.getElementById("resultado").innerHTML="IMC:"+imc.toFixed(2);

    if(imc<=18){
        document.getElementById("diagnostico").style.color="blue"
        document.getElementById("diagnostico").innerHTML=("Abaixo do peso")
        document.getElementById("diagnostico").style.backgroundColor="lightblue"
        document.getElementById("diagnostico").style.border="lightblue"
        document.getElementById("diagnostico").style.boxShadow="blue 3px 3px 1px 2px"
    }

    if(imc>=18 && imc<25){
        document.getElementById("diagnostico").style.color="green"
        document.getElementById("diagnostico").innerHTML=("Na média")
        document.getElementById("diagnostico").style.backgroundColor="lightgreen"
        document.getElementById("diagnostico").style.border="lightgreen"
        document.getElementById("diagnostico").style.boxShadow="green 3px 3px 1px 2px"

    }

    if(imc>=24 && imc<30){
        document.getElementById("diagnostico").style.color="red"
        document.getElementById("diagnostico").innerHTML=("Acima do peso")
        document.getElementById("diagnostico").style.backgroundColor="pink"
        document.getElementById("diagnostico").style.border="pink"
        document.getElementById("diagnostico").style.boxShadow="red 3px 3px 1px 2px"
    }

    if(imc>=30){
        document.getElementById("diagnostico").style.color="darkred"
        document.getElementById("diagnostico").innerHTML=("Obesidade mórbida")
        document.getElementById("diagnostico").style.backgroundColor="pink"
        document.getElementById("diagnostico").style.border="pink"
        document.getElementById("diagnostico").style.boxShadow="darkred 3px 3px 1px 2px"
    }
}

//caluladora IMC