<template>

  <div class="wrapper">
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </div>

</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const page = await $content(params.slug).fetch()
      return {
        page
      }
    }
  }
</script>