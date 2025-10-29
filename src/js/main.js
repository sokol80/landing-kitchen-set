// Импортируем наш модуль слайдера, чтобы он начал работать
import './slider.js';
import '@/styles/main.css';
// Импорт CSS
import 'aos/dist/aos.css';

// Импорт JavaScript
import AOS from 'aos';

// src/main.js
import Alpine from 'alpinejs';
import blockCounter from './components/blockCounter';
import fadeIn from './components/fadeIn';

// Регистрация компонентов
Alpine.data('blockCounter', blockCounter);
Alpine.data('fadeIn', fadeIn);

// Можно регистрировать несколько:
// Alpine.data('dropdown', dropdown)
// Alpine.data('modal', modal)

// Запуск Alpine
window.Alpine = Alpine;
Alpine.start();

console.log('Alpine.js запущен!');

// Инициализация
AOS.init();
