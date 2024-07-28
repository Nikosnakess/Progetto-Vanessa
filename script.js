// Imposta la data di fine del countdown
let countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 49);
countdownDate.setHours(countdownDate.getHours() + 7);
countdownDate.setMinutes(countdownDate.getMinutes() + 30);

// Aggiorna il countdown ogni secondo
let countdownFunction = setInterval(function() {
    // Ottieni la data e l'ora attuali
    let now = new Date().getTime();

    // Calcola la distanza tra ora e la data del countdown
    let distance = countdownDate - now;

    // Calcoli per giorni, ore, minuti e secondi
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Visualizza il risultato nell'elemento con id="countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // Se il countdown è terminato, mostra un messaggio
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);
