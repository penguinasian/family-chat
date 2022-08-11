<template>
<form>
    <textarea v-model="message" @keypress.enter.prevent="addMessage"
    placeholder="Type a message and hit enter to send..." 
    > 
    </textarea>
</form>
 
</template>

<script>
import { ref } from '@vue/reactivity'
import useCollection from '../composables/useCollection'
import getUser from '../composables/getUser'
import { timestamp } from '@/firebase/config'
export default {
    setup() {

        const { user } = getUser()

        const message = ref('')

        
        const { addDoc, error } = useCollection("messages")

        const addMessage = async () => {

            const doc = {
            name: user.value.displayName,
            email: user.value.email,
            message: message.value,
            createdAt: timestamp()
            }
            await addDoc(doc)
            if (!error.value) {
                console.log("Message saved to firestore")
                message.value = ''
            }
            console.log(error)
            
        }
        
    
        return { message, user, addMessage, error }
    }
}
</script>

<style scoped>

textarea {
    width: 100%;
    max-width: 100%;
    outline: none;
    border: 0;
    padding: 10px;
    box-sizing: border-box;
    font-family: inherit;
    
}
</style>