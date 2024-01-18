<script setup>
    import { ref, watch, computed } from "vue";
    import ChevronLeft from '../assets/svg/chevron-left.svg'
    import ChevronRight from '../assets/svg/chevron-right.svg'

    const collapsed = ref(true);

    const width = ref('30px');
    watch(collapsed, (newVal) => {
        width.value = newVal ? '30px' : '215px'; 
    });

    const iconComponent = computed(() => (collapsed.value ? ChevronLeft : ChevronRight));

</script>

<template>
    <div class="resume-icon" :style="{ width: width }">
        <img @click="collapsed = !collapsed" :src="iconComponent" class="svg" />
        <a v-if="!collapsed" href="../../public/resume.docx" download="Jacob-Shawd-Resume.docx">Download My Resume</a>
    </div>
</template>

<style scoped>
    .resume-icon {
        position: fixed;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-height: 30px;
        margin: 0 15px 15px 0;
        padding: 5px;
        background-color: white;
        color: black;
        border: 1px solid #333333;
        border-radius: 13px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        transition: width 0.4s ease-in-out;
    }

    .svg:hover{
        cursor: pointer;
        transform: scale(1.1);
    } 

    a {
        font-weight: 600;
        text-decoration: none;
        color: inherit;

        &:hover {
            color: blue;
            text-decoration: underline;
        }
    }
</style>