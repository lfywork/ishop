<template>
<div>
    <div class="app-header">
        <NavbarHeader />
    </div>
    <div class="app-content">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
    <div class="app-footer">
        <NavbarFooter />
    </div>
</div>
</template>

<script>
import NavbarHeader from '@/components/Navbar_Header'
import NavbarFooter from '@/components/Navbar_Footer'

export default {
  name: 'Layout',
  components: {
    NavbarHeader,
    NavbarFooter
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
</style>
