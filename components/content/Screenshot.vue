<template>
    <figure>
        <nuxt-picture :src="image" :alt="alt" format="webp" sizes="600px md:800px lg:1000px"  densities="x1 x2"/>
        <figcaption class="caption" v-if="title">{{ title }}</figcaption>
    </figure>
</template>

<script>
export default {
    props: ['title', 'image', 'alt'],
}
</script>
