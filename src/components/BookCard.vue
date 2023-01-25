
<script setup lang="ts">
    import Book from "../types/Book";
    import Confirmaiton from "./Confirmaiton.vue";
    import { useModalStore } from "vue-haystack";
    import { useBookStore } from "../store/book";
    import { toast } from 'vue3-toastify';
    import { useI18n } from 'vue-i18n'

    const props = defineProps<{ book: Book }>();
    const store = useBookStore();
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'global'
    })

    /**
     * Opens confirmation dialog to handle favourite
     */
    function openDialog(){
        useModalStore().push(Confirmaiton).onClose<any>((data) => {
            if(data)
                store.setBookFromAPI(props.book._id, !props.book.isFavourite).then(data => {
                    store.getBooksFromAPI()
                    store.getFavouriteBooksFromAPI()
                    toast(t('book.BookStatusHasBeenChanged'), {
                        autoClose: 1000,
                        position: toast.POSITION.BOTTOM_RIGHT,
                        type: toast.TYPE.SUCCESS
                    });

                })
        });
    }

    /**
     * To generate random rating
     * @returns random rating
     * 
     * @memberof BookCardComponent
     */
    function generateRating(){
        var precision = 100; // 2 decimals
        return Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) / (1*precision)/2;
    }
</script>

<template>
    <div class="card shadow-2xl rounded m-4 p-4">
        <div class="card-header h-14 flex">
            <div class="w-10">
                <img src="../assets/book.png" class="my-2 mx-0"/>
            </div>
            <div class="h-10 py-2">
                <span class="text-xl leading-5 block font-bold text-left">{{ book.name }}</span>
                <span class="text-sm leading-5 block font-extralight text-left">{{ book.author }}</span>
            </div>
        </div>
        <div class="card-body">
            <p class="text-left leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            <span>
                <vue3-star-ratings :showControl="false" :disableClick="true" :starSize="'18'" :modelValue="generateRating()"/>
            </span>
        </div>
        <div class="card-footer flex flex-wrap mt-4">
            <div class="w-1/2">
                <button 
                    type="button" 
                    @click="openDialog" 
                    class="float-left  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center mr-2 mb-2"
                    v-bind:class="book.isFavourite? 'text-white bg-[#ff4081] hover:bg-[#ff4081]/80 focus:ring-[#ff4081]/50 dark:hover:bg-[#ff4081]/80 dark:focus:ring-[#ff4081]/40' : 'text-navy border-navy'">
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                        {{t('book.favourite')}}
                </button>
            </div>
            <div class="w-1/2">
                <router-link :to="{ name: 'book', params: {id: book._id} }">
                    <button type="button" class="float-right py-2 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        {{t('book.view')}}
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .card{
        width: 400px;
        box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    }
    @media (max-width: 912px) {
        .card{
            width: 320px;
        }
    }
</style>