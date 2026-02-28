(function () {
  const theme = {
    bg: '#050b14',
    surface: '#0f1a2b',
    cyan: '#22d3ee',
    emerald: '#34d399',
    border: '#334155',
    textSoft: '#cbd5e1',
    textMuted: '#94a3b8',
    grid: 'rgba(148,163,184,0.15)',
    amber: '#f59e0b',
    line: 'rgba(34,211,238,0.15)'
  };

  window.ThemePalette = theme;

  function initParticleBackground() {
    const canvas = document.getElementById('bgCanvas');
    if (!canvas || canvas.dataset.themeInit === '1') return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.dataset.themeInit = '1';

    const particleCount = Number(canvas.dataset.particleCount || 120);
    const particleSize = Number(canvas.dataset.particleSize || 2.8);
    const particleSpeed = Number(canvas.dataset.particleSpeed || 1);
    const linkDistance = Number(canvas.dataset.linkDistance || 120);

    let particles = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function resetParticles() {
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * particleSpeed,
        vy: (Math.random() - 0.5) * particleSpeed
      }));
    }

    function draw() {
      ctx.fillStyle = theme.bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.fillStyle = theme.emerald;
        ctx.beginPath();
        ctx.arc(p.x, p.y, particleSize, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particleCount; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < linkDistance) {
            ctx.strokeStyle = theme.line;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    }

    resize();
    resetParticles();
    draw();

    window.addEventListener('resize', () => {
      resize();
      resetParticles();
    });
  }

  window.initParticleBackground = initParticleBackground;

  document.addEventListener('DOMContentLoaded', () => {
    initParticleBackground();
  });
})();
