  
<script setup lang="ts">
    import BookCard from '../components/BookCard.vue'
    import { useBookStore } from '../store/book'
    import {onMounted} from 'vue'

    const store = useBookStore()

    onMounted(() => {
        store.getBooksFromAPI()
    })
</script>

<template>
    <div class="mt-16 flex flex-wrap justify-center">
        <BookCard 
            v-for="book in store.getBookList"
            v-bind:book="book"/>
    </div>
</template>