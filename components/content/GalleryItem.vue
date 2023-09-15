<template>
    <a :alt="title" title="item.title" :href="image" @click.prevent="openModal">
        <img :src="thumb">
    </a>
    <div :class="modalOpen ? 'modalWrapper modalOpen' : 'modalWrapper'" @click.prevent="closeModal">
        <div class="modal">
            <img :src="image">
            <p class="caption" v-if="title">{{ title }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'image', 'thumb'],
    created() {
        window.addEventListener('keyup', (event) => {
            if (event.key === 'Escape') {
                this.closeModal()
            }
        })
    },
    data () {
        return {
            modalOpen: false
        }
    },
    methods: {
        openModal() {
            this.modalOpen = true
        },
        closeModal() {
            this.modalOpen = false
        }
    }
}
</script>
