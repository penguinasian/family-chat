import { projectFirestore } from "@/firebase/config"
import { ref } from 'vue'



    const readDoc = (collection) => {
        const error = ref(null)
        const documents = ref([])

        projectFirestore.collection(collection).orderBy("createdAt")
            .onSnapshot((snapshot) => {
                let results = []
                snapshot.docs.forEach((doc) => {
                    results.push({...doc.data(), id: doc.id})
                })
                
                documents.value = results
                error.value = null
            }, (err) => {
                console.log(err.message)
                error.value = "could not fetch data"
                documents.value = null
            })
            

            return { error, documents }
    }

    export default readDoc

    
