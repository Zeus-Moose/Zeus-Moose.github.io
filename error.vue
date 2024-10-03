<template>
  <NuxtLayout name="default">
    <div class="wrapper">
      <div v-if="error.statusCode === 404">
        <h1>Page not found</h1>
        <p>Unfortunately the page you requested could not be found. Despite their best efforts neither Zeus nor Moose could find it.</p>
        <p>Maybe it never existed at all.</p>
        <br>
        <p>
          <NuxtLink to="/">‹ Back to portfolio</NuxtLink>
        </p>
      </div>
      <div v-else>
        <h1>Error {{ error.statusCode }}</h1>
        <p>Unfortunately something has gone wrong.</p>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
  useHead({
    title: `Four oh four | Zeus Moose`,
    bodyAttrs: { class: 'fourohfour' }
  })
</script>
<script>
export default {
  props: ['error']
}
</script>
