// Funktion for at indlæse indholdet af en given URL asynkront
function loadContent(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                callback(xhr.responseText);
            } else {
                console.error('An error occurred while loading the content.');
            }
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
}

// Funktion for at opdatere det dynamiske indhold
function updateDynamicContent() {
    loadContent('indhold.html', function(response) {
        document.getElementById('dynamic-content').innerHTML = response;
    });
}

// Kald funktionen for at indlæse det dynamiske indhold ved indlæsning af siden
window.onload = function() {
    updateDynamicContent();
};

// Funktion for at afspille/pause musikken
function toggleMusic() {
    var music = document.getElementById("music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}



