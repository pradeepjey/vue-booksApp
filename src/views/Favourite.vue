  
<script setup lang="ts">
    import BookCard from '../components/BookCard.vue';
    import { useBookStore } from '../store/book';
    import {onMounted} from 'vue';

    const store = useBookStore();

    onMounted(() => {
        store.getFavouriteBooksFromAPI();
    })
</script>

<template>
    <div class="mt-16 flex flex-wrap justify-center">
        <BookCard 
            v-for="book in store.getFavouriteBookList"
            v-bind:book="book"/>
    </div>
</template>