<template>
    <div class="screenshot">
        <nuxt-picture :src="image" :alt="alt" format="webp" sizes="600px sm:800px xl:1000px" />
        <p class="caption" v-if="title">{{ title }}</p>
    </div>
</template>

<script>
export default {
    props: ['title', 'image', 'alt'],
}
</script>
