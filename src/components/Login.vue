<template>
 
    <form @submit.prevent="handleSubmit">
        <div class="mb-2">
            <input type="text" class="form-control" v-model="displayName" placeholder="display name" required>
        </div>
        <div class="mb-2">
            <input type="email" class="form-control" v-model="email" placeholder="email" required>
        </div>
        <div class="mb-2">
            <input type="password" class="form-control" v-model="password" placeholder="password" required>
        </div>
        <p class="error">{{ error }}</p>
        <button class="btn btn-primary mb-3">Log in</button>
        
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignUp from '../composables/signupUser'
export default {

    setup() {

        const displayName = ref('')
        const email = ref('')
        const password = ref('')
        const { signup, error } = useSignUp()

        const handleSubmit = async () => {
            
            await signup(email.value, password.value, displayName.value)
            if (!error.value) {

            }
            
        }

        return { displayName, email, password, handleSubmit, error }
    }
}
</script>