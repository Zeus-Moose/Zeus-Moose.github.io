<template>
    <div class="screenshot">
        <nuxt-picture :src="image" :alt="alt" format="webp" sizes="lg:100vw xl:1280px" />
        <p class="caption" v-if="title">{{ title }}</p>
    </div>
</template>

<script>
export default {
    props: ['title', 'image', 'alt'],
}
</script>
