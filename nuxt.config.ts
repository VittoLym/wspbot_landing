// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@sidebase/nuxt-auth'],
  auth: {
      provider: {
          type: 'authjs'
      }
  },
  devtools: { enabled: true },
  app:{
    head:{
      title: 'Landing Bot',
      link: [
        {rel: 'icon',type:'image/svg+xml', href:'/bot.svg'},
        {rel: 'preconnect', href:"https://fonts.googleapis.com"},
        {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"}
      ]
    }
  },
});

