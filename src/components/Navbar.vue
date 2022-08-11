<template>
  <div class="nav-bar">
    <div>
        <p>Hi, there... {{ user.displayName }}</p>
        <p id="email-account">Currently logged in as {{ user.email }}</p>
    </div>
    
    <button class="btn btn-primary" @click="signout">Log out</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../composables/getUser'
import logoutUser from '../composables/logoutUser'
import { useRouter } from 'vue-router'
export default {

    setup() {

        const { user } = getUser()
        const router = useRouter()
        const { logout } = logoutUser()

        const signout = async () => {

            await logout()
            router.push({ name: 'welcome'})
        }

        return { user, signout }
 
    }

}
</script>

<style>

.nav-bar {
    padding-bottom: 20px;
    display: flex;
    border-bottom: 1px solid #eee;
    justify-content: space-between;
    align-items: center;
}

.nav-bar p {
    text-align: start;
    line-height: 0.5em;
    margin-left: 10px;
}

#email-account {
    color: darkgray;
}
</style>