<script setup lang="ts">
import { onMounted, onUpdated } from 'vue';
import Bot from '/bot.svg'

onMounted(()=>{
  let v = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const body = document.querySelector('body');
  const bodycl = body?.classList.value; 
  console.log(bodycl)
  if(bodycl === 'dark-mode'){
    const art = document.getElementById('art')
    art?.classList.remove('light-mode-nav')
    art?.classList.add('dark-mode-nav')
    const img = document.getElementById('img')
    img?.classList.remove('light-mode-img')
    img?.classList.add('dark-mode-img')
  }
  else{
    const art = document.getElementById('art')
    art?.classList.remove('dark-mode-nav')
    art?.classList.add('light-mode-nav')
    const img = document.getElementById('img')
    img?.classList.remove('dark-mode-img')
    img?.classList.add('light-mode-img')
  }
  })
</script>
<template>
  <section id="section">
    <div class="container-img" id="img">
      <img :src="Bot" alt="bot image">
    </div>
    <article id="art" >
      <p>En un mundo cada vez más conectado, la comunicación eficiente se ha vuelto esencial. Nuestro innovador bot de WhatsApp ofrece una solución única al transformar la experiencia de mensajería al permitir a los usuarios convertir fácilmente mensajes de voz en texto. Esta funcionalidad revolucionaria simplifica la interacción, permitiendo a los usuarios recibir y responder a mensajes de audio de manera rápida y eficiente.</p>
      <p>El bot de WhatsApp incorpora tecnología avanzada de procesamiento de lenguaje natural para ofrecer una transcripción precisa de los mensajes de voz recibidos. Al aprovechar algoritmos inteligentes, el bot identifica automáticamente la voz, convirtiéndola en un formato de texto comprensible. Esta característica no solo ahorra tiempo, sino que también mejora la accesibilidad al proporcionar una opción de lectura para aquellos con preferencias de comunicación específicas.</p>
    </article>
  </section>
</template>

<style scoped>
#section{
  padding-top: 15vh;
  height:90vh;
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
#section .container-img{
  margin: 0 2rem;
  padding: 1rem;
  height: 60vh;
  border-radius: 200%;
}
#section .container-img img{
  height: 50vh;
  width: 60vh;
  margin: 3vh 0;
}
article{
  width: 50%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
}
article p{
  width: 80%;
  margin: .5rem 0;
  font-size: 1rem;
}
@media (max-width: 880px){
  #section{
    justify-content: center;
    height: max-content;
  }
  #section .container-img{
    height: 40vh;
    width: 80vw;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #section .container-img img{
    margin: 0;
    height: min-content;
    width: 50vw;
  }
  article{
    margin-top: 5vh;
    width: 80%;
  }
  article p{
    font-size: .9rem;
    width: 100%;
  }
}
</style>