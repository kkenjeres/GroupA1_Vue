<template>
  <section id="faq-body">
    <div class="bx--grid faq-space">
      <div class="bx--row">
        <div class="bx--col-md-4 bx--col-lg-4">
          <h2>{{ title }}</h2>
        </div>
        <div class="bx--col-md-12 bx--col-lg-12">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

  props: {
    title: String
  }

}
</script>
