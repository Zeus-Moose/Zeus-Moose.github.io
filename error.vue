<template>
  <NuxtLayout name="default">
    <div class="wrapper">
      <div v-if="error.statusCode === 404">
        <h1>Page not found</h1>
        <p>Unfortunately the page you requested could not be found. Despite their best efforts neither Zeus nor Moose could find it.</p>
        <p>Maybe it never existed at all.</p>
        <p>
          <a @click="clearErrorRedirect">Back to portfolio</a>
        </p>
      </div>
      <div v-else>
        <h1>Error {{ error.statusCode }}</h1>
        <p>Unfortunately something has gone wrong.</p>
        <p>
          <a @click="clearErrorRedirect">Back to portfolio</a>
        </p>
      </div>
    </div>
  </NuxtLayout>
</template>

<script>
export default {
  props: ['error'],
  data () {
    return {
      siteError: useState('siteError'),
    }
  },
  methods: {
    clearErrorRedirect() {
      clearError({ redirect: '/' })
      this.siteError = 0
    }
  },
  mounted() {
      this.siteError = this.error.statusCode
  }
}
</script>
