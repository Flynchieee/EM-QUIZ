const startBtn = document.getElementById("startBtn");
const loadingContainer = document.getElementById("loadingContainer");

startBtn.addEventListener("click", function () {
  loadingContainer.classList.add("active");

  setTimeout(() => {
    console.log("Programming Quiz Demo - Ready to Code!");
    alert(
      "Welcome to Programming Quiz!\\n\\nFront page loaded with:\\n• Coder animations\\n• Loading effects\\n• Sound FX\\n• Programming theme\\n\\nSimple button demo complete!",
    );

    loadingContainer.classList.remove("active");
  }, 3000);
});

// Sound effect on click
function playClickSound() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.frequency.value = 800;
  oscillator.type = "sine";

  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(
    0.01,
    audioContext.currentTime + 0.1,
  );

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.1);
}

startBtn.addEventListener("click", playClickSound);

document.addEventListener("visibilitychange", function () {
  const pixelCharacter = document.querySelector(".pixel-character");
  if (document.hidden) {
    pixelCharacter.style.animationPlayState = "paused";
  } else {
    pixelCharacter.style.animationPlayState = "running";
  }
});

document.documentElement.style.scrollBehavior = "smooth";

console.log("Programming Quiz Landing Loaded!");
