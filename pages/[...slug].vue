<template>
  <div class="wrapper">
    <h1>{{ data.page_title ?? data.title }}</h1>
    <ContentRenderer :value="data" />
  </div>
</template>


<script setup>
  const { path } = useRoute()
  const { data } = await useAsyncData(`${path}`, () => {
    return queryContent().where({ _path: path }).findOne()
  })

  useHead({
    title: () => `${data.value?.title} | Zeus Moose`,
    description: () => data.value?.description,
  })
</script>

