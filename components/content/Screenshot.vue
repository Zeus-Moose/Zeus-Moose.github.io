<template>
    <div class="screenshot">
        <nuxt-picture :src="image" :alt="alt" format="webp" sizes="lg:700px xl:1100px" />
        <p class="caption" v-if="title">{{ title }}</p>
    </div>
</template>

<script>
export default {
    props: ['title', 'image', 'alt'],
}
</script>
