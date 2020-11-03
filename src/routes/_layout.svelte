<script lang="ts">
</script>

<style lang="scss">
  @import "../scss/base/variables";
  @import "../scss/base/grid";
  @import "../scss/base/typography";

  :global body {
    margin: 0;
    background-color: $blue;
  }
  :global *,
  :global *::before,
  :global *::after {
    box-sizing: border-box;
  }

  main {
    overflow: hidden;
  }
</style>

<main>
  <slot />
</main>
