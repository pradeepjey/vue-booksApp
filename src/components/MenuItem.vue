<script setup lang="ts">
    defineProps<{ menuName: string, link: string }>()
</script>

<template>
    <li>
        <router-link class="p-5 block text-white hover:text-white cursor-pointer" :to="link">{{ menuName }}</router-link>
    </li>
</template>
