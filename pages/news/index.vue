<template>
  <section>
    <div class="bx--grid">
      <section class="news-header">
        <div class="bx--row">
          <div class="bx--col-md-12 bx--col-lg-12">
            <h3>Новости группы компаний А1</h3>
          </div>
          <div class="bx--col-md-2 bx--col-lg-2">
            <cv-dropdown placeholder="Время статьи">
              <cv-dropdown-item value="Last month">
                Последний месяц
              </cv-dropdown-item>
              <cv-dropdown-item value="Last year">
                Последний год
              </cv-dropdown-item>
            </cv-dropdown>
          </div>
          <div class="bx--col-md-2 bx--col-lg-2">
            <cv-dropdown placeholder="Категория">
              <cv-dropdown-item value="Антитела">
                Антитела
              </cv-dropdown-item>
              <cv-dropdown-item value="Техсервис">
                Техсервис
              </cv-dropdown-item>
              <cv-dropdown-item value="Техсервис">
                Здоровье
              </cv-dropdown-item>
            </cv-dropdown>
          </div>
        </div>
      </section>
      <div class="bx--row">
        <div class="bx--col-md-16 bx--col-lg-16 pagination">
          <cv-pagination
            :backward-text="backwardsText"
            :forward-text="forwardsText"
            :page-number-label="pageNumberLabel"
            :page-sizes-label="pageSizesLabel"
            :number-of-items="numberOfItems"
            :page="page"
            :page-sizes="pageSizes"
          >
            <template
              v-slot:range-text="{scope}"
            >
              с {{ scope.start }} по {{ scope.end }} из {{ scope.items }}
            </template>
          </cv-pagination>
        </div>
      </div>
      <div class="bx--row">
        <blog-preview
          v-for="post in posts"
          :id="post.id"
          :key="post.id"
          :title="post.title"
          :post-preview="post.preview"
          :post-date="post.date"
          :post-image="post.previewImage"
        />
      </div>
      <div class="bx--row">
        <div class="bx--col-md-16 bx--col-lg-16 pagination">
          <cv-pagination
            :backward-text="sText"
            :forward-text="forwardsText"
            :page-number-label="pageNumberLabel"
            :page-sizes-label="pageSizesLabel"
            :number-of-items="numberOfItems"
            :page="page"
            :page-sizes="pageSizes"
          >
            <template
              v-slot:range-text="{scope}"
            >
              From {{ scope.start }} to {{ scope.end }} out of {{ scope.items }}
            </template>
          </cv-pagination>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlogPreview from '@/components/BlogPreview.vue'

export default {
  components: { BlogPreview },
  asyncData (context) {
    return context.app.$storyapi
      .get('cdn/stories', {
        version: 'draft',
        starts_with: 'blog/'
      }
      ).then((res) => {
        return {
          posts: res.data.stories.map((bp) => {
            return {
              id: bp.slug,
              title: bp.content.Title,
              preview: bp.content.PreviewText,
              date: bp.content.Date,
              previewImage: bp.content.ImagePreview
            }
          })
        }
      })
  },
  head () {
    return {
      title: 'Новости'
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/carbon-utils.scss";

.news-header {
  padding-top: $layout-04;
  padding-bottom: $layout-04;
}

.pagination {
  margin-bottom: $layout-02;
  margin-top: $layout-02;
}
</style>
