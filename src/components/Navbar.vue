<template>
  <div class="nav-bar">
    <div>
        <p>Hi, there... {{ user.displayName }}</p>
        <p id="email-account">Currently logged in as {{ user.email }}</p>
    </div>
    
    <button class="btn btn-primary">Log out</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../composables/getUser'
export default {

    setup() {

        

        const { user } = getUser()

        return { user }
 
    }

}
</script>

<style>

.nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-bar p {
    text-align: start;
    line-height: 0.5em;
}

#email-account {
    color: darkgray;
}
</style>