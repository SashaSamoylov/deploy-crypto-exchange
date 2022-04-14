<template>
  <div class="trade">
    <div class="trade-top py-8 flex items-center">
      <button class="btn mr-10"><i class="icon-arrow mr-3"></i>Back</button>
      <div class="trade-top__tabs tabs-btn flex">
        <div class="tab-item px-3"
          v-for="tabBtn in tabsBtn"
          :key="tabBtn"
          :class="{'active': tabBtnActive === tabBtn}"
          @click="tabBtnActive = tabBtn"
        >{{ tabBtn }}</div>
      </div>
      <div class="trade-top__btns flex ml-auto">
        <div class="btn-item"
          v-for="btn in btns"
          :key="btn"
          :class="{'active': btnActive === btn}"
          @click="btnActive = btn"
        >{{ btn }}</div>
      </div>
    </div>
    <div class="trade-body flex pb-5">
      <div class="trade-card card">
        <div class="card-header">
          <div class="card-header__title">BTC/USDT 43591.13</div>
          <i class="icon-chart"></i>
        </div>
        <div class="card-body flex">
          <div class="w-1/2">
            <span class="bg-green count">数量</span>
            <p class="mt-2">数量 0.068 个</p>
          </div>
          <div class="w-1/4">
            <p class="mb-2">买入价 43608.33</p>
            <p>止损价 42902.44</p>
          </div>
          <div class="w-1/4">
            <p class="text-red text-right mb-2">-1.17</p>
            <p class="text-red text-right">-1.95%</p>
          </div>
        </div>
        <div class="card-footer flex">
          <button class="btn ml-auto">止盈止损</button>
          <button class="btn ml-2.5">平仓</button>
        </div>
      </div>
      <div class="trade-card card">
        <div class="card-header">
          <div class="card-header__title">BTC/USDT 43591.13</div>
          <i class="icon-chart"></i>
        </div>
        <div class="card-body flex">
          <div class="w-1/2">
            <span class="bg-green count">数量</span>
            <p class="mt-2">数量 0.068 个</p>
          </div>
          <div class="w-1/4">
            <p class="mb-2">买入价 43608.33</p>
            <p>止损价 42902.44</p>
          </div>
          <div class="w-1/4">
            <p class="text-red text-right mb-2">-1.17</p>
            <p class="text-red text-right">-1.95%</p>
          </div>
        </div>
        <div class="card-footer flex">
          <button class="btn ml-auto">止盈止损</button>
          <button class="btn ml-2.5">平仓</button>
        </div>
      </div>
      <div class="trade-card card">
        <div class="card-header">
          <div class="card-header__title">BTC/USDT 43591.13</div>
          <i class="icon-chart"></i>
        </div>
        <div class="card-body flex">
          <div class="w-1/2">
            <span class="bg-green count">数量</span>
            <p class="mt-2">数量 0.068 个</p>
          </div>
          <div class="w-1/4">
            <p class="mb-2">买入价 43608.33</p>
            <p>止损价 42902.44</p>
          </div>
          <div class="w-1/4">
            <p class="text-red text-right mb-2">-1.17</p>
            <p class="text-red text-right">-1.95%</p>
          </div>
        </div>
        <div class="card-footer flex">
          <button class="btn ml-auto">止盈止损</button>
          <button class="btn ml-2.5">平仓</button>
        </div>
      </div>
      <div class="trade-card card">
        <div class="card-header">
          <div class="card-header__title">BTC/USDT 43591.13</div>
          <i class="icon-chart"></i>
        </div>
        <div class="card-body flex">
          <div class="w-1/2">
            <span class="bg-green count">数量</span>
            <p class="mt-2">数量 0.068 个</p>
          </div>
          <div class="w-1/4">
            <p class="mb-2">买入价 43608.33</p>
            <p>止损价 42902.44</p>
          </div>
          <div class="w-1/4">
            <p class="text-red text-right mb-2">-1.17</p>
            <p class="text-red text-right">-1.95%</p>
          </div>
        </div>
        <div class="card-footer flex">
          <button class="btn ml-auto">止盈止损</button>
          <button class="btn ml-2.5">平仓</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Trade',
  data: () => ({
    tabsBtn: ['模拟交易', '模拟持仓'],
    tabBtnActive: '模拟持仓',
    btns: ['持仓', '结算', '撤单'],
    btnActive: '持仓'
  })
}
</script>
