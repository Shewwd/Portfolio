<script setup>
    import Header from '../components/header.vue'
    import Resume from '../components/resume.vue'

    import JavaScriptIcon from '../assets/svg/javascript-icon.svg'
    import TypeScriptIcon from '../assets/svg/typescript-icon.svg'
    import CSharpIcon from '../assets/svg/csharp-icon.svg'
    import ReactIcon from '../assets/svg/react-icon.svg'
    import VueIcon from '../assets/svg/vue-icon.svg'
    import CIcon from '../assets/svg/c-icon.svg'
    import HTMLIcon from '../assets/svg/html-icon.svg'
    import BootstrapIcon from '../assets/svg/bootstrap-icon.svg'
</script>

<template>
    <Header/>
    <div class="about">
        <div class="card">
            <h1>About me</h1>
            <p>Hello, I'm Jacob Shawd, an aspiring computer science graduate with a passion for creating innovative and user-centric digital experiences. 
                Currently based in Sioux Falls, SD, I am on a journey to advance my career as a software engineer.</p>
        </div>
        <div class="card">
            <h1>Technologies</h1>
            <div class="technologies-list">
                <div class="col">
                    <div class="row">
                        <img :src="JavaScriptIcon" alt="JavaScript"/>
                        <p>JavaScript</p>
                    </div>
                    <div class="row">
                        <img :src="TypeScriptIcon" alt="TypeScript"/>
                        <p>TypeScript</p>
                    </div>
                    <div class="row">
                        <img :src="CSharpIcon" alt="CSharp"/>
                        <p>C#/.NET</p>
                    </div>
                    <div class="row">
                        <img :src="ReactIcon" alt="React"/>
                        <p>React</p>
                    </div>
                </div>
                <div class="col">
                    <div class="row">
                        <img :src="VueIcon" alt="Vue"/>
                        <p>Vue</p>
                    </div>
                    <div class="row">
                        <img :src="CIcon" alt="C"/>
                        <p>C/C++</p>
                    </div>
                    <div class="row">
                        <img :src="HTMLIcon" alt="HTML"/>
                        <p>HTML/CSS</p>
                    </div>
                    <div class="row">
                        <img :src="BootstrapIcon" alt="Bootstrap"/>
                        <p>Bootstrap</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Resume/>
</template>

<style scoped>
    .about {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 65vw;
        margin: 10vh auto 0 auto;
    }

    .card {
        margin-bottom: 20px;
        padding: 20px;
        border: 2px solid #333333;
        border-radius: 30px;

        h1 {
            font-weight: bold;
            padding-bottom: 10px;
        }
    }

    .technologies-list{
        display: flex;
        gap: 30px;
    }

    .col {
        display: flex;
        flex-direction: column;
    }

    .row {
        display: inline-flex;
        align-items: center;
    }
</style>
