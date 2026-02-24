<template>
  <section class="board">
    <div class="board__grid">
      <div class="board__about">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quod
          consequatur error! Similique qui ex reiciendis rerum. Ea id temporibus
          iure ad, ipsum tempore odio illum aut nesciunt sit a? Magni molestiae
          totam consectetur placeat a assumenda, eligendi omnis, nesciunt
          dolores aut quidem quae in corporis saepe, inventore debitis delectus
          tempora quisquam sed praesentium quibusdam explicabo. Hic illo beatae
          corporis ex atque reprehenderit rem aperiam, repellat vitae
          repellendus eius? Harum blanditiis suscipit ea nam distinctio facilis
          non earum mollitia aliquam incidunt, illo sit officiis excepturi qui,
          quaerat omnis quia at nemo, possimus optio? Expedita voluptatum quasi
          quam culpa aliquam sapiente?
        </p>
      </div>
      <div class="board__contacts"></div>
      <div class="board__block"></div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@use '@styles/meta/mixins';
.board {
  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
  }

  &__about {
    padding: 1.4em 1em;

    @include mixins.moreThan(1930) {
      padding-inline-start: 0;
    }
  }

  &__contacts {
    background-color: #777;
  }

  &__block {
    background-color: #9a9a9a;
  }
}
</style>
