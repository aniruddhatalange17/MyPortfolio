document.addEventListener('DOMContentLoaded', function() {
    fetch('./utilities/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        });
});