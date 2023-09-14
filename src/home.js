import './styles/homeStyle.css'

const container = document.querySelector(`.container`);


container.addEventListener(`mousemove`, (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const ASCIIeye = document.querySelector(`.eye-container`);
    const rekt = ASCIIeye.getBoundingClientRect();

    const eyeX = rekt.left + rekt.width / 2
    const eyeY = rekt.top + rekt.height / 2
    
    const angleDeg = angle(mouseX, mouseY, eyeX, eyeY)
    const eye = document.querySelector(`.eye`)
    eye.style.transform = `rotate(${90 + angleDeg}deg)`;
})

function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg

} 