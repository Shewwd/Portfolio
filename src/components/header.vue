<script setup>

</script>

<template>
    <header>
        <h1>Jacob Shawd</h1>
        <nav>
            <router-link to="/about" class="link">About Me</router-link>
            <div class="break"/>
            <router-link to="/work" class="link">Work</router-link>
        </nav>
    </header>
</template>

<style scoped>
    header {
        display: inline-flex;
        align-items: center;
        width: 100%;
        padding: 10px 20px;
        background-color: #333333;    
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

        h1 {
            display: inline-flex;
            flex-grow: 1;
            font-weight: 600;
        }
    }

    nav {
        display: inline-flex;

        .link {
            color: white;
            font-size: x-large;
            text-decoration: none;

            &:hover {
                color: lightgray;
            }
        }
    }

    .break {
        border-left: 2px solid white;
        margin: 8px 10px 7px 10px;
    }
</style>