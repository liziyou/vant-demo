<template>
  <div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import { AddressList, Toast, NavBar, Icon } from 'vant'
export default {
  components: {
    [AddressList.name]: AddressList,
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    Icon
  },
  data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]
    }
  },
  methods: {
    onAdd() {
      this.$router.push({ name: 'edit' })
    },
    onEdit(item, index) {
      Toast('编辑地址:' + index)
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

    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
.my-swipe {
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    top:40px;
    background-color:#fff;
    height: 300px;
    img {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 240px;
      padding: 30px 60px;
      background-color: #fff;
      pointer-events: none;
    }
  }
  .van-swipe__indicator {
    background: gray;
  }
}
</style>
