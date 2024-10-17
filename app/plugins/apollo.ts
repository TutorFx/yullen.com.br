export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('apollo:error', (error) => {
      console.error(JSON.stringify(error))
  
      // Handle different error cases
    })
  })
  