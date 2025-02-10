const messages = [
    "Are you sure about that?",
    "Hmm, let's double-check that answer...",
    "You might want to reconsider...",
    "Wait, are you absolutely certain?",
    "Interesting choice... but let's think again.",
    "I mean, it's your call... but are you sure?",
    "You're really going with that answer?",
    "Okay, but what if I said 'please'?",
    "I respect your choice... but I’m not giving up.",
    "You’re really testing my persistence here.",
    "I’m just saying, 'yes' is a great option.",
    "You know, 'yes' has a nice ring to it.",
    "I’m not above begging... just saying.",
    "I’ll stop asking... eventually.",
    "You’re making this harder than it needs to be.",
    "I’m starting to think you enjoy saying 'no.'",
    "Okay, but what if I bribed you with coffee? ☕",
    "I’m not saying you’re wrong... but you’re wrong.",
    "You’re really committed to this 'no' thing, huh?",
    "Alright, but imagine how happy 'yes' would make me.",
    "I’m just here to remind you that 'yes' is still an option.",
    "You’re really going to make me work for this, aren’t you?",
    "I’m starting to think you’re just messing with me.",
    "I mean, 'no' is a valid answer... but so is 'yes.'",
    "You’re really testing my patience... and my charm.",
    "I’m not giving up, just so you know.",
    "You’re making me question my entire approach here.",
    "Okay, but what if I asked really nicely?",
    "I’m just saying, 'yes' would make this a lot easier.",
    "You’re really committed to this bit, huh?"
];

let messageIndex = 0;

// Floating hearts animation
function createHearts() {
    const container = document.body;
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(heart);
    }
}

// Original message cycling functionality with animation enhancements
function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const progress = document.querySelector('.progress');
    const maxWidth = 300; // Max width of the progress bar

    // Message cycling
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Yes button growth with smooth transition
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    // Progress bar update
    const progressWidth = parseFloat(window.getComputedStyle(progress).width);
    progress.style.width = `${progressWidth + (maxWidth / messages.length)}px`;

    // Add shake animation to No button
    noButton.style.animation = 'shake 0.5s';
    setTimeout(() => {
        noButton.style.animation = '';
    }, 500);
}

// Updated yes click handler with confetti and redirect
function handleYesClick() {
    // Play confetti sound
    const confettiSound = document.getElementById('confetti-sound');
    confettiSound.play();

    // Confetti animation
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Play redirect sound after a short delay
    setTimeout(() => {
        const redirectSound = document.getElementById('redirect-sound');
        redirectSound.play();
    }, 800); // Play redirect sound 0.8 seconds after confetti

    // Redirect after a short delay to show confetti and play sound
    setTimeout(() => {
        window.location.href = "yes_page.html";
    }, 1500); // 1.5-second delay
}

// Initialize floating hearts when page loads
document.addEventListener('DOMContentLoaded', createHearts);