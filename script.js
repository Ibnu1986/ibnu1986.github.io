const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.8;

    if (top < trigger) {
      sec.classList.add("show");
    }
  });
});

function openModal(img) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-img").src = img.src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function openDemo(link) {
  alert("Demo belum tersedia 😅");
}
