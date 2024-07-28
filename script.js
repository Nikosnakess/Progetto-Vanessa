<script>
    // Imposta la data di fine countdown solo la prima volta
    if (!localStorage.getItem('countdownEndDate')) {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 49);
        targetDate.setHours(targetDate.getHours() + 7);
        targetDate.setMinutes(targetDate.getMinutes() + 30);
        localStorage.setItem('countdownEndDate', targetDate);
    }

    function calculateTimeRemaining() {
        const targetDate = new Date(localStorage.getItem('countdownEndDate'));
        const now = new Date();
        const timeDifference = targetDate - now;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }

    function updateCountdown() {
        const countdownElement = document.getElementById("countdown");
        const { days, hours, minutes, seconds } = calculateTimeRemaining();

        countdownElement.textContent = `${days} giorni, ${hours} ore, ${minutes} minuti, ${seconds} secondi`;

        setTimeout(updateCountdown, 1000);
    }

    updateCountdown();
</script>
