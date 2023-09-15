<template>
    <a :alt="title" title="item.title" :href="image">
        <img :src="thumb">
    </a>
</template>

<script>
export default {
    props: ['title', 'image', 'thumb'],
}
</script>
