<template>
  <div class="sign-up mt-auto mb-auto">
    <h3>Sign Up</h3>
    <form class="mt-8" @submit.prevent="submitSignUp">
      <div class="input-field">
        <label for="name">Email / Phone</label>
        <input
          id="name"
          type="text"
          placeholder="Your email or phone"
          required
          v-model.trim="name"
        >
      </div>
      <div class="input-field">
        <label for="password">Password</label>
        <input
          id="password"
          :type="notEyePassword ? 'password' : 'text'"
          placeholder="Password"
          autocomplete="off"
          required
          v-model.trim="password"
        >
        <i
          :class="[ notEyePassword ? 'icon-not-eye' : 'icon-eye']"
          @click="notEyePassword = !notEyePassword"
        ></i>
      </div>
      <div class="input-field">
        <label for="repeatPassword">Repeat password</label>
        <input
          id="repeatPassword"
          :type="notEyeRepeat ? 'password' : 'text'"
          placeholder="Repeat password"
          autocomplete="new-password"
          required
          v-model.trim="repeatPassword"
        >
        <i
          :class="[ notEyeRepeat ? 'icon-not-eye' : 'icon-eye']"
          @click="notEyeRepeat = !notEyeRepeat"
        ></i>
      </div>
      <button type="submit" class="btn btn-yellow">Continue</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignUpProfile',
  data: () => ({
    name: '',
    password: '',
    repeatPassword: '',
    notEyePassword: true,
    notEyeRepeat: true
  }),
  methods: {
    submitSignUp () {
      if (this.name !== '' && this.password !== '' && this.repeatPassword !== '') {
        this.$emit('submit', {
          name: this.name,
          password: this.password,
          repeatPassword: this.repeatPassword
        })
      }
    }
  }
}
</script>
