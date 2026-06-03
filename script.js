function pretrazi() {
    let pojam = document.getElementById("pojam").value;
    fetch("https://itunes.apple.com/search?term=" + pojam + "&entity=song&limit=20")
    .then(function(r) {
        return r.json();
    })

    .then(function(podaci) {
        let rezultat = document.getElementById("rezultati");
        rezultat.innerHTML = "";
        podaci.results.forEach(function(pjesma) {
            let audio = "";
            if (pjesma.previewUrl) {
                audio = "<audio controls>" + "<source src='" + pjesma.previewUrl + "' type='audio/mpeg'>" + "</audio>";
            }
            rezultat.innerHTML +=
            "<div class='kartica'>" + "<img src='" + pjesma.artworkUrl100 + "'>" +
            "<div>" + "<h3>" + pjesma.trackName + "</h3>" +
            "<p>Izvođač: " + pjesma.artistName + "</p>" + "<p>Album: " + pjesma.collectionName + "</p>" +
            audio + "</div>" +
            "</div>";
        });
    });
}
