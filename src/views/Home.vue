<template>
  <div class="home">
    <div class="home-top py-8 flex items-center">
      <button class="btn mr-10"><i class="icon-arrow mr-3"></i>Back</button>
      <div class="home-top__asset text-white mr-6">
        <i class="icon-exchange mr-2.5"></i>
         BTC/USDT
      </div>
      <i class="icon-star mr-3 cursor-pointer"></i>
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
    <div class="home-body">
      <div class="home-block">
        <div class="home-block__item">
          <div class="flex items-start">
            <div class="item-count">40347.39</div>
            <i class="icon-arrow-top rotate"></i>
          </div>
          <div>
            <span>-1229.50</span>
            <span class="ml-2.5">-3.08%</span>
          </div>
        </div>
        <div class="home-block__item">
          <i class="icon-arrow-top"></i>
          <div class="item-title">Highest</div>
          <div class="item-count">40347.39</div>
        </div>
        <div class="home-block__item">
          <i class="icon-arrow-top rotate"></i>
          <div class="item-title">Lowest</div>
          <div class="item-count">38582.97</div>
        </div>
        <div class="home-block__item">
          <i class="icon-today-price"></i>
          <div class="item-title">Today’s Open Price</div>
          <div class="item-count">39969.98</div>
        </div>
        <div class="home-block__item">
          <i class="icon-door"></i>
          <div class="item-title">Yesterday’s Close Price</div>
          <div class="item-count">39969.98</div>
        </div>
      </div>
      <div class="home-chart mt-11 mb-4">
        <canvas ref="chart" id="chart"></canvas>
      </div>
    </div>
    <div class="home-footer flex items-center p-8 mb-10">
      <button class="btn px-9">
        <i class="icon-order mr-3"></i>
        Order
      </button>
      <button class="btn ml-auto btn-green px-5 py-2.5">38742.95 <span class="ml-2.5">Buy</span></button>
      <button class="btn btn-red ml-5 px-5 py-2.5">38738.63 <span class="ml-2.5">Sell</span></button>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default {
  name: 'Home',
  data: () => ({
    tabs: ['Level', 'Deposit', 'Withdrawl'],
    tabActive: 'Withdrawl'
  }),
  components: {},
  mounted () {
    // eslint-disable-next-line no-unused-vars
    const chart = new Chart(this.$refs.chart, {
      type: 'line',
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        datasets: [{
          label: 'Test',
          data: [30, 40, 25, 30, 25, 20, 25, 35, 45],
          backgroundColor: [
            'white'
          ],
          borderColor: '#ED983B',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              drawBorder: true,
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          y: {
            grid: {
              drawBorder: true,
              color: 'rgba(255, 255, 255, 0.1)'
            }
          }
        }
      }
    })
  }
}
</script>
