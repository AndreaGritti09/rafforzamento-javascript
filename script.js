function saluta() {
    let contenuto = document.getElementById("nome").value;
    let scelta = document.getElementById("genere").value;
 
        if (contenuto == "") {
            document.getElementById("nome").style.border = "2px solid red";} 
        else if (scelta == "uomo") {
            document.getElementById("nome").style.border = "2px solid blue";}
        else if (scelta == "donna") {
            document.getElementById("nome").style.border = "2px solid pink";}

        if (scelta == "uomo") {
            document.getElementById("messaggio").innerHTML = "Benvenuto " + contenuto + "!";
        } else {
            document.getElementById("messaggio").innerHTML = "Benvenuta " + contenuto + "!";
        }
    }

function confrontaNumeri() {
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;

    if (Number(num1) > Number(num2)) {
        document.getElementById("quadrato1").style.backgroundColor = "lightgreen";
        document.getElementById("quadrato2").style.backgroundColor = "lightgrey";
    } else if (Number(num2) > Number(num1)) {
        document.getElementById("quadrato1").style.backgroundColor = "lightgrey";
        document.getElementById("quadrato2").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("quadrato1").style.backgroundColor = "yellow";
        document.getElementById("quadrato2").style.backgroundColor = "yellow";
    }
}