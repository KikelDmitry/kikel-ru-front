<template>
  <section class="hero">
    <div class="hero__inner">
      <div class="hero__slider slider">
        <ul class="slider__list">
          <li class="slider__item">
            <img
              src="/mock-pic/slon_s.png"
              alt=""
              class="slider__img" />
          </li>
        </ul>
        <router-link
          to="/pictures/italia/"
          class="slider__btn"
          >Смотреть в галерее</router-link
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
.hero {
  --color-hero: #666;
  width: 100%;
  height: 500px;
  background-color: var(--color-hero);

  &__inner {
    position: relative;
    max-width: 1920px;
    height: 100%;
    margin: 0 auto;
    background-color: rgba(119, 119, 119, 0.411);

    &::before,
    &::after {
      content: '';
      position: absolute;
      z-index: 1;
      inset: 0;
      pointer-events: none;
    }

    &::before {
      background-color: rgba(119, 119, 119, 0.411);
    }

    &::after {
      background-image: radial-gradient(
        circle to center,
        transparent,
        var(--color-hero)
      );
    }
  }
}

.slider {
  position: relative;
  height: 100%;

  &__list {
    height: 100%;
  }
  &__item {
    height: 100%;
    position: relative;
  }
  &__img {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    object-fit: cover;
  }
  &__btn {
    position: absolute;
    z-index: 1;
    bottom: 40px;
    left: 50%;
    translate: -50% 0;
    background-color: #000;
    padding: 0.2em 0.5em;
    border-radius: 0.2em;
    font-size: 24px;
    box-shadow: 2px 2px 2px #333;
  }
}
</style>
