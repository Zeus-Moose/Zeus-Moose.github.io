<template>
  <div class="wrapper">
    <h1>{{ data.page_title ?? data.title }}</h1>
    <ContentRenderer :value="data" />
  </div>
</template>


<script setup>
  const config = useRuntimeConfig()

  const { path } = useRoute()
  const { data, error } = await useAsyncData(`${path}`, () => {
    return queryContent().where({ _path: path }).findOne()
  })
  if (error.value) {
    throw createError({
      statusCode: 404,
      message: 'not found',
    })
  }

  useHead({
    title: () => `${data.value?.title} | Zeus Moose`,
    meta: () => [
      { name: 'description', content: data.value?.description },
      { name: 'twitter:image', content: `${config.domain}assets/images/zeus_moose.png`},
      { name: 'og:image', content: `${config.domain}assets/images/zeus_moose.png`},
    ]
  })
</script>

