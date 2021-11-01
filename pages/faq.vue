<template>
  <section>
    <section
      class="faq"
      :style="{ backgroundImage: 'url(' + require('@/assets/img/57.jpg') + ')' }"
    >
      <div class="bx--grid">
        <div class="bx--row">
          <div class="bx--col-md-8 bx--col-lg-8">
            <h1>Вопрос-ответ</h1>
          </div>
        </div>
      </div>
    </section>
    <faq-group v-for="faq in faqs" :key="faq.titleGroup" :title="faq.titleGroup">
      <cv-accordion ref="acc">
        <cv-accordion-item v-for="(ite, index) in faq.item.question" :key="index">
          <template slot="title">
            {{ ite }}
          </template>
          <template slot="content">
            <p>{{ faq.item.answer[index] }}</p>
          </template>
        </cv-accordion-item>
      </cv-accordion>
    </faq-group>
  </section>
</template>

<script>
import FaqGroup from '@/components/FaqGroup.vue'
export default {
  components: { FaqGroup },
  asyncData (context) {
    return context.app.$storyapi
      .get('cdn/stories/faq', {
        version: 'draft'
      })
      .then((res) => {
        return {
          faqs: res.data.story.content.body.map((fp) => {
            return {
              titleGroup: fp.titleGroup,

              item: {
                question: fp.faqGroupBlock.map((fq) => {
                  return fq.Question
                }
                ),
                answer: fp.faqGroupBlock.map((fa) => {
                  return fa.Answer
                })

              }
            }
          })
        }
      })
  },
  head () {
    return {
      title: 'Вопросы и ответы'
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/carbon-utils.scss";

.faq {
  background-color: $ui-05;
  padding-top: $layout-07;
  padding-bottom: $layout-07;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;

  h1 {
    color: #ffffff;
  }
}
.faq-space {
  padding-top: $layout-06;
  padding-bottom: $layout-06;
}

.pt-faq-1 {
  padding-top: $layout-07;
}
</style>
