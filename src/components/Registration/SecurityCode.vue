<template>
  <div class="security-code mt-auto mb-auto">
    <h3>{{ title }}</h3>
    <p>We just send you a verify code. Check your inbox to get them.</p>
    <form class="mt-8">
      <div class="codes">
        <div
          v-for="(code, idx) in 4"
          :key="idx"
          class="input-field"
        >
          <input
            type="text"
            maxlength="1"
            autocorrect="off"
            autocomplete="off"
            autocapitalize="off"
            v-model="codeArray[idx]"
          >
        </div>
      </div>
      <button type="submit" class="btn btn-yellow">Sign up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SecurityCode',
  props: ['title'],
  data: () => ({
    codeArray: []
  })
}
</script>
