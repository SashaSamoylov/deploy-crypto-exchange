<template>
  <div class="home">
    <div class="home-top m:py-8 m:flex items-center">
      <div class="home-top__left flex items-center">
        <button class="btn mr-10"><i class="icon-arrow mr-3"></i>Back</button>
        <div class="home-top__asset text-white mr-6">
          <i class="icon-exchange mr-2.5"></i>
          BTC/USDT
        </div>
        <div>
          <i class="icon-star mr-3 cursor-pointer"></i>
          <i class="icon-info"></i>
        </div>
      </div>
      <div class="home-top__tabs tabs-btn flex ml-auto">
        <div class="tab-item"
          v-for="tab in tabs"
          :key="tab"
          :class="{'active': tabActive === tab}"
          @click="tabActive = tab"
        >{{ tab }}</div>
      </div>
    </div>
    <div class="home-body">
      <div class="home-block">
        <div class="home-block__item item1">
          <div class="flex items-start">
            <div class="item-count">40347.39</div>
            <i class="icon-arrow-top rotate"></i>
          </div>
          <div>
            <span>-1229.50</span>
            <span class="ml-2.5">-3.08%</span>
          </div>
        </div>
        <div class="home-block__item item2">
          <i class="icon-arrow-top"></i>
          <div class="item-title">Highest</div>
          <div class="item-count">40347.39</div>
        </div>
        <div class="home-block__item item3">
          <i class="icon-arrow-top rotate"></i>
          <div class="item-title">Lowest</div>
          <div class="item-count">38582.97</div>
        </div>
        <div class="home-block__item item4">
          <i class="icon-today-price"></i>
          <div class="item-title">Today’s Open Price</div>
          <div class="item-count">39969.98</div>
        </div>
        <div class="home-block__item item5">
          <i class="icon-door"></i>
          <div class="item-title">Yesterday’s Close Price</div>
          <div class="item-count">39969.98</div>
        </div>
      </div>

      <AppChart class="mt-11" />

    </div>
    <div class="home-footer flex items-center m:p-8 mb-10">
      <button class="btn m:px-9">
        <i class="icon-order m:mr-3"></i>
        Order
      </button>
      <button class="btn ml-auto btn-green px-5 py-2.5">38742.95 <span class="ml-2.5">Buy</span></button>
      <button class="btn btn-red ml-5 px-5 py-2.5">38738.63 <span class="ml-2.5">Sell</span></button>
    </div>
  </div>
</template>

<script>
import AppChart from '@/components/app/AppChart'

export default {
  name: 'Home',
  data: () => ({
    tabs: ['Level', 'Deposit', 'Withdrawl'],
    tabActive: 'Withdrawl'
  }),
  components: {
    AppChart
  }
}
</script>
