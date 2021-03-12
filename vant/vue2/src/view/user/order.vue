<template>
  <div>
    <van-nav-bar
      title="订单"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-tabs v-model="active">
      <van-tab v-for="(item,index) in orderCategory" :key="index" :title="item.name">
        内容 {{ index }}
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
import { Tabs, Tab, NavBar } from 'vant'
export default {
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [NavBar.name]: NavBar
  },
  data() {
    return {
      active: 0,
      payImgs: [
        {
          id: 1,
          url: require('/static/images/user/index/icon-01.png'),
          name: '待付款'
        },
        {
          id: 2,
          url: require('/static/images/user/index/icon-02.png'),
          name: '待发货'
        },
        {
          id: 3,
          url: require('/static/images/user/index/icon-03.png'),
          name: '待收货'
        },
        {
          id: 4,
          url: require('/static/images/user/index/icon-04.png'),
          name: '交易完成'
        },
        {
          id: 5,
          url: require('/static/images/user/index/icon-05.png'),
          name: '退款/售后'
        }
      ],
      orderCategory: [
        {
          id: 0,
          name: '全部'
        },
        {
          id: 1,
          name: '待付款'
        },
        {
          id: 2,
          name: '待发货'
        },
        {
          id: 3,
          name: '待收货'
        },
        {
          id: 4,
          name: '交易完成'
        },
        {
          id: 5,
          name: '退款/售后'
        }
      ]
    }
  },
  created() {
    this.active = this.$route.query.search
  },
  methods: {
    onClickLeft() {
      this.$router.back(-1)
    }
  }

}

</script>

<style lang="less" scope>

</style>
