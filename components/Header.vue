<script lang="ts" setup>
import SwitchMode from './SwitchMode.vue';
function schemeManagement(v : boolean) {
    if(v){
      const body = document.querySelector('body')
      body?.classList.remove('light-mode')
      body?.classList.add('dark-mode')
      const nav = document.getElementById('nav')
      nav?.classList.remove('light-mode-nav')
      nav?.classList.add('dark-mode-nav')
      const h1 = document.getElementById('h1')
      h1?.classList.remove('light-mode-nav')
      h1?.classList.add('dark-mode-nav')
      const art = document.getElementById('art')
      art?.classList.remove('light-mode-nav')
      art?.classList.add('dark-mode-nav')
      const img = document.getElementById('img')
      img?.classList.remove('light-mode-img')
      img?.classList.add('dark-mode-img')
    }
    else{
      const body = document.querySelector('body');
      body?.classList.remove('dark-mode');
      body?.classList.add('light-mode')
      const nav = document.getElementById('nav')
      nav?.classList.remove('dark-mode-nav')
      nav?.classList.add('light-mode-nav')
      const h1 = document.getElementById('h1')
      h1?.classList.remove('dark-mode-nav')
      h1?.classList.add('light-mode-nav')
      const art = document.getElementById('art')
      art?.classList.remove('dark-mode-nav')
      art?.classList.add('light-mode-nav')
      const img = document.getElementById('img')
      img?.classList.remove('dark-mode-img')
      img?.classList.add('light-mode-img')
    }
  }
</script>
<template>
  <nav  id="nav">
    <article class="titleNav">
      <nuxt-link to="/">
        <h1 id="h1">Vittbot Whatsapp</h1>
      </nuxt-link>
    </article>
    <article class="navItems">
      <ul>
        <NuxtLink to="/#how-to-use">How to use</NuxtLink>
        <NuxtLink to="/Contact">Contact</NuxtLink>
        <a href="https://github.com/VittoLym/landing_wspBot" target="_blank">Github</a>
        <NuxtLink to="/About">About</NuxtLink>
      </ul>
      <SwitchMode @test-emit="schemeManagement" />
    </article>
  </nav>
</template>

<style>
.dark-mode-nav{
  background-color: var(--vt-c-dark-mute);
  color:var(--c-bg-t-dark);
}
.light-mode-nav{
  background-color:var(--vt-c-white-mute);
  color:var(--c-bg-t-white);
}
.dark-mode-img{
  background-color: var(--c-bg-in-dark);
}
.light-mode-img{
  background-color: var(--c-bg-in-white);
}
.light-mode-mb{
  background-color:var(--vt-c-white-mute);
  color:var(--c-bg-t-white);
}
.light-mode-mb:hover{
  background-color: var(--vt-c-white-soft);
}
.item-light:hover{
  background-color: var(--vt-c-white-soft);
}
.item-dark:hover{
  background-color: var(--vt-c-dark-soft);
}
.item-light::after{
  background-color: var(--vt-c-white-mute);
  color: var(--c-bg-t-white);
}
.item-dark::after{
  background-color: var(--vt-c-dark-mute);
  color: var(--c-bg-t-dark);
}
nav{
  position: fixed;
  z-index: 100;
  display: flex;
  background-color: var(--color-background-mute);
  justify-content: space-between;
  width: 100%;
  height: 13vh;
}
.titleNav{
  width: max-content;
  height: 100%;
  color: var(--bg-t);
}
.titleNav h1{
  margin: 0;
  margin-left: 2rem;
  line-height: 13vh;
  cursor:pointer;
  font-size:1.5rem;
}
a{
  text-decoration:none;
  color:var(--bg-t)
}
.titleNav h1:hover{
  color:var(--c-wsp);
}
.navItems{
  width: max-content;
  height: 100%;
  display: flex;
}
.navItems ul{
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
.navItems ul a{
  text-decoration:none;
  transition: all ease .2s;
  height: max-content;
  line-height: 13vh;
  font-weight: bolder;
  padding: 0 2rem;
  border-radius: 10px ;
  cursor: pointer;
  color:var(--c-wsp);
}
.navItems ul a:hover{
  background-color: var(--c-wsp);
  color: var(--bg-t);
}
</style>