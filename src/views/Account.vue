<template>
  <div class="account flex">
    <div class="account-body flex">
      <div v-for="card in cards" :key="card" class="account-card">
        <div class="account-card__title">可用资产 USDT</div>
        <div class="account-card__body flex mt-auto items-center">
          <div class="subtitle">3.70</div>
          <div class="ml-auto">
            <div class="flex items-center package mb-1">
              <p>红包</p>
              <i class="icon-question"></i>
            </div>
            <div class="flex items-center package">
              <p>TFT</p>
              <i class="icon-question"></i>
            </div>
          </div>
          <div class="ml-5 text-right get">
              <p class="mb-0.5">6.33 <span>获取</span></p>
              <p>1036.72 <span>获取</span></p>
          </div>
        </div>
        <div class="account-card__footer">
          <button class="btn btn-blue py-2.5">充值</button>
          <button class="btn btn-border__blue ml-auto mr-auto">提款</button>
          <button class="btn btn-border__blue">划转</button>
        </div>
      </div>
      <div class="account-card empty">
        <i class="icon-plus"></i>
        <p>Addwallet</p>
      </div>
    </div>
    <div class="account-sidebar ml-auto">
      <div class="account-user">
        <div class="account-user__img">
          <i class="icon-user"></i>
        </div>
        <div class="account-user__field">
          <div class="lable">Login</div>
          <div class="value">huanghe 123</div>
        </div>
        <div class="account-user__field mt-4">
          <div class="lable">Title</div>
          <div class="password flex items-center">
            <div class="value">{{ notPassword }}</div>
            <i class="cursor-pointer ml-auto"
              :class="[ notEye ? 'icon-not-eye' : 'icon-eye']"
              @click="notEye = !notEye"
            ></i>
          </div>
        </div>
      </div>
      <div class="account-collapses">
        <div class="account-collapses__item">
          <i class="icon-tools"></i>
          <div class="name">自 资金明细</div>
          <i class="icon-arrow ml-auto"></i>
        </div>
        <div class="account-collapses__item">
          <i class="icon-settings"></i>
          <div class="name">个人设置</div>
          <i class="icon-arrow ml-auto"></i>
        </div>
        <div class="account-collapses__item">
          <i class="icon-setup"></i>
          <div class="name">交易设置</div>
          <i class="icon-arrow ml-auto"></i>
        </div>
        <div class="account-collapses__item">
          <i class="icon-help"></i>
          <div class="name">帮助中心</div>
          <i class="icon-arrow ml-auto"></i>
        </div>
        <div class="account-collapses__item">
          <i class="icon-box"></i>
          <div class="name">邀请返佣</div>
          <i class="icon-arrow ml-auto"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Account',
  data: () => ({
    cards: 5,
    notEye: true,
    password: '12345678'
  }),
  computed: {
    notPassword () {
      return this.notEye
        ? this.password.substring(0, 2) + this.password.replace(/./gm, '*').slice(0, 4) + this.password.slice(-2)
        : this.password
    }
  }
}
</script>
