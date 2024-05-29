<template>
  <div class="wrapper">
    <h1>{{ data.page_title ?? data.title }}</h1>
    <ContentRenderer :value="data" />
  </div>
</template>


<script setup>
  const runtimeConfig = useRuntimeConfig()
  const { path } = useRoute()
  const { data, error } = await useAsyncData(`${path}`, () => {
    return queryContent().where({ _path: path }).findOne()
  })
  if (error.value) {
    throw createError({
      statusCode: 404,
      message: 'not found',
      fatal: true,
    })
  }

  useHead({
    title: () => `${data.value?.title} | Zeus Moose`,
    meta: () => [
      { property: 'og:title', content:  `${data.value?.title} | Zeus Moose` },
      { name: 'twitter:title', content:  `${data.value?.title} | Zeus Moose` },

      { name: 'description', content: data.value?.description },
      { property: 'og:description', content: data.value?.description },
      { name: 'twitter:description', content: data.value?.description },
      
      { name: 'twitter:image', content: `${runtimeConfig.public.domain}assets/images/zeus_moose.png`},
      { property: 'og:image', content: `${runtimeConfig.public.domain}assets/images/zeus_moose.png`},
    ]
  })
</script>

