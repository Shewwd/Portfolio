<script setup>
</script>

<template>
    <div class="landing">
        <div class="hello">
            <h1>Hello, I'm Jake</h1>
            <h2>Software Engineer</h2>
        </div>
        <nav class="links">
            <router-link to="/bio" class="link">Bio</router-link>
            <router-link to="/technologies" class="link">Technologies</router-link>
            <router-link to="/work" class="link">Work</router-link>
        </nav>  
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
        margin: 45% auto 0 auto;
    }

    .links {
        display: inline-flex;
        align-items: center;
        margin: 0 auto 0 auto;
        gap: 15px;

        .link {
            font-size: x-large;
            color: lightslategray;
            text-decoration: none;

            transition: transform 0.1s ease, padding 0.2s ease;
            transform-origin: center;

            &:hover {
                color: aliceblue;
                transform: scale(1.4); 

                &:nth-child(1) {
                    padding: 0 2px 0 0;
                }
                &:nth-child(2) {
                    padding: 0 20px 0 17px;
                }
                &:nth-child(3) {
                    padding: 0 0 0 10px;
                }
            }
        }
    }
</style>
