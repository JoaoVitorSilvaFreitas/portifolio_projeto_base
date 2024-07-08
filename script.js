function abrirNav() {
    document.getElementById("sidebar").style.width = "250px";
    setTimeout(() => {
        document.addEventListener('click', clickFora);
    }, 0); // Adiciona um pequeno atraso para evitar o conflito de clique imediato
}

function fecharNav() {
    document.getElementById("sidebar").style.width = "0";
    document.removeEventListener('click', clickFora);
}

function clickFora(event) {
    var sidebar = document.getElementById("sidebar");
    if (!sidebar.contains(event.target) && sidebar.style.width === "250px") {
        fecharNav();
    }
}