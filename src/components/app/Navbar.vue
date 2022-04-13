<template>
  <nav class="navbar flex">
    <div class="navbar-left flex items-center">
      <h4>模拟持仓</h4>
      <div class="navbar-left__item ml-10 mr-12 flex items-center">
        <i class="icon-sound"></i>
        <h5 class="text-gray-light ml-2.5">用BTC可以赚BTC啦! 杠杆高达100倍</h5>
      </div>
      <h5 class="text-blue">查看详情</h5>
    </div>

    <ul class="navbar-right flex ml-auto items-center">

      <AppSelect
        class="center"
        :lable="'Assets'"
        :options="assetsOptions"
        @select="selectAssets"
      />

      <AppSelect
        class="ml-7 mr-10 center"
        :lable="'Order History'"
        :options="orderOptions"
        @select="selectOrder"
      />

      <li class="navbar-right__item mr-9">
        <a href="#">
          <i class="icon-alarm"></i>
          <div class="notification"></div>
        </a>
      </li>
      <li class="navbar-right__item mr-9"><a href="#"><i class="icon-email"></i></a></li>
      <li class="navbar-right__item navbar-account"
        :class="{'active': dropdown}"
        v-outside="accountOutside"
        @click="dropdown = !dropdown"
      >
        <div class="flex items-center cursor-pointer">
          <div class="navbar-account__img">
            <img src="img/user.png" alt="">
          </div>
          <span class="name">{{ name }}</span>
          <i class="icon-arrow"></i>
        </div>

        <ul class="dropdown">
          <li class="dropdown-item"><a href="#">Menu</a></li>
          <li class="dropdown-item"><a href="#">Menu</a></li>
          <li class="dropdown-item"><a href="#">Menu</a></li>
          <li class="dropdown-item"><a href="#">Menu</a></li>
          <li class="dropdown-item"><a href="#">Menu</a></li>
          <li class="divider"></li>
          <li class="dropdown-item logout"><a href="#">Logout</a></li>
        </ul>
      </li>

      <AppSelect
        class="ml-7 right"
        :lable="language"
        :options="languageOptions"
        @select="selectLanguage"
      />
    </ul>
  </nav>
</template>

<script>
import clickOutsideMixin from '@/mixins/clickOutside.mixin'
import AppSelect from '@/components/ui/AppSelect'

export default {
  name: 'Navbar',
  mixins: [clickOutsideMixin],
  data: () => ({
    name: 'Kevine Harry',
    language: 'En',
    languageOptions: [
      { name: '简体中文', code: 'Zh' },
      { name: 'English', code: 'En' }
    ],
    assetsOptions: ['Funding Details', 'Balances', 'Order Details'],
    orderOptions: ['Futures', 'Spot'],
    dropdown: false
  }),
  components: {
    AppSelect
  },
  methods: {
    accountOutside () {
      this.dropdown = false
    },
    selectLanguage (option) {
      this.language = option.code
    },
    selectAssets (option) {

    },
    selectOrder (option) {

    }
  }
}
</script>
