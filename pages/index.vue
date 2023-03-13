<template>
  <div>
    <section id="intro" class="wrapper page">
      <h2 class="page-title">
        Creative Technology Consultant
      </h2>
      <p>Hi, I'm Ben. I have over fifteen year's experience making websites and web-apps. I bring web technologies into the real world, making user engagement interactive through touch, movement, and sound.</p><p>Below is a selection of work from my portfolio, have a look and see what I can do!</p>
    </section>

    <div id="portfolio" class="portfolio-grid">
      <template v-for="portfolio in data">
        <PortfolioCard :portfolio="portfolio" />
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
  const { data } = await useAsyncData(() => queryContent('/portfolio/').find())

  useHead({
    title: () => `Zeus Moose`,
    description: () => '',
  })
</script>
<script>
import PortfolioCard from '~/components/PortfolioCard.vue';
export default {
  components: {
    PortfolioCard
  }
}
</script>

