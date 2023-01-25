<script setup lang="ts">
    import { useBookStore } from "../store/book"
    import { ref } from 'vue'

    const store = useBookStore()
    const ENTER_KEYCODE = 13
    const RIGHT_KEYCODE = 39
    const predictedBook = ref({})

    /**
     * Keyup event handler
     * 
     * @param event 
     */
    function keyupEvent(event: any){
        switch(event.keyCode) {
            case ENTER_KEYCODE:
                showBook()
                break
            case RIGHT_KEYCODE:
                loadCompleteText()
                break
            default:
                getResults()
        }
    }

    /**
     * To get book results
     */
    function showBook(){
        store.setTypedValue(store.getPredictedValue.toString())
        store.setSearchResult(predictedBook.value)
    }

    /**
     * To load complete book name on right arrow click
     */
    function loadCompleteText(){
        store.setTypedValue(store.getPredictedValue.toString())
    }

    /**
     * to get book search result based on text input
     */
    function getResults(){
        if(store.getTypedValue == ""){
            store.setPredictedValue("")
        }else{
            store.searchBookFromAPI(store.typedValue.toString()).then((res: any) => {
                const predicted = res[0].name
                predictedBook.value = res[0]
                store.setPredictedValue(predicted)
            })
        }
    }
</script>

<template>
    <div id="search-div" class="relative border-none float-right">
        <input class="absolute border-none" type="text" id="background-input" v-model="store.getPredictedValue"/>
        <input class="relative border-none bg-transparent" type="text" id="search" v-model="store.typedValue" v-on:keyup="keyupEvent" />
    </div>
</template>

<style scoped>
    #search-div{
        width: 420px;
        margin: 15px 24px;
    }
    #background-input{
        color: #999999;
        height:32px;
        width:420px;
    }
    #background-input:focus-visible{
        border: none;
        outline: none;
    }
    #search{
        height:32px;
        width:420px;
    }
    #search:focus-visible{
        border: none;
        outline: none;
    }
    input[type="text"]{
        font-size:20px;
        text-transform: lowercase;
    }
    @media (max-width: 912px) {
        #search-div{
            width: 320px;
            margin: 15px auto;
            float: none;
        }
        #background-input{
            width:320px;
        }
        #search{
            width:320px;
        }
    }
</style>
