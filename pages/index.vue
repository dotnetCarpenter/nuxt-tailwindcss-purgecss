<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        nuxt-tailwindcss-purgecss
      </h1>
      <h2 class="subtitle">
        purgecss does not work with nuxt in spa mode
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button button__green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button button__grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>
