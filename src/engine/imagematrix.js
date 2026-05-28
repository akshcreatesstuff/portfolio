export function initImageMatrix(canvas, imageSrc) {
  const ctx = canvas.getContext("2d");
  let animationId;
  let mouse = { x: -999, y: -999 };

  const symbols = ["<>", "/", "{}", "[]", "#", "*", "=>", "&&"];

  const handleMouseMove = (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  };

  const handleMouseLeave = () => {
    mouse.x = -999;
    mouse.y = -999;
  };

  const dpr = window.devicePixelRatio || 1;
  const rectWidth = canvas.offsetWidth;
  const rectHeight = canvas.offsetHeight;

  canvas.width = rectWidth * dpr;
  canvas.height = rectHeight * dpr;
  canvas.style.width = rectWidth + "px";
  canvas.style.height = rectHeight + "px";
  ctx.scale(dpr, dpr);

  window.addEventListener("mousemove", handleMouseMove);
  canvas.addEventListener("mouseleave", handleMouseLeave);
  canvas.addEventListener("click", () => {
  pixels.forEach((p) => {
    const angle = Math.random() * Math.PI * 2;
    const force = Math.random() * 150 + 50;
    p.x = p.baseX + Math.cos(angle) * force;
    p.y = p.baseY + Math.sin(angle) * force;
  });
});

  const img = new Image();
  img.src = imageSrc;
  const pixels = [];

  img.onload = () => {
    const tempCanvas = document.createElement("canvas");
    const tctx = tempCanvas.getContext("2d");
    tempCanvas.width = img.naturalWidth;
    tempCanvas.height = img.naturalHeight;
    tctx.drawImage(img, 0, 0);

    const data = tctx.getImageData(0, 0, img.naturalWidth, img.naturalHeight).data;

    const gap = Math.max(12, Math.floor(img.naturalWidth / 80));

    const scale = Math.min(
      canvas.offsetWidth / img.naturalWidth,
      canvas.offsetHeight / img.naturalHeight
    ) * 0.8;

    const offsetX = (canvas.offsetWidth - img.naturalWidth * scale) / 2;
    const offsetY = (canvas.offsetHeight - img.naturalHeight * scale) / 2;

    for (let y = 0; y < img.naturalHeight; y += gap) {
      for (let x = 0; x < img.naturalWidth; x += gap) {
        const i = (y * img.naturalWidth + x) * 4;
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const brightness = (r + g + b) / 3;

        if (brightness < 75) {
          const baseX = x * scale + offsetX;
          const baseY = y * scale + offsetY;

          pixels.push({
            x: Math.random() * canvas.offsetWidth,   // start anywhere on canvas
            y: Math.random() * canvas.offsetHeight,
            baseX,
            baseY,
            char: symbols[Math.floor(Math.random() * symbols.length)],
            size: 4,
            delay: Math.floor(Math.random() * 80),   // staggered arrival
            opacity: 0,
          });
        }
      }
    }

    animate();
  };

  function animate() {
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

    pixels.forEach((p) => {
      // stagger delay — skip moving until delay counts down
      if (p.delay > 0) {
        p.delay--;
        return;
      }

      const dx = mouse.x - p.baseX;
      const dy = mouse.y - p.baseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const radius = 60;
      const force = Math.max(0, radius - dist) / radius;
      const angle = Math.atan2(p.baseY - mouse.y, p.baseX - mouse.x);
      const repelX = Math.sin(angle) * force * 50;
      const repelY = Math.cos(angle) * force * 50;

      const targetX = p.baseX + repelX;
      const targetY = p.baseY + repelY;

      // smooth lerp toward target
      p.x += (targetX - p.x) * 0.08;
      p.y += (targetY - p.y) * 0.08;

      // fade in as pixel approaches its base position
      const distToBase = Math.sqrt(
        (p.x - p.baseX) ** 2 + (p.y - p.baseY) ** 2
      );
      p.opacity = Math.min(1, p.opacity + 0.01);
      const flicker = 0.9 + Math.random() * 0.5;

      ctx.font = `${p.size}px monospace`;
      ctx.fillStyle = `rgba(0, 165, 250, ${p.opacity * flicker})`;
      ctx.fillText(p.char, p.x, p.y);
    });

    animationId = requestAnimationFrame(animate);
  }

  return () => {
    cancelAnimationFrame(animationId);
    window.removeEventListener("mousemove", handleMouseMove);
    canvas.removeEventListener("mouseleave", handleMouseLeave);
  };
}