<template>
  <div class="flex">
    <SidebarLogin />
    <div class="wrapper login">
      <keep-alive>
        <component
          :is="signUpComponent"
          title="Sign up"
          @submit="submitSignUp"
        />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import SidebarLogin from '@/components/app/SidebarLogin'
import SignUpProfile from '@/components/Registration/SignUpProfile'
import SecurityCode from '@/components/Registration/SecurityCode'

export default {
  name: 'SignUp',
  data: () => ({
    signUpPage: 'SecurityCode'
  }),
  components: {
    SidebarLogin,
    SignUpProfile,
    SecurityCode
  },
  computed: {
    signUpComponent () {
      return this.signUpPage
    }
  },
  methods: {
    submitSignUp (data) {
      console.log(data)
      this.signUpPage = this.signUpPage === 'SignUpProfile' ? 'SecurityCode' : 'SignUpProfile'
    }
  }
}
</script>
