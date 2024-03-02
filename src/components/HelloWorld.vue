<template>
  <div class="hello-world-container">
    <h1>{{ greeting }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greeting: 'Hello, Vue.js!',
      message: 'Welcome to your first Vue.js component!',
    };
  },
};
</script>

<style scoped>
.hello-world-container {
  text-align: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #3498db;
  margin-bottom: 10px;
}

p {
  color: #333;
  font-size: 16px;
}
</style>
