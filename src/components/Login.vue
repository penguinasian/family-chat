<template>
 
    <form @submit.prevent="handleSubmit">
        <div class="mb-4">
            <input type="email" class="form-control" v-model="email" placeholder="email" required>
        </div>
        <div class="mb-4">
            <input type="password" class="form-control" v-model="password" placeholder="password" required>
        </div>
        <p class="error">{{ error }}</p>
        <button class="btn btn-primary mb-3">Log in</button>
        
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import userLogin from '../composables/loginUser'
import { useRouter } from 'vue-router'
export default {

    setup(context) {

        const email = ref('')
        const password = ref('')
        const { login, error } = userLogin()
        const router = useRouter()

        const handleSubmit = async () => {
            
            await login(email.value, password.value)
            if (!error.value) {
                router.push({ name: 'message' })
            }

        }

        return { email, password, handleSubmit, error }
    }
}
</script>