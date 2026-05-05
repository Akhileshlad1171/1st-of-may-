function playSong(id) {
  let audio = document.getElementById(id);

  // stop all others
  document.querySelectorAll("audio").forEach(a => {
    a.pause();
    a.currentTime = 0;
  });

  audio.play();
}

// scroll animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".memory").forEach(el => {
    let pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
