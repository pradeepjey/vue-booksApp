<script setup lang="ts">
    import MenuItem from './MenuItem.vue'
    import SearchBar from './SearchBar.vue'
    import { useBookStore } from '../store/book'
    import { useI18n } from 'vue-i18n'

    const store = useBookStore()
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'global'
    })
</script>

<template>
    <div 
        class="px-4 fixed top-0 left-0 w-full h-16 bg-navy z-10"
        v-bind:class="store.getCurrentPage=='dashboard'? 'max-md:h-32' : 'max-md:h-16'">
        <div class="h-full flex flex-row flex-wrap">
            <div class="basis-1/4 max-md:basis-full">
                <ul class="h-full inline-flex flex-row float-left max-md:float-none">
                    <MenuItem :menuName="t('header.home')" link="/"/>
                    <MenuItem :menuName="t('header.favourite')" link="/favourite"/>
                </ul>
            </div>
            <div class="basis-3/4 max-md:basis-full">
                <SearchBar v-if="store.getCurrentPage=='dashboard'" />
            </div>
        </div>
    </div>
</template>