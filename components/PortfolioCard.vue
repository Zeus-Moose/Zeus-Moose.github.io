<template>
    <article class="block block_link mini_block" :class="cardSize">
        <div class="section_image">
            <video muted="true" :poster="`/assets/images/covers/${portfolio.thumbnail}`">
                <source type="video/webm" :src="`/assets/videos/${portfolio.video_thumb}`">
                <source type="video/mp4" :src="`/assets/videos/${portfolio.video_thumb.replace('.webm', '.mp4')}`">
            </video>
            <h2 v-html="portfolio.title"></h2>
            <div class="intro">
                <p>{{ portfolio.description }}</p>
            </div>
        </div>
        <NuxtLink class="section_image_link" :to="portfolio._path"><span class="sr-only">More info about {{ portfolio.title }}</span>
        </NuxtLink>
    </article>
</template>

<script>
export default {
    props: ['portfolio'],
    computed: {
        cardSize() {
            return this.portfolio.card_size ?? ''
        }
    }
}
</script>