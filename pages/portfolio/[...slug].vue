<template>
  <div class="wrapper">
    <div class="portfolio-page">
      <div class="section_image">
        <h1 v-html="page.title"></h1>
        <video muted="true" autoplay="true" loop="true" :poster="`/assets/images/covers/${page.image}`">
          <source type="video/webm" :src="`/assets/videos/${page.video}`" />
          <source type="video/mp4" :src="`/assets/videos/${page.video.replace('.webm', '.mp4')}`">
        </video>
      </div>
      <ContentRenderer :value="page" />
    </div>
    <HR />
    <section class="portfolio-bottom wrapper">
      <nuxt-link class="back-to-portfolio-link" to="/#portfolio">‹ Back to portfolio</nuxt-link>
      <h3>Other work</h3>
      <div class="portfolio-grid">
        <PortfolioCard key="portfolio-1" :playing="true" :portfolio="allContent[0]" />
        <PortfolioCard key="portfolio-2" :playing="true" :portfolio="allContent[1]" />
      </div>
    </section>
  </div>
</template>


<script setup>

  const domain = 'https://zeus-moose.github.io/'

  
  const { path } = useRoute()
  const { data: page, error } = await useAsyncData(() => {
    return queryContent().where({ _path: path }).findOne()
  })
  if (error.value) {
    throw createError({
      statusCode: 404,
      message: 'not found',
      fatal: true,
    })
  }
  let { data: allContent } = await useAsyncData(() => {
    return queryContent('portfolio').only(['_id', 'title', 'thumbnail', 'video_thumb', 'description', '_path']).find()
  }, {
    transform: (data) => {
      const current = data.findIndex((item) => item._id === page._rawValue._id)
      if (current === 0) {
        return [data[data.length - 1], data[1]]
      } else if (current === data.length - 1) {
        return [data[data.length - 2], data[0]]
      } else {
        return [data[current - 1], data[current + 1]]
      }
    }
  })
  
  useHead({
    title: () => `${page.value?.title} | Zeus Moose`,    
    meta: () => [
      { property: 'og:title', content: `${page.value?.title} | Zeus Moose` },
      { name: 'twitter:title', content: `${page.value?.title} | Zeus Moose` },

      { name: 'description', content: page.value?.description },
      { property: 'og:description', content: page.value?.description },
      { name: 'twitter:description', content: page.value?.description },
      
      { property: 'og:image', content: `${domain}assets/images/covers/${page.value?.image}`},
      { name: 'twitter:image', content: `${domain}assets/images/covers/${page.value?.image}`},
    ]
  })

</script>

<script>
import HR from '~/components/HR.vue';
import PortfolioCard from '~/components/PortfolioCard.vue'
export default {
  components: ['HR', 'PortfolioCard'],
}
</script>
