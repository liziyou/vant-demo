<template>
  <div>
    <img class="user-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">
    <van-row class="user-links">
      <van-col v-for="img in payImgs" :key="img.id" span="4" @click="goOrder(img)">
        <div class="item">
          <img :src="img.url">
          {{ img.name }}
        </div>
      </van-col>
    </van-row>
    <van-cell-group class="user-group">
      <van-cell icon="orders-o" title="全部订单" is-link @click="goOrder({id: 0})" />
    </van-cell-group>
    <van-cell-group>
      <van-cell icon="location-o" title="地址管理" is-link to="/address" />
      <van-cell icon="chat-o" title="联系店铺" is-link />
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
      <van-cell icon="gift-o" title="我收到的礼物" @click.native="handleClose" />
    </van-cell-group>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup, Image } from 'vant'
export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [Image.name]: Image,
    [CellGroup.name]: CellGroup
  },
  data() {
    return {
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
      ]
    }
  },
  methods: {
    goOrder(img) {
      this.$router.push({ name: 'order', query:
      {
        search: img.id
      }})
    },
    handleClose() {
      try {
        window.location.href = 'about:blank'
        window.open(window.location.href, '_self').close()
      } catch (e) {
        console.log(';;')
      }
    }
  }
}
</script>

<style lang="less" scope>
.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }

  &-group {
    margin-bottom: 15px;
  }

  &-links {
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    .item {
      flex: 1;
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
      -ms-flex-align: center;
      align-items: center;
    }
    img {
      width: 38px;
      height: 38px;
    }
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>
