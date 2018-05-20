<template>
<div>
    <div class="app-header" v-if="loadheader">
        <NavbarHeader />
    </div>
    <div class="app-content">
        <transition :name="'router-fade-' + (direction == 'forward' ? 'in' : 'out')">
            <keep-alive>            
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
    <div class="app-footer">
        <NavbarFooter />
    </div>
</div>
</template>

<script>
import NavbarHeader from '@/components/Navbar_Header'
import NavbarFooter from '@/components/Navbar_Footer'
import { mapState } from 'vuex'

export default {
  name: 'Index',
  data () {
    return {
    }
  },
  components: {
    NavbarHeader,
    NavbarFooter
  },
  computed:{
    ...mapState([
        'direction',
        'loadheader'
    ])
  }
}
</script>

<style>
/* html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
} */
html, body {
  width: 100%;
  height: 100%;
}

.router-fade-out-enter-active,
.router-fade-out-leave-active,
.router-fade-in-enter-active,
.router-fade-in-leave-active {
  will-change: transform;
  transition: all 250ms;
  height: 100%;
  top: 0;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.router-fade-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.router-fade-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.router-fade-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.router-fade-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
