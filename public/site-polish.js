(function () {
  const proofs = ['Verified platform reviews', 'Tracking-specific outcomes', 'Agency-ready handoff'];
  const clockNumbers = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const minuteNumbers = [60, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

  function enhanceReviews() {
    const reviews = document.querySelector('.reviews .container');
    if (!reviews || reviews.querySelector('.review-proof-strip')) return;
    const title = reviews.querySelector('.section-title');
    const strip = document.createElement('div');
    strip.className = 'review-proof-strip';
    strip.innerHTML = proofs.map((proof) => `<span class="proof-chip">${proof}</span>`).join('');
    title.insertAdjacentElement('afterend', strip);
  }

  function replaceFooterClock() {
    const scene = document.querySelector('.luxury-watch-scene');
    if (!scene || scene.classList.contains('wall-clock-scene')) return;
    scene.className = 'wall-clock-scene';
    scene.innerHTML = `
      <div class="wall-clock-frame">
        <div class="wall-clock-face">
          ${clockNumbers.map((number) => `<span class="clock-number n${number}">${number}</span>`).join('')}
          ${Array.from({ length: 60 }, (_, index) => `<span class="minute-tick ${index % 5 === 0 ? 'major' : ''}" style="--i:${index}"></span>`).join('')}
          ${minuteNumbers.map((number) => `<span class="minute-number m${number}">${number}</span>`).join('')}
          <span class="clock-hand minute"></span>
          <span class="clock-hand hour"></span>
          <span class="clock-center-dot"></span>
        </div>
        <div class="wall-clock-caption">
          <strong>Timing matters</strong>
          <small>Clean tracking before the next campaign push.</small>
        </div>
      </div>`;
  }

  function run() {
    enhanceReviews();
    replaceFooterClock();
  }

  document.addEventListener('DOMContentLoaded', run);
  window.addEventListener('load', run);
  setTimeout(run, 500);
  setTimeout(run, 1500);
})();