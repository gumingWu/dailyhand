// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    '@nuxt-themes/docus'
  ],
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      title: 'DailyHand',
      charset: 'utf-8',
      link: [
        {
          rel: 'icon',
          href: '/favicon.svg'
        }
      ],
      meta: [
        {name: 'description', content: '可能是现代最全的JS手写题文档'},
        {name: 'keywords', content: 'js,手写题,面试题,手写题文档,handwrite'},
        {name: 'author', content: 'gaaming'}
      ]
    }
  }
})
