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

    if(imc<18.5){
        document.getElementById("diagnostico").style.color="blue"
        document.getElementById("diagnostico").innerHTML=("Abaixo do peso")
        document.getElementById("diagnostico").style.backgroundColor="lightblue"
        document.getElementById("diagnostico").style.border="lightblue"
        document.getElementById("diagnostico").style.boxShadow="blue 3px 3px 1px 2px"
    }

    if(imc>=18.5 && imc<25){
        document.getElementById("diagnostico").style.color="green"
        document.getElementById("diagnostico").innerHTML=("Peso normal")
        document.getElementById("diagnostico").style.backgroundColor="lightgreen"
        document.getElementById("diagnostico").style.border="lightgreen"
        document.getElementById("diagnostico").style.boxShadow="green 3px 3px 1px 2px"

    }

    if(imc>=25 && imc<30){
        document.getElementById("diagnostico").style.color="red"
        document.getElementById("diagnostico").innerHTML=("Excesso de peso")
        document.getElementById("diagnostico").style.backgroundColor="pink"
        document.getElementById("diagnostico").style.border="pink"
        document.getElementById("diagnostico").style.boxShadow="red 3px 3px 1px 2px"
    }

    if(imc>=30 && imc<35){
        document.getElementById("diagnostico").style.color="darkred"
        document.getElementById("diagnostico").innerHTML=("Obesidade classe I")
        document.getElementById("diagnostico").style.backgroundColor="pink"
        document.getElementById("diagnostico").style.border="pink"
        document.getElementById("diagnostico").style.boxShadow="darkred 3px 3px 1px 2px"
    }
    
    if(imc>=35 && imc<40){
        document.getElementById("diagnostico").style.color="#814d00"
        document.getElementById("diagnostico").innerHTML=("Obesidade classe II")
        document.getElementById("diagnostico").style.backgroundColor="#552e00"
        document.getElementById("diagnostico").style.border="#552e00"
        document.getElementById("diagnostico").style.boxShadow="#814d00 3px 3px 1px 2px"
    }

    if(imc>=40){
        document.getElementById("diagnostico").style.color="black"
        document.getElementById("diagnostico").innerHTML=("Obesidade classe III")
        document.getElementById("diagnostico").style.backgroundColor="grey"
        document.getElementById("diagnostico").style.border="grey"
        document.getElementById("diagnostico").style.boxShadow="black 3px 3px 1px 2px"
    }
}

//caluladora IMC