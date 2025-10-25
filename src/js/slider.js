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
const swiper = new Swiper('.mySwiper', {
  modules: [Navigation, Pagination],
  // Базовые (мобильные) настройки
  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Настройки для десктопных разрешений
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 16,
      // centeredSlides: true, картинка по центру
    },
  },
});
