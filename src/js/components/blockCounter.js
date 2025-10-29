export default (end = 100, duration = 2000, delay = 0) => ({
  count: 0,
  startValue: 0,
  endValue: end,
  animationFrameId: null,
  startTime: null,

  init() {
    this.startValue = Number(this.$el.textContent) || 0;
    this.count = this.startValue;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Добавляем задержку перед стартом анимации
          setTimeout(() => {
            this.startAnimation();
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(this.$el);
  },

  startAnimation() {
    const animate = (timestamp) => {
      if (!this.startTime) this.startTime = timestamp;
      const progress = timestamp - this.startTime;

      const current =
        this.startValue +
        (this.endValue - this.startValue) * (progress / duration);

      if (progress < duration) {
        this.count = Math.min(Math.ceil(current), this.endValue);
        this.animationFrameId = requestAnimationFrame(animate);
      } else {
        this.count = this.endValue;
      }
    };

    this.animationFrameId = requestAnimationFrame(animate);
  },

  destroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  },
});

//<section class="stats" id="about">
// <div class="container stats__container" x-data="fadeIn">
// <div class="stats__item" x-data="blockCounter(900, 1500)">
// <span class="stats__number" x-text="'> ' + count"></span>
//<p class="stats__text">реализованных проектов</p>
//</div>
//<div class="stats__item" x-data="blockCounter(100, 1500)">
//<span class="stats__number" x-text="'> ' + count"></span>
//<p class="stats__text">вариантов материалов и расцветок</p>
//</div>
//<div class="stats__item" x-data="blockCounter(10, 1500)">
//<span class="stats__number" x-text="'> ' + count + ' лет'"></span>
//<p class="stats__text">радуем наших клиентов</p>
//</div>
//</div>
//</section>;
