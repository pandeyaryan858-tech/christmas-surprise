const songs = [
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
];

const audio = document.getElementById("audio");

function playSong(index) {
  if (!audio) return;
  audio.src = songs[index];
  audio.play();
}

function showSurprise() {
  const surprise = document.getElementById("surprise");
  if (surprise) {
    surprise.style.display = "block";
  }
}