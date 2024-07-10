function loadHTML(element, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.querySelector(element).innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching the HTML:', error);
        });
}

// VERIFICA SE O CONTEUDO MAIN ESTÁ CARREGADO NA TELA QUANDO SE CLICA
function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const mainContainer = document.querySelector('#conteudo_main');
            if (mainContainer) {
                console.log('Elemento encontrado:', mainContainer);
                mainContainer.innerHTML = data;
            } else {
                console.error('Elemento #conteudo_main não encontrado');
            }
        })
        .catch(error => console.error('Erro ao carregar o conteúdo:', error));
}   

document.addEventListener("DOMContentLoaded", function() {
    loadHTML("header", "./HTML/header.html");
    loadHTML("aside", "./HTML/aside.html");
    loadHTML("main","../HTML/conteudoPrincipal.html")
});

