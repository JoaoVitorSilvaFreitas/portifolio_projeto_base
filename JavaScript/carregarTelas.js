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

document.addEventListener("DOMContentLoaded", function() {
    loadHTML("header", "./HTML/header.html");
    loadHTML("aside", "./HTML/aside.html");
});