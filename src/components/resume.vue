<script setup>
    import ChevronUp from '../assets/svg/chevron-up.vue'

    const expanded = ref(false)

</script>

<template>
    <div class="resume-icon">
        <ChevronUp v-if="!expanded"/>
    </div>
</template>

<style scoped>

</style>