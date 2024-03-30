<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from 'vue';
const isMobile = ref<boolean>(true);

function fixsizing():void {
  const totalWidth= ref<number>(globalThis.innerWidth);
  
  if(totalWidth.value <= 880){
    isMobile.value = true
  }
  else{
    isMobile.value = false
  }
};
onMounted(() => {
  fixsizing()
  window.addEventListener('resize', fixsizing)
});
onBeforeUnmount(() => {
  globalThis.removeEventListener('resize', fixsizing)
});
</script>
<template>
  <NuxtLayout >
    <HeaderMobile v-if="isMobile" />
    <Header v-else />
    <NuxtPage />
    <Footer v-if="isMobile"/>
  </NuxtLayout>
</template>
<style>
:root{ 
  scroll-behavior: smooth;
  --c-wsp:#5cb654;
  --c-bg-white:#fbfbfb;
  --c-bg-t-white: #201f1f;
  --vt-c-white-soft: #f8f8f8;
  --vt-c-white-mute: #e5e5e5;
  --v-c-bc-white:#dbdbdb;
  --c-bg-in-white:#141414dc;

  --c-bg-dark:#201f1f;
  --c-bg-t-dark:#fbfbfb;
  --vt-c-dark-soft: #252525;
  --vt-c-dark-mute: #313131;
  --v-c-bc-dark:#313131;
  --c-bg-in-dark:#f1f5fd1e;
}
:root{
  scroll-behavior: smooth;
  --bg-t:var(--c-bg-t-white);
  --color-background:var(--c-bg-white);
  --color-background-soft:var(--vt-c-white-soft);
  --color-background-mute:var(--vt-c-white-mute);
  --color-background-invertido:var(--c-bg-in-white);
}
@media (prefers-color-scheme: dark){
  :root{
  --bg-t:var(--c-bg-t-dark);
  --color-background:var(--c-bg-dark);
  --color-background-soft:var(--vt-c-dark-soft);
  --color-background-mute:var(--vt-c-dark-mute);
  --color-background-invertido:var(--c-bg-in-dark);
  }
}
.dark-mode{
  background-color:var(--c-bg-dark);
}
.light-mode{
  background-color:var(--c-bg-white);
}

body{
    font-family: 'Poppins';
    margin: 0;
    background-color: var(--color-background);
    width: 100vw;
    overflow-x: hidden;
    scroll-behavior: smooth;
}
</style>