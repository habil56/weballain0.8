
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// สร้าง Particle ประกายเวทมนตร์เหมือนซากุระ
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height;
        this.radius = Math.random() * 3 + 2; // ขนาด
        this.speedY = Math.random() * 0.1 + 0.1; // ความเร็วตก
        this.speedX = Math.random() * 0.5 - 0.25; // การลอยซ้ายขวา
        this.color = `rgba(255, ${Math.floor(Math.random()*200+55)}, 255, 0.8)`; // สีม่วง-ชมพู
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;

        // ถ้าตกลงข้างล่างให้เกิดใหม่ด้านบน
        if(this.y > canvas.height) {
            this.y = -10;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowColor = '#1a1344';
        ctx.shadowBlur = 12; // ทำ glow
        ctx.fill();
    }
}

// สร้างอนุภาคหลายตัว
const particles = [];
for(let i = 0; i < 150; i++) {
    particles.push(new Particle());
}

// วาดและอัปเดตอนุภาค
function animate() {
    ctx.fillStyle = "rgba(49, 24, 95, 0.2)"; // สีม่วงพื้นหลังแบบ fade
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animate);
}

animate();

// ปรับ canvas เมื่อ resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


