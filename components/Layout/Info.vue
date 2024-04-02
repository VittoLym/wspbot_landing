<script  lang="ts"" setup>
import { onMounted } from 'vue';
let validate = true
  const { signOut, signIn, status } = useAuth()
  const logged = computed(() => status.value === 'authenticated')
  async function signOutWC() {
    await signOut()
  }
  async function signInWithCredentials() {
    try {
      // This sends a POST request to the `auth.provider.endpoints.signIn` endpoint with `credentials` as the body
      await signIn()
      alert('Successfully logged in!')
    } catch (error) {
      console.error(error)
    }
  }
async function keishin (){
  const data = await fetch('http://localhost:3005/addusers',{
    method: 'POST',
    headers:{
      'Content-type':'application/json'
    },
    body: JSON.stringify({
      email: 'kikiduyulovemi@gmail.com',
      password: 'mansuki'
    })
  })
  const datades = await data.json()
  console.log(datades)
}
</script>
<template>
  <main>
    <h1 id="how-to-use">How to use:</h1>
    <aside>
      <article>
        <p>
          1-Create user / Sign in
        </p>
        <p>
          2-Open whatsapp.
        </p>
        <p>
          3-Go to pair your device.
        </p>
        <p>
          4-Scan the QR code.
        </p>
      </article>
      <article>
        <button v-if="logged" >
          <NuxtLink to="/" @click="signOutWC">Sign out</NuxtLink>
        </button>
        <button v-else >
          <NuxtLink to="/" @click="signInWithCredentials">Sign in</NuxtLink>
        </button>
        <!-- 
        <img v-else src="" alt="backflip"> -->
      </article>
    </aside>
  </main>
</template>

<style scoped>
main{
  height:100vh;
  width:100%;
}
main h1{
  padding-top: 15vh;
  font-size: 2.5rem;
  margin: 0;
  padding-left: 2rem;
  color: var(--c-wsp);
}
aside{
  background-color: #ffffff;
  height: 50vh;
  width: 48vw;
  border-radius: 10px;
  margin: 0.5rem 2rem;
  color: #050404;
  display: flex;
}
aside article {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;
  height: 100%;
}
aside article p{
  font-weight: bolder;
}
button{
  text-decoration:none;
  transition: all ease .2s;
  height: max-content;
  line-height: 13vh;
  font-weight: bolder;
  padding: 0 2rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color:var(--c-wsp);
  font-weight: bold;
  font-size: 1.2rem;
  background-color: #1f1f1fb9;
}
button:hover{
  background-color: var(--c-wsp);
  color: var(--bg-t);
  box-shadow: 0 5px 10px rgba(26, 24, 24, 0.329);
  scale: 1.05;
  font-size: 1.5rem;
}
button:active{
  scale: .9;
}
button a{
  display: block;
  height: 100%;
  width: 100%;
}
</style>