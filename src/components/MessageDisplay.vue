<template>
 <div class="display-window">
    <div v-if="documents" class="messages" ref="messages">
            <div v-for="doc in documents" :key="doc.id" class="single">
                <span class="created-at">{{ doc.createdAt}}</span>
                <div class="content">
                    <span class="name">{{ doc.name }}</span>
                    <span class="message">{{ doc.message }}</span>
                </div> 
            </div>
    </div>
    
 </div>
    

</template>

<script>
import readDoc from '../composables/useCollections'
// import { formatDistanceToNow } from 'date-fns'
import { computed } from '@vue/runtime-core'
export default {
    setup() {

        const { error, documents } = readDoc("messages")

        // const formattedDocuments = computed(() => {
        //   return documents.value.map((doc) => {
        //     console.log(doc)
        //     let time = formatDistanceToNow(doc.createdAt.toDate())
        //     return { ...doc, createdAt:time }
        //   })
        // })
        console.log(documents)
        return { error, documents}
    }
}
</script>

<style>
 .single {
    margin: 18px 0;
  }
.display-window {
    background: #fafafa;
    padding: 30px 20px;

}

.created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }
  span {
    text-align: start;
  }
  .content {
    display: flex;
  }
</style>