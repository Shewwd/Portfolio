<script setup>
</script>

<template>
    <div class="landing">
        <div class="hello">
            <h1>Hello, I'm Jake :)</h1>
            <h2>Software Engineer</h2>
        </div>
        <div class="links">
            <h2>Bio</h2>
            <h2>Technologies</h2>
            <h2>Work</h2>
        </div>  
    </div>
</template>

<style scoped>
    .landing {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .hello {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 40% auto 0 auto;
    }

    .links {
        display: inline-flex;
        margin: 0 auto 0 auto;

        &:not(:first-child) {
            padding-left: 10px;
        }
    }
</style>
