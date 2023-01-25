  
<script setup lang="ts">
    import { useRoute } from 'vue-router'
    import { useBookStore } from '../store/book';
    import {onMounted} from 'vue';
    import Confirmaiton from '../components/Confirmaiton.vue';
    import { useModalStore } from "vue-haystack";
    import { toast } from 'vue3-toastify';
    import { useI18n } from 'vue-i18n';

    const store = useBookStore();
    const route = useRoute()
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'global'
    })
    
    onMounted(() => {
        const id : string = route.params.id.toString()
        store.getBookFromAPI(id);
    })

    /**
     * Opens confirmation dialog to handle favourite
     */
    function openDialog(){
        useModalStore().push(Confirmaiton).onClose<any>((data) => {
            if(data)
                store.setBookFromAPI(store.getCurrentBook._id, !store.getCurrentBook.isFavourite).then(data => {
                    store.getBooksFromAPI()
                    store.getFavouriteBooksFromAPI()
                    const id : string = route.params.id.toString()
                    store.getBookFromAPI(id);
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
    <div class="max-md:mt-4">
        <div class="img-block pt-4 max-md:clear-both">
            <div class="img">
                <img src="../assets/bookBig.png" />
            </div>
            <div class="fav-btn">
                <button 
                    type="button" 
                    @click="openDialog" 
                    class="float-left  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center mr-2 mb-2"
                    v-bind:class="store.getCurrentBook.isFavourite? 'text-white bg-[#ff4081] hover:bg-[#ff4081]/80 focus:ring-[#ff4081]/50 dark:hover:bg-[#ff4081]/80 dark:focus:ring-[#ff4081]/40' : 'text-navy border-navy'">
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    {{t('book.favourite')}}
                </button>
            </div>
        </div>
        <div class="content-block py-0 px-4 max-md:clear-both inline-block max-md:mt-6">
            <h2 class="text-left text-xl font-extrabold">{{store.getCurrentBook.name}} </h2>
            <h4 class="text-left text-sm">by  {{ store.getCurrentBook.author }}</h4>
            <section class="rating-section leading-8">
                <vue3-star-ratings :showControl="false" :disableClick="true" :starSize="'18'" :modelValue="generateRating()"/>
            </section>
            <p class="text-left text-sm leading-8">12 {{t('book.chapters')}}</p>
            <p class="text-left text-sm leading-8"> {{  t('book.publishedDate')}} - 27th May, 2015 </p>
            <p class="text-left text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p class="text-left text-sm">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
        </div>
    </div>
</template>

<style scoped>
    .img-block{
        width: 40%;
        float: left;
    }
    .content-block{
        width: 60%;
        float: left;
    }
    .img{
        width: 320px;
        height: auto;
        margin: 0 auto;
    }
    .fav-btn{
        margin: 16px auto;
        width: 126px;
    }

    @media (max-width: 912px) {
        .img-block{
            width: 100%;
            float: none;
        }
        .content-block{
            width: 100%;
            float: none;
        }
    }
</style>