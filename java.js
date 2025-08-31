document.addEventListener("click", function(e) {
  // คลื่นวงทอง
  const wave = document.createElement("span");
  wave.classList.add("gold-wave");

  // เส้นวงรอบ
  const ring = document.createElement("span");
  ring.classList.add("gold-ring");

  // กำหนดตำแหน่ง
  wave.style.left = ring.style.left = `${e.clientX}px`;
  wave.style.top  = ring.style.top  = `${e.clientY}px`;

  document.body.appendChild(wave);
  document.body.appendChild(ring);

  // ลบหลังอนิเมชัน
  setTimeout(() => {
    wave.remove();
    ring.remove();
  }, 700);
});
