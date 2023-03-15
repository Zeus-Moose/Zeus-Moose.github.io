<template>
  <div class="wrapper">
    <div class="portfolio-page">
      <div class="section_image">
        <h1 v-html="data.title"></h1>
        <video muted="true" autoplay="true" loop="true" :poster="`/assets/images/covers/${data.image}`">
          <source :src="`/assets/videos/${data.video}`" />
        </video>
      </div>
      <ContentRenderer :value="data" />
    </div>
    <HR />
    <section class="portfolio-bottom wrapper">
      <nuxt-link class="back-to-portfolio-link" to="/#portfolio">‹ Back to portfolio</nuxt-link>
      <h3>Other work</h3>
      <div class="portfolio-grid">
      </div>
    </section>
  </div>
</template>


<script setup>
  const { path } = useRoute()
  const { data } = await useAsyncData(`portfolio-${path}`, () => {
    return queryContent().where({ _path: path }).findOne()
  })
  // const { other } = await useAsyncData(`portfolio`, () => {
  //   const otherData = queryContent('portfolio').where({ _path: {$not: path } }).only(['title', 'thumbnail', 'video_thumb', 'description', '_path']).find(`${path}`)
  //   return otherData.sort(() => 0.5 - Math.random())
  // })
  
  useHead({
    title: () => `${data.value?.title} | Zeus Moose`,
    description: () => data.value?.description,
  })

</script>

<script>
import HR from '~/components/HR.vue';
export default {
  components: ['HR'],
}
</script>
