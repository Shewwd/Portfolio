<script setup>

</script>

<template>
  <header>
    <h1>Jacob Shawd</h1>
    <nav>
      <h2><a href="/">Bio</a></h2>
      <h2><a href="/">Technologies</a></h2>
      <h2><a href="/">Work</a></h2>
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
    }
  }

  nav {
    display: inline-flex;

    h2 {
      a {
        color: white;
        text-decoration: none;
      }

      &:not(:first-child) {
        padding-left: 10px;
      }
    }
  }
</style>