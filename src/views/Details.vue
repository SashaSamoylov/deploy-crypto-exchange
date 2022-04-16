<template>
  <div class="details py-12">
    <div class="details-card card pt-8 pb-32 px-10">
      <div class="card-header flex mb-5">
        <h4 class="text-white">BTC/USDT 43591.13</h4>
        <p class="text-green ml-8">43609.27 +0.12%</p>
      </div>
      <div class="card-body">
        <div class="border-b border-black pb-5">
          <p>浮动盈亏 USDT</p>
          <p class="text-green text-big">+0.06 <span>/-0.1%</span></p>
          <p>止盈 +300 价格 48020.10 / 止播 -48 价格 42902.44</p>
        </div>
        <div class="flex pt-5">
          <div>
            <p>买入市值 USDT</p>
            <div class="text-white text-big">2965<span>.37</span></div>
            <p>BTC 0.068 个</p>
          </div>
          <div class="ml-20">
            <p>保证金</p>
            <div class="text-white text-big">60<span>.00</span></div>
            <p>杠杆 =49x</p>
          </div>
        </div>
      </div>
      <div class="card-footer mt-14">
        <div class="card-footer__list flex py-3 border-b border-black" @click="isModal = true">
          <div class="list-name"><span class="text-green">买涨</span>价格</div>
          <div class="list-value ml-auto text-white">43608.33</div>
        </div>
        <div class="card-footer__list flex py-3 border-b border-black">
          <div class="list-name"><span class="text-green">买涨</span>时间</div>
          <div class="list-value ml-auto">2022-01-13 13:20:53</div>
        </div>
        <div class="card-footer__list flex py-3 border-b border-black">
          <div class="list-name">平仓价格</div>
          <div class="list-value ml-auto">--</div>
        </div>
        <div class="card-footer__list flex py-3">
          <div class="list-name">平仓时间</div>
          <div class="list-value ml-auto">--</div>
        </div>
      </div>
    </div>

    <Modal
      v-if="isModal"
    />
  </div>
</template>

<script>
import Modal from '@/components/modal/Modal'

export default {
  name: 'Details',
  data: () => ({
    isModal: false
  }),
  components: {
    Modal
  }
}
</script>
