<script setup>
    import Header from '../components/header.vue'
    import Resume from '../components/resume.vue'
</script>

<template>
    <Header/>

    <div class="bio">
        <h2>What do I do?</h2>
        <p>I am a software engineer with a passion for web development and front-end design.</p>

        <h2>Who am I?</h2>
        <p>I am a 20-year-old, pursuing my bachelor's degree in Computer Science at Dakota State University in Madison, South Dakota. I am set to graduate in May 2024.</p>
        <p>I live in downtown Sioux Falls, and you can usually catch me walking my dog. His name is Gus, and he is an eleven-year-old yellow lab.</p>

        <h2>What are my hobbies & interests?</h2>
        <p>Outside of my internship and homework, I enjoy staying active. I work out every day and try to go rock climbing/bouldering as much as I can.</p>
        <p>Indoors, I enjoy playing video games or Dungeons & Dragons sessions with my friends.</p>
    </div>

    <Resume/>
</template>

<style scoped>
    .bio {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 65vw;
        margin: 30vh auto 0 auto;
    }
</style>
