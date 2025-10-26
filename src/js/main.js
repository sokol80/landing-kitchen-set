// Импортируем наш модуль слайдера, чтобы он начал работать
import './slider.js';
import '@/styles/main.css';

// src/main.js
import Alpine from 'alpinejs';
import blockCounter from './components/blockCounter';

// Регистрация компонентов
Alpine.data('blockCounter', blockCounter);

// Можно регистрировать несколько:
// Alpine.data('dropdown', dropdown)
// Alpine.data('modal', modal)

// Запуск Alpine
window.Alpine = Alpine;
Alpine.start();

console.log('Alpine.js запущен!');
