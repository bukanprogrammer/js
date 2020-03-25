// API Kawal Korona
fetch('https://api.kawalcorona.com/indonesia/')
    .then(res => res.json())
    .then((out) => {
        var result = out;
        document.querySelector('.positif').innerHTML = 'Positif: ' + result[0]['positif'];
        document.querySelector('.sembuh').innerHTML = 'Sembuh: ' + result[0]['sembuh'];
        document.querySelector('.meninggal').innerHTML = 'Meninggal: ' + result[0]['meninggal'];
    }).catch(err => console.error(err));