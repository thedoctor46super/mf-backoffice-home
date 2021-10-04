<template>
  <h1>backoffice-home</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/Home.vue</code> to test hot module replacement.</p>
  <router-link to="/mf-backoffice-root/home">Home</router-link>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      count: 0,
    };
  },
};
</script>
