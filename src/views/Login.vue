<template>
  <div class="flex">
    <SidebarLogin />
    <div class="wrapper login">
      <keep-alive>
        <component
          :is="loginComponent"
          title="Enter to the code"
          @forgot="loginPage = 'ForgotForm'"
          @forgotPassword="loginPage = 'SecurityCode'"
          @submitCode="loginPage = 'NewPassword'"
          @submit="submitLogin"
        />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import SidebarLogin from '@/components/app/SidebarLogin'
import LoginForm from '@/components/Login/LoginForm'
import ForgotForm from '@/components/Login/ForgotForm'
import SecurityCode from '@/components/Registration/SecurityCode'
import NewPassword from '@/components/Login/NewPassword'

export default {
  name: 'Login',
  components: {
    SidebarLogin,
    LoginForm,
    ForgotForm,
    SecurityCode,
    NewPassword
  },
  data: () => ({
    loginPage: 'LoginForm'
  }),
  computed: {
    loginComponent () {
      return this.loginPage
    }
  },
  methods: {
    submitLogin (data) {
      console.log(data)
    }
  }
}
</script>
