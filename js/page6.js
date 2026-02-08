const area = document.getElementById("animation-area");
const messageBox = document.getElementById("message");

function showEffect(type) {
area.innerHTML = "";
messageBox.innerText = "";

const effects = {
    rose: {
        emoji: "🌹",
        message: "A rose for the most beautiful girl in my life.",
    },
    propose: {
        emoji: "💍",
        message: "Will you always stay with me, Shreya?",
    },
    chocolate: {
        emoji: "🍫",
        message: "You make my life sweeter than chocolates.",
    },
    teddy: {
        emoji: "🧸",
        message: "Whenever you feel alone, imagine this teddy is my hug.",
    },
    promise: {
        emoji: "🤝",
        message: "I promise to always stand by your side.",
    },
    hug: {
        emoji: "🤗",
        message: "A warm hug for you, anytime you need it.",
    },
    kiss: {
        emoji: "💋",
        message: "Sending you endless flying kisses!",
    },
    love: {
        emoji: "❤️",
        message: "Happy Valentine's Day, my Shreya. I love you endlessly.",
    },
};

const current = effects[type];
if (!current) return;

messageBox.innerText = current.message;

const rect = area.getBoundingClientRect();
const maxLeft = Math.max(0, rect.width - 30);

// Create floating emojis
for (let i = 0; i < 24; i++) {
    const el = document.createElement("div");
    el.classList.add("effect");
    el.innerText = current.emoji;

    const size = 22 + Math.random() * 18;
    const left = Math.floor(Math.random() * maxLeft);
    const duration = 2.4 + Math.random() * 2.2;
    const delay = Math.random() * 0.6;

    el.style.left = `${left}px`;
    el.style.bottom = "0px";
    el.style.animationDuration = `${duration}s`;
    el.style.animationDelay = `${delay}s`;
    el.style.setProperty("--size", `${size}px`);
    el.style.setProperty("--dur", `${duration}s`);

    area.appendChild(el);
}
}
