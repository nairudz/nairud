// Instant Interactive Activity Presentation Switcher
function switchActivity(activityId, element) {
  // Hide all active activity display frames
  const contents = document.querySelectorAll('.project-content');
  contents.forEach(item => {
    item.classList.remove('active');
  });

  // Remove highlight active state from menu buttons
  const buttons = document.querySelectorAll('.activity-btn');
  buttons.forEach(btn => {
    btn.classList.remove('active');
  });

  // Display targeted product presentation directly inside screen
  const targetContent = document.getElementById(activityId);
  if (targetContent) {
    targetContent.classList.add('active');

    // Force refresh iframe inside tab so GitHub Pages renders it cleanly
    const iframe = targetContent.querySelector('iframe');
    if (iframe && iframe.src) {
      iframe.src = iframe.src;
    }
  }

  // Set active state on clicked option
  if (element) {
    element.classList.add('active');
  }
}

// Background Starfield Animation Generator
const canvas = document.getElementById('starfield');
if (canvas) {
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const stars = [];
  const starCount = 120;

  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      alpha: Math.random(),
      speed: 0.01 + Math.random() * 0.02
    });
  }

  function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    stars.forEach(star => {
      star.alpha += star.speed;
      if (star.alpha > 1 || star.alpha < 0) {
        star.speed = -star.speed;
      }
      
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(star.alpha)})`;
      ctx.fillRect(star.x, star.y, star.size, star.size);
    });
    
    requestAnimationFrame(animateStars);
  }

  animateStars();
}