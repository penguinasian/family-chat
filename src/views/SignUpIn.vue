<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="signup">
      <SignUp />
      <p>Already have an account. <span @click="signup = false">Log in</span> instead</p>
    </div>
    <div v-else>
      <Login />
      <p>Do not have an account. Please <span @click="signup = true">Sign up</span></p>
    </div>
  
  </div>
  
</template>

<script>
import SignUp from '../components/SignUp.vue'
import Login from '../components/Login.vue'
import { ref } from '@vue/reactivity'
export default {
  components: { SignUp, Login },
  setup() {

    const signup = ref(false)

    return { signup }

  }
}
</script>

<style>
body {
    background: #e3bde3;
}

.welcome span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}
</style>