<script setup>

</script>

<template>
  <header>
    <h1>Jacob Shawd</h1>
    <nav>
      <router-link to="/bio" class="link">Bio</router-link>
      <router-link to="/technologies" class="link">Technologies</router-link>
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

    box-shadow: 0px 1px 5px #333333;

    h1 {
      display: inline-flex;
      flex-grow: 1;

      font-weight: 600;
      user-select: none;
    }
  }

  nav {
    display: inline-flex;

    .link {
      color: white;
      font-size: x-large;
      text-decoration: none;

      &:not(:first-child) {
        padding-left: 10px;
      }

      &:hover {
        color: lightgray;
      }
    }
  }
</style>