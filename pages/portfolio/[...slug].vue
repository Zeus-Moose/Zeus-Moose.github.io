<template>
  <div class="wrapper portfolio-page">
    <div class="section_image">
      <h1 v-html="data.title"></h1>
      <video muted="true" autoplay="true" loop="true" :poster="`/assets/images/covers/${ data.image }`">
          <source :src="`/assets/videos/${ data.video }`" />
      </video>
    </div>
    <ContentRenderer :value="data" />
  </div>
</template>


<script setup>
  const { path } = useRoute()
  const { data } = await useAsyncData(`portfolio-${path}`, () => {
    return queryContent().where({ _path: path }).findOne()
  })
</script>

<script>
export default {
  head () {
    return {
      title: `${this.page.title} | Zeus Moose`,
      description: `${this.page.description}`
    }
  }
}
</script>
