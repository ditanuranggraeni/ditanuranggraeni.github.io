document.addEventListener("DOMContentLoaded", function() {
    const birthday = new Date('2006-01-28T00:01:00');
    const today = new Date();

    const years = today.getFullYear() - birthday.getFullYear();
    const months = today.getMonth() - birthday.getMonth();
    const days = today.getDate() - birthday.getDate();

    let ageInYears = years;
    let ageInMonths = months;
    let ageInDays = days;

    if (ageInDays < 0) {
        ageInMonths--;
        ageInDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageInMonths < 0) {
        ageInYears--;
        ageInMonths += 12;
    }

    const daysLived = Math.floor((today - birthday) / (1000 * 60 * 60 * 24));

    document.getElementById('age').textContent = `${ageInYears} Years, ${ageInMonths} Months, ${ageInDays} Days (${daysLived} days)`;

    const nextBirthday = new Date(birthday);
    nextBirthday.setFullYear(today.getFullYear());
    if (today > nextBirthday) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const birthdayMessages = [
        `🎉 Happy ${ageInYears}th Birthday 🎂`,
        `🎉 Wishing you a fantastic ${ageInYears}th Birthday! 🎂`,
        `🎂 Cheers to another amazing year ahead! Happy ${ageInYears}th Birthday! 🎉`,
        `🎉 Congratulations on completing another amazing year! Happy ${ageInYears}th Birthday! 🎂`,
        `🎂 Enjoy your ${ageInYears}th Birthday to the fullest! 🎉`
    ];

    const greetingMessages = [
        "Hello Ndut, Today is your special day! May all your dreams come true, may good health always be with you, and may happiness never leave you.",
        "Happy Birthday Ndut! Wishing you success, health, and endless happiness today and always.",
        "Cheers to you, Ndut! May your birthday be filled with love, laughter, and everything that makes you happy.",
        "It's your day, Ndut! May the year ahead bring all the joy and achievements you deserve.",
        "Happy Birthday, Ndut! Wishing you a year filled with adventure, success, and good health!"
    ];

    function getRandomBirthdayMessage() {
        return birthdayMessages[Math.floor(Math.random() * birthdayMessages.length)];
    }

    function getRandomGreetingMessage() {
        return greetingMessages[Math.floor(Math.random() * greetingMessages.length)];
    }

    function updateCountdown() {
        const now = new Date();
        const timeDifference = nextBirthday - now;

        const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('countdown').textContent = `${daysLeft} Days ${hoursLeft} Hours ${minutesLeft} Minutes ${secondsLeft} Seconds`;

        if (now.getDate() === birthday.getDate() && now.getMonth() === birthday.getMonth()) {
            document.getElementById('birthday-title').textContent = '🥳 🎉🎊';
            document.getElementById('birthday-message').textContent = 'It\'s your special day! Let the celebrations begin! 🎉🎂';
        } else {
            document.getElementById('birthday-title').textContent = 'Dita nur anggraeni';
            document.getElementById('birthday-message').textContent = 'Have a great day!';
        }
    }

    setInterval(updateCountdown, 1000);
    const isBirthday = today.getDate() === birthday.getDate() && today.getMonth() === birthday.getMonth();
    const confettiContainer = document.querySelector('.confetti');
    const birthdayEmojis = isBirthday ? ['🥳', '🎉', '🎊'] : ['❤️', '💖', '💕'];

    for (let i = 0; i < 50; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        const randomEmoji = birthdayEmojis[Math.floor(Math.random() * birthdayEmojis.length)];
        confettiPiece.textContent = randomEmoji;

        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.animationDuration = `${Math.random() * 4 + 4}s`;
        confettiPiece.style.animationDelay = `${Math.random() * 5}s`;

        confettiContainer.appendChild(confettiPiece);
    }
    const audio = document.getElementById('hbdbacksound');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    const hiddenGif = document.getElementById('hiddenGif');

    playButton.addEventListener('click', () => {
      audio.play();
      hiddenGif.style.display = 'flex';
    });
    pauseButton.addEventListener('click', () => {
      audio.pause();
      hiddenGif.style.display = 'none';
    });
});
      
