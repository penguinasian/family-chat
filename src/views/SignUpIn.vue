<template>
  <div class="container">
    <p>Welcome</p>
  <SignUp />
  </div>
  
</template>

<script>
import SignUp from '../components/SignUp.vue'
export default {
  components: { SignUp }
}
</script>

<style>
body {
    background: #e3bde3;
}
</style>