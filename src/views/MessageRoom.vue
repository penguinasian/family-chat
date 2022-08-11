<template>
<div class="container">
    <Navbar />
    <MessageDisplay />
    <MessageBox />
</div>
  
</template>

<script>
import Navbar from '../components/Navbar.vue'
import MessageBox from '../components/MessageBox.vue'
import MessageDisplay from '../components/MessageDisplay.vue'
export default {
    components: { Navbar, MessageBox, MessageDisplay }
}
</script>

<style>

</style>