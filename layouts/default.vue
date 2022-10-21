<template>
    <div>
        <div class="all_wrapper">
            <div id="header-wrapper">
                <header id="header-container">
                    <Nuxt-link id="title" to="/">
                        <h1><img alt='zeus moose' class='svg'
                                src='https://www.zeusmoose.com/assets/img/zeus_moose_logo.svg'><span>zeus moose</span>
                        </h1>
                    </Nuxt-link>
                    <a title='Menu' class='mobile-menu-toggle'
                        @click="menuToggle"
                        @mouseenter="menuEnter"
                        @mouseleave="menuLeave"><span></span><span></span><span></span></a>
                    <nav id='main'
                    :class="{ show: showMenu }"
                    @mouseenter="menuEnter"
                    @mouseleave="menuLeave"
                    ><NuxtLink to="/#portfolio">portfolio</NuxtLink><NuxtLink to="/about">about</NuxtLink><NuxtLink to="/contact">contact</NuxtLink></nav>
                </header>
            </div>
            <div id="main-container" class="">
                <Nuxt />
            </div> <!-- #main-container -->
        </div><!-- #all_wrapper -->
        <div id="footer-wrapper">
            <div id="footer-container">
                <footer id="footer-inside" class="">
                    <p><a href='mailto:hello@zeusmoose.com'>hello@zeusmoose.com</a> &bull; <NuxtLink to="/privacy">privacy policy</NuxtLink></p>
                    <p>unless otherwise stated, all content <span class="copyright">©</span> {{ new Date().getFullYear()
                    }} Ben
                        Newton</p>
                </footer>
                <div id="footer-middle">
                </div>
                <div id="footer-background">
                    <div id="zeus_peek">
                        <img alt='zeus moose' class='svg' src='https://www.zeusmoose.com/assets/img/zeus_peek.svg'>
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
    export default {
        name: 'MainTemplate',
        data() {
            return {
                menuTimer: null,
                showMenu: false
            }
        },
        methods: {
            menuLeave() {
                clearTimeout(this.menuTimer);
                this.menuTimer = setTimeout(() => {
                    this.showMenu = false
                }, 500);
            },
            menuEnter() {
                clearTimeout(this.menuTimer)
            },
            menuToggle() {
                this.showMenu = !this.showMenu
            },
        },
        watch: {
            $route(to, from) {
                this.showMenu = false
            }
        }
    }
</script>
