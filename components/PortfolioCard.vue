<template>
    <article class="block block_link mini_block" :class="cardSize" @mouseover="hover()">
        <div class="section_image">
            <video
                ref="video"
                muted="true"
                @ended="ended()"
                :autoplay="playing"
                :poster="`/assets/images/covers/${portfolio.thumbnail}`"
            >
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
    props: [
        'portfolio',
        'playing',
        'id'
    ],
    computed: {
        cardSize() {
            return this.portfolio.card_size ?? ''
        },
    },
    emits: [
        'play'
    ],
    methods: {
        hover() {
            this.$emit('play', this.id)
        },
        ended() {
            this.$emit('play', this.id + 1)
        }
        
    },
    // watch: { 
    //     playing: {
    //         handler(newValue) {
    //             console.log(newValue)
    //             this.updatePlaying(newValue)
    //         }
    //     }
    // }
}
</script>
