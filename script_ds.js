function abrirModal(id) {
    document.getElementById(id).style.display = "block";
    document.getElementById("footer").style.display = "none"; // Esconde o footer
}

function fecharModal(id) {
    document.getElementById(id).style.display = "none";
    document.getElementById("footer").style.display = "block"; // Mostra o footer novamente
}
