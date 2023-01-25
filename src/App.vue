<script setup lang="ts">
  import {useRoute} from 'vue-router'
  import Header from './components/Header.vue'
  import "vue-haystack/style.css"
  import { ModalContainer } from "vue-haystack"
  import { onUnmounted, watch } from 'vue'
  import { useBookStore } from './store/book'

  const route= useRoute()
  const store = useBookStore()

  /**
   * To watch route change
   */
  const unwatch = watch(
    () => route.name, () =>{
        store.setCurrentPage(route.name)
    }
  )

  onUnmounted(() => {
      unwatch()
  });

</script>

<template>
  <Header />
  <div 
    class="mt-16"
    v-bind:class="store.getCurrentPage=='dashboard'? 'max-md:mt-40' : 'max-md:mt-16'">
    <router-view />
    <ModalContainer />
  </div>
</template>
