<template>
  <section class="hero">
    <div class="hero__inner">
      <hero-slider class="hero__slider"></hero-slider>
      <div class="hero__bio bio">
        <div class="bio__content">
          <h1 class="bio__title">Кикель Владимир</h1>
          <p class="bio__subtitle">Живописец</p>
          <img
            style="margin-left: -4px; margin-top: 20px"
            width="80"
            height="80"
            src="@images/logo.svg"
            alt="Kikel Vladimir Logo" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import HeroSlider from './HeroSlider.vue';
</script>

<style lang="scss" scoped>
.hero {
  --color-hero: #666;

  width: 100%;
  height: 800px;
  max-height: 100vh;

  &__inner {
    position: relative;
    max-width: 1920px;
    height: 100%;
    margin: 0 auto;
    background-color: var(--color-hero);

    &::before {
      content: '';
      position: absolute;
      z-index: 1;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 50px 30px var(--color-bg);
    }
  }

  &__bio {
  }

  &__slider {
  }
}

.bio {
  position: absolute;
  inset: 0;
  transition: transform 600ms ease-in-out;
  transform: translateX(0);
  text-shadow: 0.1em 0.1em 0.2em #000;
  overflow: hidden;
  pointer-events: none;

  &__content {
    margin: 3em 6em;
    padding: 2em 3em;
    width: fit-content;
    position: relative;
    z-index: 1;
    pointer-events: all;
    // background-image: linear-gradient(
    //   to right,
    //   rgb(0 0 0 / 0.2) 90%,
    //   transparent
    // );
    background-color: rgb(0 0 0 / 0.2);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px) grayscale(20%) brightness(80%);
    border-radius: 12px;
    animation: appearance 400ms ease-in-out forwards;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
    }
  }

  &__title {
    font-size: 36px;
  }

  &__subtitle {
    font-size: 28px;
  }

  &--hidden {
    transform: translateX(-100%);
  }
}

@keyframes appearance {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
