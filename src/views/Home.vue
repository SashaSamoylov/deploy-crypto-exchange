<template>
  <div class="home">
    <div class="home-top py-8 flex items-center">
      <button><i class="icon-arrow"></i>Back</button>
      <div class="home-top__asset">
        <i class="icon-exchange"></i>
         BTC/USDT
      </div>
      <i class="icon-star"></i>
      <i class="icon-info"></i>
      <div class="home-top__tabs flex ml-auto">
        <div class="tab-item"
          v-for="tab in tabs"
          :key="tab"
          :class="{'active': tabActive === tab}"
          @click="tabActive = tab"
        >{{ tab }}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    tabs: ['Level', 'Deposit', 'Withdrawl'],
    tabActive: 'Withdrawl'
  }),
  components: {}
}
</script>
