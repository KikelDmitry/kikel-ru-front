<template>
  <div class="slider">
    <ul class="slider__list">
      <li
        v-for="slide in slides"
        :key="slide.id"
        class="slider__item slide">
        <div
          :style="`background-image: url('${slide.url}')`"
          class="slide__img">
          <span class="visually-hidden">{{
            `Работа ${slide.title} из категории ${slide.category}`
          }}</span>
        </div>
        <div class="slide__meta">
          <div class="slider__title">
            {{ slide.title }}
          </div>
          <a
            href="#"
            class="slider__tech">
            {{ slide.tech }}
          </a>
        </div>
      </li>
    </ul>
    <router-link
      :to="`/pictures/italia/`"
      class="slider__btn"
      >Смотреть в галерее</router-link
    >
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const slides = ref([]);
const activeCategory = ref('');

onMounted(() => {
  fetch('http://localhost:4300/hero/slides')
    .then((res) => res.json())
    .then((json) => (slides.value = json))
    .then(() => (activeCategory.value = slides.value[0].category));
});
</script>

<style lang="scss" scoped>
.slider {
  height: 100%;
  box-shadow: inset 0 0 30px 20px var(--color-bg);

  &__list {
    height: 100%;
  }

  &__item {
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  &__btn {
    position: absolute;
    z-index: 1;
    bottom: 100px;
    left: 50%;
    translate: -50% 0;
    background-color: rgb(0 0 0 / 0.1);
    color: #ddd;
    backdrop-filter: blur(2px);
    padding: 0.3em 0.6em;
    border-radius: 0.3em;
    border: 1px solid rgb(255 255 255 / 0.2);
    font-size: 28px;
    text-align: center;
    text-shadow:
      -1px -1px 1px #900,
      1px 1px 1px #009;
    box-shadow: 0 0 10px rgb(0 0 0 / 0.2);
    white-space: nowrap;
    transition: background-color 200ms;

    &:hover {
      background-color: rgb(0 0 0 / 0.7);
    }
  }

  &__title {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.15;
  }

  &__tech {
    font-size: 10px;
    line-height: 1.15;
    text-transform: uppercase;
  }
}
.slide {
  &__img {
    background-size: cover;
    position: absolute;
    inset: 0;
    animation: shifting infinite 14s 1s ease-in-out alternate;

    &:active {
      animation-play-state: paused;
    }
  }

  &__meta {
    position: absolute;
    z-index: 1;
    display: flex;
    gap: 0.3em;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    padding: 0.7em 1em 1em 0.7em;
    inset-block-end: 0;
    inset-inline-end: 0;
    text-align: end;
    text-shadow: -1px -1px 1px #000;
    border-start-start-radius: 10px;
    box-shadow: 0 0 20px rgb(0 0 0 / 0.3);
    color: #ddd;
    background-color: rgb(0 0 0 / 0.3);
    background-image: linear-gradient(
      315deg,
      rgb(255 255 255 / 0.1),
      rgb(0 0 0 / 0.1)
    );
    backdrop-filter: blur(3px);
  }
}
@keyframes shifting {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 100%;
  }
}
</style>
