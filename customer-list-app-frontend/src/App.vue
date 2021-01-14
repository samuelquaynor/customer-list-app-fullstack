<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/create">Create</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
...
.form-wrapper {
  width: 500px;
  margin: 0 auto;
}
</style>