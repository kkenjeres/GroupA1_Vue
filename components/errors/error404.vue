<template>
  <div class="bx--grid bx--grid--full-width">
    <div class="bx--row error-row">
      <div class="center-error">
        <div class="bx--col-lg-8">
          <h2>Что-то пошло не так...</h2>
          <p>
            Извините, но мы не можем найти страницу, которую вы ищете.
            <br>Может быть, некоторые из этих самых посещаемых ссылок помогут вам?
          </p>
          <cv-button kind="tertiary" @click="home">
            На главную
          </cv-button>
        </div>
        <div class="bx--col-lg-8">
          <span>404</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    home () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss">
.error-row {
  height: 70vh;
}
.center-error {
  display: flex;
  width: 100%;
  align-items: center;
  span {
    font-size: 200px;
    font-weight: 400;
    color: #0043ce;
  }

  h2 {
    padding-bottom: 2rem;
  }
  p {
    padding-bottom: 1rem;
  }
}
</style>
