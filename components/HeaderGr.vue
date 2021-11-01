<template>
  <cv-header aria-label="Carbon header">
    <cv-header-menu-button aria-label="Header menu" aria-controls="side-nav" @click="expandSide" />
    <cv-skip-to-content href="#main-content">
      Skip to content
    </cv-skip-to-content>
    <cv-header-name to="/" prefix="A1 - ">
      Group
    </cv-header-name>
    <cv-header-nav aria-label="Carbon nav">
      <cv-header-menu-item to="/about">
        О нас
      </cv-header-menu-item>
      <cv-header-menu-item to="/history">
        История
      </cv-header-menu-item>
      <cv-header-menu-item to="/products">
        Каталог
      </cv-header-menu-item>
      <cv-header-menu-item to="/services">
        Услуги
      </cv-header-menu-item>

      <cv-header-menu-item to="/news">
        Новости
      </cv-header-menu-item>
      <cv-header-menu-item to="/deliver">
        Доставка
      </cv-header-menu-item>
      <cv-header-menu-item to="/faq">
        FAQ
      </cv-header-menu-item>
      <cv-header-menu-item to="/contact">
        Контакты
      </cv-header-menu-item>
    </cv-header-nav>
    <template slot="header-global">
      <cv-header-global-action aria-label="App switcher" aria-controls="switcher-panel">
        <AppSwitcher20 />
      </cv-header-global-action>
    </template>
    <template v-show="areLeftPanels" slot="left-panels">
      <cv-side-nav id="side-nav" fixed>
        <cv-side-nav-items>
          <cv-header-side-nav-items>
            <cv-header-menu-item to="/about">
              О нас
            </cv-header-menu-item>
            <cv-header-menu aria-label="catalog" title="Каталог">
              <cv-header-menu-item href="javascript:void(0)">
                Submenu Link 1
              </cv-header-menu-item>
              <cv-header-menu-item href="javascript:void(0)">
                Submenu Link 2
              </cv-header-menu-item>
              <cv-header-menu-item href="javascript:void(0)">
                Submenu Link 3
              </cv-header-menu-item>
            </cv-header-menu>
            <cv-header-menu aria-label="Services" title="Услуги">
              <cv-header-menu-item href="javascript:void(0)">
                Submenu Link 1
              </cv-header-menu-item>
              <cv-header-menu-item href="javascript:void(0)">
                Submenu Link 2
              </cv-header-menu-item>
              <cv-header-menu-item href="javascript:void(0)">
                Submenu Link 3
              </cv-header-menu-item>
            </cv-header-menu>

            <cv-header-menu-item href="javascript:void(0)">
              Блог
            </cv-header-menu-item>
            <cv-header-menu-item to="deliver">
              Доставка
            </cv-header-menu-item>
            <cv-header-menu-item to="contact">
              Контакты
            </cv-header-menu-item>
            <cv-header-menu-item to="faq">
              FAQ
            </cv-header-menu-item>
          </cv-header-side-nav-items>
        </cv-side-nav-items>
      </cv-side-nav>
    </template>
  </cv-header>
</template>

<script>
import AppSwitcher20 from '@/node_modules/@carbon/icons-vue/es/app-switcher/20'

export default {
  components: { AppSwitcher20 },
  data () {
    return {
      areLeftPanels: false
    }
  },
  methods: {
    expandSide () {
      this.areLeftPanels = !this.areLeftPanels
    }
  }
}
</script>
