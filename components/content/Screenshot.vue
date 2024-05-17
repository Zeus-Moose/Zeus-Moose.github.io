<template>
    <div class="screenshot">
        <img :src="image" :alt="alt">
        <p class="caption" v-if="title">{{ title }}</p>
    </div>
</template>

<script>
export default {
    props: ['title', 'image', 'alt'],
}
</script>
