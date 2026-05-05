function playSong(id) {
  let audio = document.getElementById(id);

  // Pause all other songs
  let allAudio = document.querySelectorAll("audio");
  allAudio.forEach(a => {
    a.pause();
    a.currentTime = 0;
  });

  // Play selected one
  audio.play();
}