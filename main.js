// ===== CURSOR GLOW =====
const glow = document.querySelector('.glow');
document.addEventListener('mousemove', e => {
    glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// ===== SCROLL ANIM =====
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if(e.isIntersecting){
            e.target.classList.add('visible');
        }
    });
}, {threshold:0.15});

document.querySelectorAll('section').forEach(s => obs.observe(s));

// ===== ACTIVE NAV =====
const navLinks = document.querySelectorAll('.topbar-nav a');
navLinks.forEach(link => {
    if(link.href === location.href){
        link.classList.add('active');
    }
});

// ===== HERO ANIM =====
document.addEventListener('DOMContentLoaded', () => {
    const intro = document.querySelector('.intro');
    if(intro){
        intro.style.opacity = 0;
        intro.style.transform = 'translateY(20px)';
        setTimeout(() => {
            intro.style.transition = '1s';
            intro.style.opacity = 1;
            intro.style.transform = 'translateY(0)';
        }, 300);
    }
});
