document.querySelectorAll('.video-container').forEach(container => {
  const video = container.querySelector('.skill-video');
  const button = container.querySelector('.video-btn');

  // เริ่มต้นหยุด
  video.pause();

  // กดปุ่ม Play/Pause
  button.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      video.loop = true;
      button.style.display = "none"; // ซ่อนปุ่มเมื่อเล่น
    } else {
      video.pause();
      button.textContent = "▶";
      button.style.display = "block"; // แสดงปุ่มเมื่อหยุด
    }
  });

  // สำหรับคอม (mouse hover)
  container.addEventListener('mouseenter', () => {
    if (!video.paused) button.style.display = "block";
  });
  container.addEventListener('mouseleave', () => {
    if (!video.paused) button.style.display = "none";
  });

  // สำหรับมือถือ (แตะหน้าจอให้ปุ่มกลับมา)
  container.addEventListener('touchstart', () => {
    if (!video.paused) {
      button.style.display = 
        (button.style.display === "none") ? "block" : "none";
    }
  });
});
