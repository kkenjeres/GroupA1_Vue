<template>
  <div>
    <section
      class="title"
      :style="{ backgroundImage: 'url(' + require('@/assets/img/53.jpg') + ')' }"
    >
      <div class="bx--grid">
        <div class="bx--row serv-title">
          <div class="bx--col-md-8 bx--col-lg-8">
            <h2>История группы компаний А1</h2>
            <p>Группа компаний А1 поможет предотвратить проблемы и оптимизировать рабочие процессы в Вашей медицинской организации. Применим разумные технологии с пользой. Вместе.</p>
          </div>
        </div>
      </div>
    </section>
    <div class="bx--grid">
      <div class="bx--row history-layout">
        <div class="bx--col-lg-16">
          <section class="big-wrapper">
            <article class="timeline">
              <nav class="timeline__nav">
                <ul>
                  <li v-for="story in history" :key="story.year">
                    <span>{{ story.year }}</span>
                  </li>
                </ul>
              </nav>
              <section class="timeline__section">
                <div class="wrapper">
                  <div v-for="story in history" :key="story.year">
                    <h2 class="milestone">
                      {{ story.year }}
                    </h2>
                    <div v-for="(item, index) in story.description.items" :key="index">
                      <h4>{{ item.title }}</h4>
                      <p>{{ item.desItem }}</p>
                    </div>
                  </div>
                </div>
              </section>
            </article>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  asyncData (context) {
    return context.app.$storyapi
      .get('cdn/stories/history', {
        version: 'draft'
      })
      .then((res) => {
        return {
          history: res.data.story.content.body.map((fp) => {
            return {
              year: fp.Year,
              description: {
                items: fp.Description.map((hs) => {
                  return {
                    title: hs.Title,
                    desItem: hs.ItemDescription
                  }
                })
              }
            }
          })
        }
      })
  },
  mounted: () => {
    let stickyTop = 0
    let scrollTarget = false

    const timeline = $('.timeline__nav')
    const items = $('li', timeline)
    const milestones = $('.timeline__section .milestone')
    const offsetTop = parseInt(timeline.css('top'))

    const TIMELINE_VALUES = {
      start: 400,
      step: 30
    }

    $(window).resize(function () {
      timeline.removeClass('fixed')

      stickyTop = timeline.offset().top - offsetTop

      $(window).trigger('scroll')
    }).trigger('resize')

    $(window).scroll(function () {
      if ($(window).scrollTop() > stickyTop) {
        timeline.addClass('fixed')
      } else {
        timeline.removeClass('fixed')
      }
    }).trigger('scroll')

    items.find('span').click(function () {
      const li = $(this).parent()
      const index = li.index()
      const milestone = milestones.eq(index)

      if (!li.hasClass('active') && milestone.length) {
        scrollTarget = index

        const scrollTargetTop = milestone.offset().top - 80

        $('html, body').animate({ scrollTop: scrollTargetTop }, {
          duration: 400,
          complete: function complete () {
            scrollTarget = false
          }
        })
      }
    })

    $(window).scroll(function () {
      const viewLine = $(window).scrollTop() + $(window).height() / 3
      let active = -1

      if (scrollTarget === false) {
        milestones.each(function () {
          if ($(this).offset().top - viewLine > 0) {
            return false
          }

          active++
        })
      } else {
        active = scrollTarget
      }

      timeline.css('top', -1 * active * TIMELINE_VALUES.step + TIMELINE_VALUES.start + 'px')

      items.filter('.active').removeClass('active')

      items.eq(active !== -1 ? active : 0).addClass('active')
    }).trigger('scroll')
  }
}
</script>

<style lang='scss' scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/carbon-utils.scss";

.history-layout {
  padding-bottom: $layout-05;
}

.title {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
}

.serv-title {
  margin-bottom: $layout-05;
  padding-top: $layout-06;
  padding-bottom: $layout-06;

  color: white;

  p {
    font-size: 1.2rem;
    padding-top: $layout-02;
    font-weight: 100;
  }
}

.big-wrapper {
  transform: none;
  position: relative;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

.wrapper {
  // margin: 0 auto;
  padding: 0 16.66% 50px;
  width: 100%;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: $layout-02;
  }
  h4 {
    margin-bottom: $layout-01;
    margin-top: $layout-01;
  }
}

article {
  position: relative;
  // max-width: 980px;
  // margin: 0 auto;
}

.timeline {
  &__nav {
    display: block;
    position: fixed !important;
    z-index: 99;
    top: 0;
    transition: top 0.3s ease-out;

    ul {
      list-style: none;
      list-style-position: inside;
      margin: 15px 0;

      li {
        margin: 15px 0;
        font-size: 1rem;
        padding-left: 0;
        list-style-type: none;
        color: #bfc1c3;
        border-bottom: 1px dotted rgba(0, 0, 0, 0.3);
        cursor: pointer;
        transition: all 0.3s ease-out;

        &.active {
          font-weight: bold;
          font-size: 1.2rem;
          color: #0043ce;
          border-bottom: 1px dotted transparent;
          transform: scale(1.2);
        }

        &:hover {
          color: #000;
        }
      }
    }
  }
}
</style>
