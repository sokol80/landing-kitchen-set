export default (end = 100, duration = 2000) => ({
  count: 0,
  startValue: 0,
  endValue: end,
  animationFrameId: null,
  startTime: null,

  init() {
    // Убедимся, что начальное значение установлено в HTML, если оно отличается от 0
    // Например, <span x-text="count">50</span>, тогда this.count будет 50
    this.startValue = Number(this.$el.textContent) || 0;
    this.count = this.startValue;

    // Запускаем анимацию, когда элемент появляется в поле зрения
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.startAnimation();
          observer.disconnect(); // Отключаем наблюдатель после запуска
        }
      },
      { threshold: 0.1 } // Запуск при 10% видимости
    );

    observer.observe(this.$el);
  },

  startAnimation() {
    const animate = (timestamp) => {
      if (!this.startTime) this.startTime = timestamp;
      const progress = timestamp - this.startTime;
      
      const current = this.startValue + (this.endValue - this.startValue) * (progress / duration);

      if (progress < duration) {
        this.count = Math.min(Math.ceil(current), this.endValue); // Округляем вверх и не превышаем цель
        this.animationFrameId = requestAnimationFrame(animate);
      } else {
        this.count = this.endValue; // Устанавливаем финальное значение
      }
    };

    this.animationFrameId = requestAnimationFrame(animate);
  },

  destroy() {
    // Отменяем анимацию, если компонент будет удален со страницы
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
});
