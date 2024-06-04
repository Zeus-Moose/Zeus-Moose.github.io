<template>
  <div>
    <div class="all_wrapper">
      <div id="header-wrapper">
        <header id="header-container">
          <Nuxt-link id="title" to="/">
            <h1><ZeusMooseLogo /><span>Zeus Moose</span></h1>
          </Nuxt-link>
          <button
            title="Menu"
            class="mobile-menu-toggle"
            @click="menuToggle"
            @mouseenter="menuEnter"
            @mouseleave="menuLeave"
          ><span /><span /><span /></button>
          <nav
            id="main"
            :class="{ show: showMenu }"
            @mouseenter="menuEnter"
            @mouseleave="menuLeave"
          >
            <NuxtLink to="/#portfolio">
              portfolio
            </NuxtLink><NuxtLink to="/about">
              about
            </NuxtLink><NuxtLink to="/contact">
              contact
            </NuxtLink>
          </nav>
        </header>
      </div>
      <div id="main-container" class="">
        <slot />
      </div> <!-- #main-container -->
    </div><!-- #all_wrapper -->
    <div id="footer-wrapper">
      <div id="footer-container">
        <footer id="footer-inside" class="">
          <p>
            <a href="mailto:hello@zeusmoose.com">hello@zeusmoose.com</a> &bull; <NuxtLink to="/privacy">
              privacy policy
            </NuxtLink>
          </p>
          <p>
            unless otherwise stated, all content <span class="copyright">©</span> {{ new Date().getFullYear()
            }} Ben
            Newton
          </p>
        </footer>
        <div id="footer-middle" />
        <div id="footer-background">
          <div id="zeus_peek">
            <ZeusPeek />
          </div>
          <div id="moose_shrug">
            <MooseShrug />
          </div>
        </div>

        <svg id="svg-image-blur">
          <filter id="blur-effect-1">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  script: [{ children: "var _paq = window._paq = window._paq || []; _paq.push(['trackPageView']); _paq.push(['enableLinkTracking']); (function() { var u='https://analytics.zeusmoose.com/'; _paq.push(['setTrackerUrl', u+'matomo.php']); _paq.push(['setSiteId', '2']); var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0]; g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s); })();" }]
});
</script>
<script>
import ZeusMooseLogo from '../components/ZeusMooseLogo.vue'
import ZeusPeek from '../components/ZeusPeek.vue'
import MooseShrug from '../components/MooseShrug.vue'
export default {
  name: 'MainTemplate',
  components: {
    ZeusMooseLogo,
    ZeusPeek,
    MooseShrug
  },
  props: ['error'],
  data () {
    return {
      menuTimer: null,
      showMenu: false
    }
  },
  watch: {
    $route (to, from) {
      this.showMenu = false
    }
  },
  methods: {
    menuLeave () {
      clearTimeout(this.menuTimer)
      this.menuTimer = setTimeout(() => {
        this.showMenu = false
      }, 500)
    },
    menuEnter () {
      clearTimeout(this.menuTimer)
    },
    menuToggle () {
      this.showMenu = !this.showMenu
    }
  }
  
}
</script>
