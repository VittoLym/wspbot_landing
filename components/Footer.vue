<script lang="ts" setup>
import Us from '/us.svg'
import Home from '/home.svg'
import Contact from '/contact.svg';
</script>
<template>
  <nav id="nav-mobile">
    <ul>
      <NuxtLink to="/About" class="us-link" id="us">
        <img :src="Us" alt="Us">
      </NuxtLink>
      <NuxtLink to="/" class="home-link" id="home">
        <img :src="Home" alt="Home" >
      </NuxtLink>
      <NuxtLink to="/Contact" class="contact-link" id="contacts">
        <img :src="Contact" alt="Contact" id="contact">
      </NuxtLink>
    </ul>
  </nav>
</template>

<style scoped>
nav{
  width: 100%;
  height: max-content;
  position: fixed;
  bottom: 0;
}
nav ul{
  padding: 0;
  margin: 0;
  height: 100%;
  width: 90%;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav ul a{
  display: flex;
  justify-content: center;
  text-align: center;
  width: max-content;
  padding: 0 1rem;
  transition: all ease .1s;
  border-radius: .8rem;
}
.us-link::after {
  content: 'Us';
  position: absolute;
  bottom: 120%;
  z-index: 120;
  left: 17%;
  transform: translateX(-50%);
  padding: .5rem .7rem;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.us-link:active::after {
  opacity: 1;
}
.home-link::after {
  content: 'Home';
  position: absolute;
  bottom: 120%;
  z-index: 120;
  left: 50%;
  transform: translateX(-50%);
  padding: .5rem .7rem;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.home-link:active::after {
  opacity: 1;
}
.contact-link::after {
  content: 'Contact';
  position: absolute;
  bottom: 120%;
  z-index: 120;
  left: 83%;
  transform: translateX(-50%);
  padding: .5rem .7rem;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.contact-link:active::after {
  opacity: 1;
}
</style>