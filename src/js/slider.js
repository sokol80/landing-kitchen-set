// Импортируем ядро Swiper и необходимые модули
// Core - это сам "движок" слайдера
// Navigation - это модуль для стрелок "вперед"/"назад"
// Pagination - это модуль для точек (буллетов) пагинации
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// Импортируем базовые стили Swiper, а также стили для навигации и пагинации
// Без этих стилей слайдер будет выглядеть как простой список картинок
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Инициализируем слайдер
// Мы ищем на странице элемент с классом '.portfolio__slider' (его мы добавим в HTML)
// и применяем к нему Swiper с нашими настройками
const swiper = new Swiper('.portfolio__slider', {
  // Подключаем модули, которые мы импортировали выше
  modules: [Navigation, Pagination],

  // Настройки слайдера

  loop: true, // Включает "бесконечную" прокрутку

  // Количество слайдов, видимых одновременно
  // 'auto' позволяет слайдам иметь разную ширину, основываясь на их содержимом
  slidesPerView: 'auto',
  // Расстояние между слайдами
  spaceBetween: 20,

  // Адаптивные настройки (breakpoints) удалены, так как slidesPerView: 'auto'
  // делает слайдер адаптивным по ширине содержимого

  // --- Навигация (стрелки) ---
  navigation: {
    nextEl: '.swiper-button-next', // Класс для стрелки "вперед"
    prevEl: '.swiper-button-prev', // Класс для стрелки "назад"
  },

  // --- Пагинация (точки) ---
  pagination: {
    el: '.swiper-pagination', // Класс для контейнера с точками
    clickable: true, // Позволяет переключать слайды по клику на точку
  },
});