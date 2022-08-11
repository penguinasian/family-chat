import { projectFirestore } from "@/firebase/config"
import { ref } from 'vue'


const useCollection = (collection) => {

    const error = ref(null)

    const addDoc = async (doc) => {
        try {

            await projectFirestore.collection(collection).add(doc)
    
        } catch (err) {
    
            error.value = err.message
        }
    }

    return { addDoc, error }
}


export default useCollection