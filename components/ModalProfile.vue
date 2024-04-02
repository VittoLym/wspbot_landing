<template>
  <section>
    <article>
      <h1>profile</h1>
    </article>
    <button>
      button
    </button>
  </section>
</template>

<script lang="ts" setup>

</script>

<style scoped>
section{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  z-index: 100;
  right: 0;
  top: 4.5rem;
  margin-right: 1rem;
  background-color: var(--color-background);
  width: 15vw;
  height: 40vh;
  border-radius: 10px;
}
h1{
  margin: 0;
  margin-top: 1rem;
}
button{
  background-color: transparent;
  border: none;
  color: #fff;
}

</style>