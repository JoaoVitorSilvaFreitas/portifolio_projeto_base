// FUNÇÃO PARA ABRIR O SIDEBAR
function abrirNav() {
    document.getElementById("sidebar").classList.add("sidebar-open");
    document.body.classList.add("body-lock");
    setTimeout(() => {
        document.addEventListener('click', clickFora);
    }, 0);

    var sidebarLinks = document.querySelectorAll('#sidebar a');
    sidebarLinks.forEach(function(link) {
        link.addEventListener('click', fecharNav);
    });
}

function fecharNav() {
    document.getElementById("sidebar").classList.remove("sidebar-open");
    document.body.classList.remove("body-lock");
    document.removeEventListener('click', clickFora);

    var sidebarLinks = document.querySelectorAll('#sidebar a');
    sidebarLinks.forEach(function(link) {
        link.removeEventListener('click', fecharNav);
    });
}

function clickFora(event) {
    var sidebar = document.getElementById("sidebar");
    if (!sidebar.contains(event.target) && sidebar.classList.contains("sidebar-open")) {
        fecharNav();
    }
    
}