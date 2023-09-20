<template>
  <div :class="{'blink-zeus': (whoBlinked === 'zeus'), 'blink-moose': (whoBlinked === 'moose')}">
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
      <div id="main-container">
        <slot />
      </div> <!-- #main-container -->
    </div><!-- #all_wrapper -->
    <div id="footer-wrapper">
      <div id="footer-container">
        <footer id="footer-inside">
          <p>
            <a href="mailto:hello@zeusmoose.com">hello@zeusmoose.com</a> &bull; <NuxtLink to="/privacy">
              privacy policy
            </NuxtLink>
          </p>
          <p class="footer-small">
            unless otherwise stated, all content <span class="copyright">©</span> {{ new Date().getFullYear()
            }} Ben
            Newton
          </p>
        </footer>
        <div id="footer-middle" />
        <div id="footer-background">
          <div id="zeus_peek" :class="error ? 'moose_shrug' : ''">
            <ZeusPeek v-if="!error" />
            <MooseShrug v-else />
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
  data () {
    return {
      menuTimer: null,
      showMenu: false,
      whoBlinked: 'zeus',
      blinkTimeout: null,
      error: useState('siteError'),
    }
  },
  watch: {
    $route (to, from) {
      this.showMenu = false
    }
  },
  methods: {
    menuLeave() {
      clearTimeout(this.menuTimer)
      this.menuTimer = setTimeout(() => {
        this.showMenu = false
      }, 500)
    },
    menuEnter() {
      clearTimeout(this.menuTimer)
    },
    menuToggle() {
      this.showMenu = !this.showMenu
    },
    blink() {
      const rand = Math.round(Math.random() * 6000) + 3000
      this.blinkTimeout = setTimeout(() => {
        this.whoBlinked = (this.whoBlinked === 'zeus' ? 'moose' : 'zeus')
        this.blink()
      }, rand)
    },
  },
  mounted() {
    this.blink()
  }
}
</script>
