import { projectAuth } from "@/firebase/config"
import { ref } from 'vue'

const error = ref(null)
const login = async (email, password) => {

    try {

       const res = await projectAuth.signInWithEmailAndPassword(email, password)

        if (!res) {

            throw new Error("Invalid credentials!")
        }
        console.log(res)

    } catch (err) {

        console.log(err.message)
        error.value = err.message
    }

}



const userLogin = () => {

    return {
        error, login
    }
}

export default userLogin