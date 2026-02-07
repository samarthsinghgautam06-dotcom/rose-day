const config = {
  herName: "Sana Meri Kammo",
  myName: "Samarth Singh",
  dateText: "February 7, 2026",
};

const setText = (id, value) => {
  const el = document.getElementById(id);
  if (el && value) {
    el.textContent = value;
  }
};

setText("herName", config.herName);
setText("herNameInline", config.herName);
setText("myName", config.myName);
setText("myNameFooter", config.myName);
setText("dateText", config.dateText);

const envelope = document.getElementById("envelope");
if (envelope) {
  envelope.addEventListener("click", () => {
    envelope.classList.toggle("is-open");
  });
}

const secretButton = document.getElementById("secretButton");
const secretText = document.getElementById("secretText");
if (secretButton && secretText) {
  secretButton.addEventListener("click", () => {
    const isVisible = secretText.classList.toggle("is-visible");
    secretButton.textContent = isVisible ? "Hide message" : "Reveal message";
  });
}

const scrollButtons = document.querySelectorAll("[data-scroll]");
scrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const petalField = document.getElementById("petalField");
const petalCount = 26;
if (petalField) {
  for (let i = 0; i < petalCount; i += 1) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.animationDelay = `${Math.random() * 8}s`;
    petal.style.animationDuration = `${8 + Math.random() * 6}s`;
    petal.style.opacity = `${0.4 + Math.random() * 0.6}`;
    petalField.appendChild(petal);
  }
}

const loveField = document.getElementById("loveField");
const heartCount = 14;
if (loveField) {
  for (let i = 0; i < heartCount; i += 1) {
    const heart = document.createElement("span");
    heart.className = "heart-float";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDelay = `${Math.random() * 10}s`;
    heart.style.animationDuration = `${10 + Math.random() * 8}s`;
    heart.style.opacity = `${0.35 + Math.random() * 0.5}`;
    heart.style.setProperty("--scale", `${0.7 + Math.random() * 0.8}`);
    loveField.appendChild(heart);
  }
}

const wishButton = document.getElementById("wishButton");
const confettiColors = [
  "#ff5c8d",
  "#ff9db9",
  "#ffd6e2",
  "#fff2f7",
  "#b31237",
];

const launchConfetti = () => {
  const container = document.createElement("div");
  container.className = "confetti";
  document.body.appendChild(container);

  for (let i = 0; i < 40; i += 1) {
    const piece = document.createElement("div");
    piece.className = "confetti__piece";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background =
      confettiColors[Math.floor(Math.random() * confettiColors.length)];
    piece.style.animationDuration = `${3 + Math.random() * 2}s`;
    piece.style.transform = `translateY(-10px) rotate(${Math.random() * 360}deg)`;
    container.appendChild(piece);

    piece.addEventListener("animationend", () => {
      piece.remove();
    });
  }

  setTimeout(() => {
    container.remove();
  }, 4500);
};

if (wishButton) {
  wishButton.addEventListener("click", launchConfetti);
}
