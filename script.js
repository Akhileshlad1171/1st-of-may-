function playSong(id) {
  let audio = document.getElementById(id);

  document.querySelectorAll("audio").forEach(a => {
    a.pause();
    a.currentTime = 0;
  });

  audio.volume = 0;
  audio.play();

  // fade in
  let vol = 0;
  let fade = setInterval(() => {
    if (vol < 1) {
      vol += 0.05;
      audio.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 200);
}
let current = 0;
let memories = document.querySelectorAll(".memory");

function showMemory(index) {
  memories.forEach(m => m.classList.remove("active"));
  memories[index].classList.add("active");
}

function nextMemory() {
  current = (current + 1) % memories.length;
  showMemory(current);
}

function prevMemory() {
  current = (current - 1 + memories.length) % memories.length;
  showMemory(current);
}

function startStory() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main").style.display = "block";
    memories = document.querySelectorAll(".memory"); // important
  showMemory(0); // show first memory
}
window.addEventListener("scroll", () => {
  document.querySelectorAll(".memory").forEach(el => {
    let pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
