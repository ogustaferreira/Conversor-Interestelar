function enviar() {

    var valorAnoLuz = document.getElementById("valorPassado").value
    var valorEmMetro = 9.461e15;
    var resultado = valorAnoLuz * valorEmMetro;

    alert(valorAnoLuz + " Anos-Luz equivale a " + resultado + " metros");

    document.getElementById("valorPassado").value = "";
}