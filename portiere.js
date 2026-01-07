function saluta() {
    let contenuto = document.getElementById("nome").value;
    let scelta = document.getElementById("genere").value;

    if (scelta == "uomo") {
        document.getElementById("messaggio").innerHTML = "Benvenuto " + contenuto + "!";
    } else {
        document.getElementById("messaggio").innerHTML = "Benvenuta " + contenuto + "!";
    }
}