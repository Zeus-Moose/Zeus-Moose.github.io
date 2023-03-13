<template>
  <div class="wrapper">
    <h1>{{ data.title }}</h1>
    <ContentRenderer :value="data" />
  </div>
</template>


<script setup>
  try {
    const { path } = useRoute()
    const { data } = await useAsyncData(`${path}`, () => {
      return queryContent().where({ _path: path }).findOne()
    })
  } catch(err) {
    error({
      statusCode: 404,
      message: 'Page could not be found',
    })
  }
</script>

