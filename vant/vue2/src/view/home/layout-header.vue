<template>
  <div class="header">
    <van-nav-bar :title="title" left-text="返回" left-arrow :fixed="true">
      <van-icon slot="right" name="search" />
    </van-nav-bar>
    <div class="header-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup, NavBar, Tabbar, TabbarItem, Swipe, SwipeItem, Lazyload } from 'vant'
import Footer from './footer'
import Vue from 'vue'
Vue.use(Lazyload)
export default {
  components: {
    [Row.name]: Row,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [NavBar.name]: NavBar,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    Footer
  },
  data() {
    return {
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  },
  computed: {
    title() {
      return this.$route.meta.title
    }
  }
}
</script>

<style lang="less" scope>
.header {
  &-content {
    margin-top: 60px;
    display: block;
  }
}
</style>
