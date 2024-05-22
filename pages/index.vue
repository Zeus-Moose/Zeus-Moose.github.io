<template>
  <div>
    <section id="intro" class="wrapper page">
      <h2 class="page-title">
        Creative Technology Consultant
      </h2>
      <p>Hi, I'm Ben. I have over fifteen year's experience making websites and web-apps. I bring web technologies into the real world, making user engagement interactive through touch, movement, and sound.</p><p>Below is a selection of work from my portfolio, have a look and see what I can do!</p>
    </section>

    <div id="portfolio" class="portfolio-grid">
      <template v-for="(portfolio, index) in data" :key="index">
        <PortfolioCard :portfolio="portfolio" :preload="index === 0"/>
      </template>
    </div>

    <section id="outro" class="wrapper page">
      <h2> Like what you see?</h2>
      <p>
        If you'd like to know more about any of these projects please don't hesitate to get in <NuxtLink to="contact">contact</NuxtLink>,
        or have a look at my full list of <NuxtLink to="about">services</NuxtLink>.
      </p>
    </section>
  </div>
</template>


<script setup>
  import { videoLoops } from '@/helpers/utilities.js'

  const runtimeConfig = useRuntimeConfig()
  
  const { data } = await useAsyncData(() => queryContent('/portfolio/').find())
  const portfolioItems = toRaw(data.value)
  useHead({
    title: `Zeus Moose`,
    meta: [
      { property: 'og:title', content:  'Zeus Moose' },
      { name: 'twitter:title', content:  'Zeus Moose' },

      { name: 'description', content: 'Hi, I\'m Ben. I have over fifteen year\'s experience making websites and web-apps. I bring web technologies into the real world, making user engagement interactive through touch, movement, and sound.' },
      { property: 'og:description', content: 'Hi, I\'m Ben. I have over fifteen year\'s experience making websites and web-apps. I bring web technologies into the real world, making user engagement interactive through touch, movement, and sound.' },
      { name: 'twitter:description', content: 'Hi, I\'m Ben. I have over fifteen year\'s experience making websites and web-apps. I bring web technologies into the real world, making user engagement interactive through touch, movement, and sound.' },
      
      { name: 'twitter:image', content: `${runtimeConfig.public.domain}assets/images/zeus_moose.png`},
      { property: 'og:image', content: `${runtimeConfig.public.domain}assets/images/zeus_moose.png`},
    ],
    link: [
      { rel: 'preload', as: 'image', href: `${runtimeConfig.public.domain}assets/images/covers/${portfolioItems[0].thumbnail}` }
    ]
  })
  


  onMounted(() => {
    videoLoops()
  })
</script>
<script>
import { onMounted } from 'vue';
import PortfolioCard from '~/components/PortfolioCard.vue';
export default {
  components: {
    PortfolioCard
  },

  methods: {
  }
}
</script>

