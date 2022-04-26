<template>
  <div class="mt-auto mb-auto">
    <h3>Log in</h3>
    <form class="mt-8" @submit.prevent="submitLogin">
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
      <div class="input-field mb-4">
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
      <div class="forgot flex mb-8">
        <div class="cursor-pointer" @click="$emit('forgot')">Forgot password?</div>
        <div class="ml-auto">
          Don’t have an account?
          <span class="cursor-pointer text-white ml-1" @click="$router.push('/sign-up')">Sign up</span>
        </div>
      </div>
      <button type="submit" class="btn btn-yellow">Log in</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data: () => ({
    name: '',
    password: '',
    notEyePassword: true
  })
}
</script>
