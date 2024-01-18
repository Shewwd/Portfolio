<script setup>
    import Header from '../components/header.vue'
    import Resume from '../components/resume.vue'
</script>

<template>
    <Header/>
        <div class="work-container">
            <h1 class="work-header">My Work</h1>

            <div class="work-card">
                <h1>Snake Game</h1>
            </div>
        </div>
    <Resume/>
</template>

<style scoped>
    .work-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 65vw;
        margin: 5vh auto 0 auto;
    }

    .work-header {
        display: inline-flex;
        width: 100%;
        margin-bottom: 20px;
        justify-content: start;
        border-bottom: 2px solid white;
    }

    .work-card {
        flex-grow: 1;
        margin-bottom: 20px;
        padding: 20px;
        color: #333333;
        background-color: whitesmoke;
        border: 2px solid darkgray;
        border-radius: 30px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        word-wrap: break-word;

        h1 {
            font-weight: bold;
            padding-bottom: 10px;
        }
    }
</style>
