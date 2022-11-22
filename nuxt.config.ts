// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      title: 'DailyHand',
      charset: 'utf-8',
      meta: [
        {name: 'description', content: '可能是现代最全的JS手写题文档'}
      ]
    }
  }
})
