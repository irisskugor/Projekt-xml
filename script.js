function pretrazi() {
    let pojam = document.getElementById("pojam").value;
    fetch("https://itunes.apple.com/search?term=" + pojam + "&entity=song")

    .then(r => r.json())
    .then(podaci => {
        let rezultat = document.getElementById("rezultati");
        rezultat.innerHTML = "";
        podaci.results.forEach(pjesma => {
            rezultat.innerHTML += "<div class='kartica'>" +  "<img src='" + pjesma.artworkUrl100 + "'>" +
            "<div>" +  "<h3>" + pjesma.trackName + "</h3>" +
            "<p>Izvođač: " + pjesma.artistName + "</p>" + "<p>Album: " + pjesma.collectionName + "</p>" +
            "<audio controls src='" + pjesma.previewUrl + "'></audio>" + "</div>" +
            "</div>";

        });

    });
}
