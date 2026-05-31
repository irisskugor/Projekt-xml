function nasumicnaPjesma() {
    fetch("https://itunes.apple.com/search?term=music&entity=song&limit=50")
    .then(r => r.json())

    .then(podaci => {
        let broj = Math.floor(Math.random() * podaci.results.length);
        let pjesma = podaci.results[broj];
        document.getElementById("rezultat").innerHTML =
        "<div class='kartica'>" + "<img src='" + pjesma.artworkUrl100 + "'>" +
        "<div>" + "<h3>" + pjesma.trackName + "</h3>" +
        "<p>Izvođač: " + pjesma.artistName + "</p>" + "<p>Album: " + pjesma.collectionName + "</p>" +
        "<audio controls src='" + pjesma.previewUrl + "'></audio>" + "</div>" +
        "</div>";
    });
}
