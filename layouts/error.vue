<template>
  <div class="nuxt-error">
    <component :is="errorPage" :error="error" />
  </div>
</template>

<script>
import error404 from '~/components/errors/error404.vue'
import error500 from '~/components/errors/error500.vue'
export default {
  layout: 'default', // optional
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    errorPage () {
      if (this.error.statusCode === 404) {
        return error404
      }
      return error500
    }
  }
}
</script>
